import './contacts.css'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";


const Contact = () => {
     const handleEmail = () => {
     window.location.href = 'mailto:dzokotosolomon85@gmail.com?subject&body'
     }
     const handleTel = () => {
     window.location.href = 'tel:+233551569973'

     }
     const handleWhatsapp = () => {
     window.location.href ='https://wa.me/+233551569973'

     }
     
  return (
    <section id='contacts'>
       <h2>Get In Touch</h2>
       <p>Shoot me a message via any the link below</p>
      <div className="container contact__container">
        <button onClick={handleEmail} className='btn btttn primary'><FaEnvelope/></button>
        <button onClick={handleTel} className='btn btttn primary'><FaPhone/></button>
        <button onClick={handleWhatsapp } className='btn btttn primary'><IoLogoWhatsapp/></button>

      </div>
     
    </section>
  )
}

export default Contact
 