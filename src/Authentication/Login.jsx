import Sectiontitle from "../components/Sectiontitle";
import pic from '../assets/Pictures/authenctication/login.jpg'
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../FIrebase/Authprovider";
import Swal from "sweetalert2";


const Login = () => {
  const navigate =useNavigate()
    const {signinuser,signinwithgoogle,signinwithfacebook}= useContext(Authcontext)
    const hanldesubmit =(e)=>{
        e.preventDefault()

        const email =e.target.email.value
        const password = e.target.password.value 

        signinuser(email,password)
        .then(result=>{
            console.log(result.user);
            Swal.fire({
              title: "Good job!",
              text: "Log-in successful!",
              icon: "success"
            });
            navigate('/')
        })
        .catch(error=>{
            console.log(error);

        })
    }
    const handleclicked =()=>{
        signinwithgoogle()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
              title: "Good job!",
              text: "Log-in with google successfully !",
              icon: "success"
            });
            navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handlefacebook =()=>{
        signinwithfacebook()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    

    return (
        <div>
      <Sectiontitle heading={'Please Log_in'} subheading={'Log-in to your account in our BELLFORD '}></Sectiontitle>
      <div className="hero min-h-screen bg-base-200">
        
        <div className="hero-content flex-col lg:flex-row    gap-7">
          <img className='lg:h-[450px] rounded-full md:h-[300px] '  src={pic} alt="" />
          
          <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        
            <form onSubmit={hanldesubmit} className="card-body">
            <p className='text-center text-2xl font-Roboto font-bold text-orange-500' >Log-in</p>
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-Roboto text-xl text-orange-400">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold font-Roboto text-xl text-orange-400">Password :</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                 
                </label>
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-warning ">Login</button>
              </div>
              <div className="flex justify-center gap-5 text-2xl mt-2 text-blue-700" >
                  <Link onClick={handleclicked} >  <FcGoogle></FcGoogle></Link>
                   <Link onClick={handlefacebook} ><FaFacebook></FaFacebook></Link>
                  <Link><FaTwitter></FaTwitter></Link>
              </div>
              <div className="flex justify-between items-center " >
                <p className="font-Dosis text-xl font-bold" >New to Bellford ? </p>
                 <Link to={'/signup'} ><button className="btn btn-warning" >Sign-up</button></Link>
              </div>
              <Link to={'/'}><p className="text-center" ><button className="btn btn-outline" > Go home </button></p></Link>
            </form>
          </div>
        </div>
      </div>
  </div>
    );
};

export default Login;