import Nav from "./Nav"
import { Link } from "react-router-dom"
import './Header.css'
import { useState } from "react"
const Header = () => {
  const [toggle,setToggle]= useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <header className=" bg-sky-600 grow-0">
     <div className="container flex py-4 justify-between items-center relative ">
      <Link className="p-2 bg-cyan-50 items-center gap-1 flex rounded-tr-lg rounded-tl-sm rounded-bl-lg rounded-br-sm" to='/'>
        <p className="text-xs">MaaH-MooD</p> <span className="text-sky-600">Rentals</span>
      </Link>
     <Nav 
      toggle={toggle} 
     />
      <div onClick={handleToggle} className={`${toggle?'menu close':'menu open'}`}>
        <span className="item item1"></span>
        <span className="item item2"></span>
        <span className="item item3"></span>
      </div>
    </div>
    
    </header>
  )
}

export default Header
