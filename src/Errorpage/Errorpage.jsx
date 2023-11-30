import { Link } from 'react-router-dom';
import image from '../assets/Pictures/errorpage/airbnb-404.gif'
import { FaHome } from 'react-icons/fa';

const Errorpage = () => {
    return (
       <div>
         <div className='flex justify-center' >
           <img className='lg:h-[500px] lg:w-[1000px] rounded-full py-5 ' src={image} alt="" />
           {/* <Link to={'/'} > <button className='btn btn-warning' > Home <FaHome></FaHome></button></Link> */}
            
        </div>
         <p className='text-center mb-3' > <Link to={'/'} > <button className='btn btn-warning' > Go back Home <FaHome></FaHome></button></Link></p>
       </div>
    );
};

export default Errorpage;