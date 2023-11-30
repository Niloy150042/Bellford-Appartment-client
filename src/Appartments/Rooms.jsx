import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Sectiontitle from "../components/Sectiontitle";
import Room from "../singleroom/Room";

const Rooms = () => {
  const { count } = useLoaderData();
  console.log(count);
  const [rooms, setrooms] = useState([]);
  const [itemsperpage, setiemsperpage] = useState(4);
  const [currentpage, setcurrentpage] = useState(0);

  const numberofpages = Math.ceil(count / itemsperpage);
  console.log(numberofpages);

  const pages = [...Array(numberofpages).keys()];
  useEffect(() => {
    fetch(
      `https://bellfrod-server-side.vercel.app/rooms?page=${currentpage}&size= ${itemsperpage}`
    )
      .then((res) => res.json())
      .then((data) => setrooms(data));
  }, [currentpage, itemsperpage]);
  console.log(rooms);

  const handleitemsperpage = (e) => {
    const val = parseInt(e.target.value);

    console.log(val);
    setiemsperpage(val);
    setcurrentpage(0);
  };
  const handlepreviouspage = () => {
    if (currentpage > 0) {
      setcurrentpage(currentpage - 1);
    }
  };
  const handlenextpage = () => {
    if (currentpage < pages.length) {
      setcurrentpage(currentpage + 1);
    }
  };

  return (
    <div className="bg-slate-200">
      <Sectiontitle
        heading={'"Our Luxurious Appartment"'}
        subheading={
          "Please ! hit the agreemnet button if you want to book the room"
        }
      ></Sectiontitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-3 gap-4 px-2">
        {rooms?.map((room) => (
          <Room key={room._id} rooms={room}></Room>
        ))}
      </div>
      <div className="flex justify-center py-7">
        <Link to={"/"}>
          {" "}
          <button className="btn btn-warning ">
            {" "}
            Back to Home <FaHome />{" "}
          </button>
        </Link>
      </div>
      <div className="flex justify-center mb-8 gap-2 items-center">
        <p>pages--</p>
        <button onClick={handlepreviouspage} className="btn btn-warning">
          Prev
        </button>

        {pages?.map((page) => (
          <button
            onClick={() => setcurrentpage(page)}
            className={currentpage === page && "btn btn-warning"}
            key={page}
          >
            {" "}
            {page}{" "}
          </button>
        ))}

        <select
          value={itemsperpage}
          onChange={handleitemsperpage}
          name=""
          id=""
        >
          <option value="4">4</option>
          <option value="5"> 5 </option>
          <option value="6"> 6 </option>
        </select>
        <button onClick={handlenextpage} className="btn btn-warning">
          Next
        </button>
      </div>
    </div>
  );
};

export default Rooms;
