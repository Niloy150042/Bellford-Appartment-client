import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkoutform from "../Checkoutform/Checkoutform";

const stripepromise = loadStripe('pk_test_51OEvpjD61tUFHXaWJM92JjfA0DYVkQd7ttAw7Lppaje5Ou7ri0IumYYkMVXffwfp5EHjTbUMafXBOgZ2a1WFBOyH00xpHsw28d')

const Payment = () => {
    return (
        <div> 
          <Elements stripe={stripepromise} >
            <Checkoutform></Checkoutform>

          </Elements>
         
            
        </div>
    );
};

export default Payment;