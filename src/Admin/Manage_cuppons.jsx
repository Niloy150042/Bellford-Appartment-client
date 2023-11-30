import { useState } from "react";
import useAxiossecure from "../Hooks/useAxiossecure";

const Manage_cuppons = () => {
  const [cuppons, setcuppons] = useState([]);

  const axiossecure = useAxiossecure();

  axiossecure
    .get("/cuppons")
    .then((res) => {
      setcuppons(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(cuppons);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center font-Dosis text-xl">
            <th>Image</th>
            <th>cuppon-code</th>
            <th>Discount-price</th>
            <th>cuppon-description</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cuppons?.map((cuppon) => (
            <tr key={cuppon._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cuppon.image} />
                    </div>
                  </div>
                </div>
              </td>

              <td>{cuppon.cupponcode}</td>
              <td>{cuppon.Discount_percentage} % </td>
              <td>{cuppon.cuppon_description}</td>
              <button
                className="btn btn-warning"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                add
              </button>
              <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-md bg-orange-200">
            <h3 className="font-bold text-lg text-center">Available cuppon</h3>
         <p className="text-center py-3" >   <img src={cuppon.image} className="h-[30px] rounded-2xl" alt="" /></p>
          
            <p> cuppon : {cuppon.cupponcode}</p>
            <p> Discount : {cuppon.Discount_percentage} % </p>
            <p> description : {cuppon.cuppon_description
}</p>
         
            <div className="modal-action">
              <form method="dialog">
              
                <button className="btn">Close</button>
              </form>
            </div>
            </div>
          
        </dialog>
            </tr>

            


          ))}
        </tbody>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        {/* <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
              <form method="dialog">
              
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog> */}
      </table>
    </div>
  );
};

export default Manage_cuppons;
