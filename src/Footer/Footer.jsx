import logo from '../assets/Pictures/Banne-pictures/logo.jpg'
const Footer = () => {
    return (
        <footer className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 bg-orange-200 text-base-content">
        <aside>
          <img src={logo} className='rounded-full h-[100px]' alt="" />
          <p className='font-cinzel text-orange-400  font-bold'>Stay with BELLFORD.<br/>Providing reliable Modern apprtment since 1992</p>
          <p className='font-cinzel font-bold ' >Copyright © 2023 - All right reserved</p>
        </aside> 
        <nav className='text-center font-Roboto ' >
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav className='font-Roboto'>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav className='font-Roboto'>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;