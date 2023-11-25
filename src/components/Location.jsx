import Sectiontitle from '../components/Sectiontitle'
const Location = () => {
  return (
    <div>
        <Sectiontitle  heading={'Our Location'} subheading={'--Gulshan 2 ,Bellford Avenue,Dhaka--'} ></Sectiontitle>
        
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.44656244888!2d90.40391914452388!3d23.796839941737193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a7ba38543b%3A0x91d5f14ad296d72e!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1700905578151!5m2!1sen!2sbd"
        className="h-[500px] w-full py-3"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
