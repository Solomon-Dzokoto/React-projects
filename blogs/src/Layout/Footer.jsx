
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-sky-700  py-8 grow-0">
      <div className="container grid ">
        <div className="about">
          <h2 >0ur  Products</h2>
          <ul className="our__products">
              <li><a>career</a></li>
              <li><a>Hotels</a></li>
              <li><a>Cars</a></li>
              <li><a>Packages</a></li>
              <li><a>Features</a></li>
              <li><a>Priceline</a></li>
          </ul>
        </div>
        <div className="about">
          <h2>About MaaH-MooD Rentals</h2>
        <ul >
          <li><a>Why MaaH-MooD Rentals</a></li>
          <li><a>Our Story</a></li>
          <li><a>Investors</a></li>
          <li><a>Press Centers</a></li>
          <li><a>Advertise</a></li>
        </ul>
        </div>
        <div className="about">
          <h2>Resources</h2>
        <ul>
          <li><a>Download</a></li>
          <li><a>Help Centers</a></li>
          <li><a>Guides</a></li>
          <li><a>Partner Network</a></li>
          <li><a>Mechanics</a></li>
          <li><a>Developer</a></li>
        </ul>
        </div>
        <div className="about">
          <h2>Extras</h2>
        <ul className="our__products">
          <li><a>Rental Deal</a></li>
          <li><a>Repair Shop</a></li>
          <li><a>View Booking</a></li>
          <li><a>PHire Companies</a></li>
          <li><a>New Offers</a></li>
        </ul>
        </div>  
      </div>
      <div className="bottom container">
        <small>Copyright &copy; by MaaH-MooD 2024.All rights reserved</small>
        <div className="socials">
          <span className="btn opp"><FaFacebookSquare/></span>
          <span className="btn opp"><FaXTwitter/></span>
          <span className="btn opp" ><FaLinkedin/></span>
          <span className="btn opp"><FaFacebookMessenger/></span>
        </div>
        </div>
    </footer>
  )
}

export default Footer
