import { Link } from "react-router-dom"
import data from "./DataNav"
import PropTypes from 'prop-types'; 
import './nav.css'

const Nav = ({toggle}) => {
  return (
    <nav>
        <ul className ={`${!toggle?'nav__items':' visible'} gap-x-8 `}>
         {data.map(item => <li  key={item.id}><Link className="text-cyan-50 font-bold hover:text-blue-700 hover:underline" to={item.path}>{item.name}</Link></li> )}
        </ul>
    </nav>
  )
}
  Nav.propTypes={
  toggle:PropTypes.bool.isRequired
  }
export default Nav
