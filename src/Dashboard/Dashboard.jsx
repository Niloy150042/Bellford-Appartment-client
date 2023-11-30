import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { Link, Outlet } from "react-router-dom";
import { Authcontext } from "../FIrebase/Authprovider";
import pic from "../assets/Pictures/Banne-pictures/logo.jpg";
import Sectiontitle from "../components/Sectiontitle";

const Dashboard = () => {
  const [loading, setloading] = useState(false);
  const { user } = useContext(Authcontext);
  const [userData, setUserData] = useState({});
  console.log(user.email);

  useEffect(() => {
    setloading(true);
    axios
      .get(`https://bellfrod-server-side.vercel.app/user?email=${user.email}`)
      .then((data) => {
        setUserData(data.data);
        setloading(false);
      });
  }, [user.email]);
  // console.log(userData);

  const isAdmin = userData?.role === "Admin";

  const ismember = userData?.role === "member";

  console.log(isAdmin, ismember);

  // todo

  return (
    <div>
      <Sectiontitle
        heading={"Welcome to Dahsboard"}
        subheading={"Explore your bookings by choosing us"}
      ></Sectiontitle>
      <div className=" flex flex-col lg:flex-row md:flex-row gap-9">
        <div className="text-red-300 w-[300px] bg-orange-100  flex flex-col mx-auto lg:mx-0 md:mx-0 rounded-md ">
          <p className="flex justify-center py-2">
            <img src={pic} className="rounded-3xl  h-[70px] w-[70px]" alt="" />
          </p>
          {isAdmin ? (
            <>
              <p className="flex justify-center font-bold font-poppins underline ">
                {" "}
                Bellford Admin dashboard
              </p>
              <Link to={"/dashboard/admin_profile"}>
                <button className="btn w-full btn-warning mt-4 mb-4">
                  Admin-profile <RiAdminFill />
                </button>
              </Link>
              <Link to={"/dashboard/managemembers"}>
                <button className="btn w-full  btn-warning  mb-4">
                  Manage-members <MdGroup></MdGroup>{" "}
                </button>
              </Link>

              <Link to={"/dashboard/make_announcement"}>
                <button className="btn w-full  btn-warning  mb-4">
                  Make-Announcement <TfiAnnouncement />{" "}
                </button>
              </Link>

              <Link to={"/dashboard/agreementrequest"}>
                <button className="btn w-full  btn-warning  mb-4">
                  Agreement-request <FaFile></FaFile>{" "}
                </button>
              </Link>

              <Link to={"/dashboard/cuppons"}>
                <button className="btn w-full  btn-warning  mb-4">
                  Manage-cuppons <CiDiscount1 />
                </button>
              </Link>

              <div className="divider"></div>
            </>
          ) : ismember ? (
            <>
              <p className="flex justify-center text-xl underline">
                {" "}
                Bellford Member dashboard
              </p>

              <Link to={"/dashboard/memberprofile"}>
                <button className="btn w-full btn-warning mt-4 mb-4">
                  My-profile
                </button>
              </Link>
              <Link to={"/dashboard/announcements"}>
                <button className="btn w-full  btn-warning  mb-4">
                  Announcements
                </button>
              </Link>
              <Link to={"/dashboard/makepayment"}>
                <button className="btn w-full  btn-warning  mb-4">
                  Make-payment
                </button>
              </Link>
              <Link to={"/dashboard/paymenthistory"}>
                <button className="btn w-full  btn-warning  mb-4">
                  Payment-history
                </button>
              </Link>
              <div className="divider"></div>
            </>
          ) : (
            // User dashboard
            <>
              <p className="flex justify-center text-xl underline">
                {" "}
                Bellford User dashboard
              </p>

              <Link to={"/dashboard/myprofile"}>
                <button className="btn w-full btn-warning mt-4 mb-4">
                  My-profile
                </button>
              </Link>
              <Link to={"/dashboard/announcements"}>
                <button className="btn w-full  btn-warning  mb-4">
                  Announcements
                </button>
              </Link>
              <div className="divider"></div>
            </>
          )}

          {/* shared option  */}

          <Link to={"/"}>
            <button className="btn w-full btn-warning  mb-4">
              Home <FaHome></FaHome>
            </button>
          </Link>
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
