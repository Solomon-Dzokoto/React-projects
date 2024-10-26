import {Link} from 'react-router-dom'
import { FaShoppingCart,FaSearch } from "react-icons/fa";
import './navBar.css'
import { useRef } from 'react';
import { ShopContext } from '../context/shop-context'
import { useContext } from 'react'
import Image from '../assets/Fa0K8Pn4Qli1ZLYry5nMdg-removebg-preview.png'
const NavBar = () => {
  const {inputValue,setInputValue}=useContext(ShopContext);
  const inputRef = useRef(null);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to='/'>
        <img 
         src={Image}
         style={{width:"5rem",cursor:'pointer'}}
         alt=""
         />
        </Link>
       
      </div>
      <div className="search">
        <input
          type="search" 
          ref={inputRef}
          autoFocus 
          value={inputValue}
          onChange={(e)=>{ 
            setInputValue(e.target.value)
            inputRef.current.focus();
            console.log(e.target.value)
          }}
          className='input'
          placeholder='Search...'
          />
          <FaSearch
           className='btn'
          />
      </div>
      
      <div className="links">
        <Link to='/'>Shop</Link>
        <Link to='/cart'><FaShoppingCart /></Link>
      </div>
    </div>
  )
}

export default NavBar
