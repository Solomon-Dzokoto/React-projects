import './Header.css'
import Image from '../../assets/Header.jpeg'
import data from './data'

const Header = ({backgroundColor}) => {
  return (
    <header id='header container'>
      <div className="container header__container">
        <div className="header__profile">
            <img src={Image} alt="Personal Image" />
        </div>
        <h3>Solomon Dzokoto</h3>
        <p>
          You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
        </p>
        <div className="header__cta">
            <a href="#contacts" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
            {
                data.map(item => <a key={item.id} href={item.link} target='_black' rel='noopener noreferrer'>{item.icon}</a>)
            }
        </div>
      </div>
    </header>
  )
}

export default Header
