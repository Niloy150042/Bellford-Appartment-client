import { Link, useNavigate } from "react-router-dom";
import pic from "../assets/Pictures/authenctication/signup.jpg";
import Sectiontitle from "../components/Sectiontitle";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { Authcontext } from "../FIrebase/Authprovider";
import Swal from "sweetalert2";

const Signup = () => {
  const { signupuser, updateuserprofile } = useContext(Authcontext);
  const navigate =useNavigate()

  const hanldesubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.image.value;

    signupuser(email, password, photoURL)
      .then((result) => {
        updateuserprofile(name, photoURL)
          .then((result) => {
            console.log("update profile ", result);
          })
          .catch((error) => {
            console.log(error);
          });
          Swal.fire({
            title: "Good job!",
            text: "Sign-up successful !",
            icon: "success"
          });
          navigate('/')
          

        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Sectiontitle
        heading={"Please SIgn-up"}
        subheading={"create your account in our BELLFORD "}
      ></Sectiontitle>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row    gap-4">
          <img
            className="lg:h-[500px] rounded-full md:h-[300px] "
            src={pic}
            alt=""
          />

          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={hanldesubmit} className="card-body">
              <p className="text-center text-xl font-Roboto font-bold text-orange-500">
                Sign-up
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-Roboto text-xl text-orange-400">
                    Your name :
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-Roboto text-xl text-orange-400">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-Roboto text-xl text-orange-400">
                    Password :
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-Roboto font-bold text-xl text-orange-400">
                    Your picture :{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="your profile picture link"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning ">Sign-up </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-Dosis text-xl font-bold">
                  Already have an account ?{" "}
                </p>
                <Link to={"/login"}>
                  <button className="btn btn-warning">Log-in </button>
                </Link>
              </div>
              <Link to={"/"}>
                {" "}
                <p className="text-center">
                  <button className="btn btn-outline">
                    Back to home <FaHome></FaHome>{" "}
                  </button>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
