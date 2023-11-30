import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Authcontext } from "../FIrebase/Authprovider";
import useAxiossecure from "../Hooks/useAxiossecure";

const Checkoutform = () => {
  const navigate = useNavigate();
  const [clientSecret, setclientsecret] = useState("");
  const stripe = useStripe();
  const [error, seterror] = useState();
  // const [transactionid,settransectionid]=useState('')
  const elements = useElements();

  const { user } = useContext(Authcontext);

  const [member, setmember] = useState({});

  const axiossecure = useAxiossecure();

  useEffect(() => {
    axiossecure.get(`/memberprofile?email=${user.email}`).then((res) => {
      if (res.data.role === "member") {
        setmember(res.data);
      }
    });
  }, [axiossecure, user.email]);

  useEffect(() => {
    console.log(typeof member.Rent);

    axios
      .post("http://localhost:5000/create_payment_intent", {
        price: parseInt(member.Rent),
      })
      .then((res) => {
        setclientsecret(res.data.clientSecret);
      });
  }, [member.Rent]);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      seterror(error.message);
    } else {
      console.log("payment method", paymentMethod);
      seterror("");
    }

    // confirming payment

    const { paymentIntent, confirmerror } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      }
    );
    if (confirmerror) {
      console.log("confirmerror", confirmerror);
    } else {
      console.log(paymentIntent, "payment intent");

      const paymentinfo = {
        name: member.name,
        email: member.email,
        Transaction_id: paymentIntent.id,
        Amount: member.Rent,
      };
      axiossecure
        .post("/paymentinfo", paymentinfo)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: "your payment is successful !",
              icon: "success",
            });
            navigate("/dashboard/paymenthistory");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(transactionid, "id ");
  };

  return (
    <form onSubmit={handlesubmit} className="lg:w-[700px]">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",

              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <div className="flex justify-center mt-4">
        <button className="btn btn-warning" type="submit" disabled={!stripe}>
          Pay
        </button>
      </div>
      <p className="text-center text-red-700 font-Dosis text-2xl">{error}</p>
    </form>
  );
};

export default Checkoutform;
