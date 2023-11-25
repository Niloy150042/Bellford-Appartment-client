import Sectiontitle from "./Sectiontitle";
import pic1 from '../assets/Pictures/Banne-pictures/banner3.jpg'
import pic2 from '../assets/Pictures/Banne-pictures/banner-3.jpeg'
import pic3 from '../assets/Pictures/Banne-pictures/banner-2.jpeg'

const Cuppons = () => {
  return (
    <div>
      <Sectiontitle
        subheading={"We provie so many cuppons in a year"}
        heading={"Availabe cuppons"}
      ></Sectiontitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6 ">
        <div className="card  bg-base-100 border border-solid border-orange-400 rounded-2xl ">
          <figure>
            <img
              src={pic1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-base-200">
            
            <p className="text-center font-Roboto " >Get <span className="text-orange-400 text-xl font-bold">20% off </span> for this room in this winter . use the cuppon below</p>
            <div className="card-actions justify-center">
              <button className="btn btn-warning">BUBAS-200</button>
            </div>
          </div>
        </div>

        <div className="card  bg-base-100 border border-solid border-orange-400 rounded-2xl ">
          <figure>
            <img
              src={pic2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-base-200">
            
            <p className="text-center font-Roboto " >Get <span className="text-orange-400 text-xl font-bold">30% off </span> for this room in this winter . use the cuppon below</p>
            <div className="card-actions justify-center">
              <button className="btn btn-warning">WiNNIE-456</button>
            </div>
          </div>
        </div>

        <div className="card  bg-base-100 border border-solid border-orange-400 rounded-2xl ">
          <figure>
            <img
              src={pic3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body bg-base-200">
            
            <p className="text-center font-Roboto " >Get <span className="text-orange-400 text-xl font-bold">10% off </span> for this room in this winter . use the cuppon below</p>
            <div className="card-actions justify-center">
              <button className="btn btn-warning">SUMATO-400</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuppons;
