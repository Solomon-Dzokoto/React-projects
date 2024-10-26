import './Contact.css'
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzgreql");
  if (state.succeeded) {
    return <h1 className='min-h-screen font-extrabold grid content-center text-2xl m-8 text-center'>Thanks for the message, we will reach out to you soon</h1>;
}
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
    <section className='contacts min-h-screen text-center py-8'>
      <div className="container">
        <h1 className='font-extrabold mb-4 text-2xl'>Get In Touch</h1>
        <p className='mb-8'>Send us a message via any the link below</p>
        <form onSubmit={handleSubmit} className='relative'>
          <textarea  
          id='message'
          name='message'
          rows='10'
          cols='80'
          className=' border caret-white rounded-xl block p-4 w-38'
          placeholder='Message...'
          />
          <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
           />
          <button disabled={state.submitting} className='btn absolute p-4 right-0 bottom-0' type="submit">Send</button>
        </form>
        <div className="contact__container">
          <button onClick={handleEmail} className=' bn '><FaEnvelope/></button>
          <button onClick={handleTel} className=' bn '><FaPhone/></button>
          <button onClick={handleWhatsapp } className=' bn'><IoLogoWhatsapp/></button>
        </div>
      </div>
    
     
    </section>
  )
}

export default Contact
