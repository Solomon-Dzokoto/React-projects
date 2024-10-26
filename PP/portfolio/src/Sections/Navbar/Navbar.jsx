
import './Navbar.css'
import data from './data'
import { IoIosColorPalette } from "react-icons/io";
const Navbar = ({openedModal}) => {
  return (
    <nav id='nav'>
       <div className="container nav__container">
         <a href="index.html" className='nav__logo'>
          <p>Portfolio.</p>
         </a>
         <ul className='nav__menu'>
           {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li> )
           }
         </ul>
         <button onClick={openedModal} id='theme__icon'><IoIosColorPalette /></button>
       </div>
    </nav>
  )
}

export default Navbar
