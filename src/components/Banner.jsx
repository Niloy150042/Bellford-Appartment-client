import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../assets/Pictures/Banne-pictures/banner-1.jpeg";
import banner2 from "../assets/Pictures/Banne-pictures/banner-2.jpeg";
import banner3 from "../assets/Pictures/Banne-pictures/banner-3.jpeg";
import banner4 from "../assets/Pictures/Banne-pictures/banner3.jpg";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div  >
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1900}
      >


        <div
          className="hero lg:h-[1000px]  "
          style={{
            backgroundImage:
              `url(${banner2})`,
             
          }}
        >
          <div className="hero-content text-center text-neutral-content hero-overlay bg-opacity-60 mt-20    ">
            <div className="lg:max-w-2xl ">
              <h1 className="mb-5 text-5xl font-bold">Luxury Super Delux</h1>
              <p className="mb-5 font-poppins ">
              Super deluxe rooms typically offer high-quality mattresses, luxurious linens, and a selection of pillows to ensure a restful sleep experience. Upgraded Technology: use cupon <span  className="font-poppins font-bold text-white  text-3xl">Delux202</span> to Get <span className=" font-poppins font-bold text-orange-600 text-3xl" >20% off</span>
              </p>
              <button className="btn btn-outline border border-solid border-orange-500 text-white font-Roboto mb-20">Book now</button>
            </div>
          </div>
        </div>

        <div
          className="hero h-[1000px] bg-fixed"
          style={{
            backgroundImage:
              `url(${banner4})`,
          }}
        >
          <div className="hero-content text-center text-neutral-content hero-overlay bg-opacity-60 mt-20 bg-fixed  ">
            <div className="lg:max-w-2xl ">
              <h1 className="mb-5 text-5xl font-bold">Luxury Super Delux</h1>
              <p className="mb-5 font-poppins ">
              Super deluxe rooms typically offer high-quality mattresses, luxurious linens, and a selection of pillows to ensure a restful sleep experience. Upgraded Technology: use cupon <span  className="font-poppins font-bold text-white  text-3xl">Delux202</span> to Get <span className=" font-poppins font-bold text-orange-600 text-3xl" >20% off</span>
              </p>
              <button className="btn btn-outline border border-solid border-orange-500 text-white font-Roboto mb-20">Book now</button>
            </div>
          </div>
        </div>

        <div
          className="hero h-[1000px] bg-fixed"
          style={{
            backgroundImage:
              `url(${banner2})`,
          }}
        >
          <div className="hero-content text-center text-neutral-content hero-overlay bg-opacity-60 mt-20 bg-fixed  ">
            <div className="lg:max-w-2xl ">
              <h1 className="mb-5 text-5xl font-bold">Luxury Super Delux</h1>
              <p className="mb-5 font-poppins ">
              Super deluxe rooms typically offer high-quality mattresses, luxurious linens, and a selection of pillows to ensure a restful sleep experience. Upgraded Technology: use cupon <span  className="font-poppins font-bold text-white  text-3xl">Delux202</span> to Get <span className=" font-poppins font-bold text-orange-600 text-3xl" >20% off</span>
              </p>
              <button className="btn btn-outline border border-solid border-orange-500 text-white font-Roboto mb-20">Book now</button>
            </div>
          </div>
        </div>

        <div
          className="hero h-[1000px] bg-fixed"
          style={{
            backgroundImage:
              `url(${banner1})`,
          }}
        >
          <div className="hero-content text-center text-neutral-content hero-overlay bg-opacity-60 mt-20 bg-fixed  ">
            <div className="lg:max-w-2xl ">
              <h1 className="mb-5 text-5xl font-bold">Luxury Super Delux</h1>
              <p className="mb-5 font-poppins ">
              Super deluxe rooms typically offer high-quality mattresses, luxurious linens, and a selection of pillows to ensure a restful sleep experience. Upgraded Technology: use cupon <span  className="font-poppins font-bold text-white  text-3xl">Delux202</span> to Get <span className=" font-poppins font-bold text-orange-600 text-3xl" >20% off</span>
              </p>
              <button className="btn btn-outline border border-solid border-orange-500 text-white font-Roboto mb-20">Book now</button>
            </div>
          </div>
        </div>
        <div
          className="hero h-[1000px] bg-fixed"
          style={{
            backgroundImage:
              `url(${banner3})`,
          }}
        >
          <div className="hero-content text-center text-neutral-content hero-overlay bg-opacity-60 mt-20 bg-fixed  ">
            <div className="lg:max-w-2xl ">
              <h1 className="mb-5 text-5xl font-bold">Luxury Super Delux</h1>
              <p className="mb-5 font-poppins ">
              Super deluxe rooms typically offer high-quality mattresses, luxurious linens, and a selection of pillows to ensure a restful sleep experience. Upgraded Technology: use cupon <span  className="font-poppins font-bold text-white  text-3xl">Delux202</span> to Get <span className=" font-poppins font-bold text-orange-600 text-3xl" >20% off</span>
              </p>
              <button className="btn btn-outline border border-solid border-orange-500 text-white font-Roboto mb-20">Book now</button>
            </div>
          </div>
        </div>




      </AutoplaySlider>
    </div>
  );
};

export default Banner;
