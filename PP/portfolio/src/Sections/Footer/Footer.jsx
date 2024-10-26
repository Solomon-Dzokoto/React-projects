import './Footer.css'
import data from './data'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container container">
      <ul className='nav__menu'>
           {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li> )
           }
         </ul>
         <small>Copyright by <b>MaaH-MooD</b> all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
