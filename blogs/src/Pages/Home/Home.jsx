import BgImage from '../../assets/VabK16lWRzmXccTudTxKKw.jpeg'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <main className='grow'>
      <section className="container header__section ">
        <div className=" Home">
        <div className="left p-8 content-center ">
          <h1 className='font-extrabold text-5xl mb-6'>Hit the Road. Rent Your Freedom</h1>
          <p className='mb-4'> 
            Unleash your wanderlust with convenient car rentals. Discover new destinations, explore hidden gems, and experience the open road. 
          </p>
          <Link to='products'> <button className='btn'>Read More  <span>&rarr;</span></button></Link>
        </div>
        <div className="right">
          <div className="image">
            <img
            className=' rounded-full'
             src={BgImage}
             style={{
              width:'30rem',
             }} 
             alt=""
              />
          </div>
        </div>
        </div>     
      </section>
    </main>
  )
}

export default Home
