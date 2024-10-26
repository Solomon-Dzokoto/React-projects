import './About.css'
import Image from '../../assets/IMG_3969 2.jpg'
import Cards from '../../Components/Cards'
import data from './data'

const About = () => {
  return (
    <section id='about'>
       <div className="container about__container">
        <div className="about__left">
            <div className="about__portrait">
                <img src={Image}alt="About Image" />
            </div>
        </div>
        <div className="about__right">
            <h2>About Me</h2>
            <div className="about__cards">
              {
                data.map(item => (
                    <Cards key={item.id} className='about__card'>
                        <span className='about__card-icons'>{item.icon}</span>
                        <h5>{item.title}</h5>
                        <small>{item.desc}</small>
                    </Cards>
                ))
              }
            </div>
            <p>
               Building projects my clients love have always been my passion. Being in the web development industry for over 1 years and serving more than 70 happy clients worldwide, I'm always motivated to do more! 
            </p>
            <p>
                Hi my name is Solomon Dzokoto from Accra, Ghana. I'm a full-stack web developer with a Bachelor degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch with the details of your project let's get started! check out my resume below!
            </p>
        </div>
       </div>
    </section>
  )
}

export default About
