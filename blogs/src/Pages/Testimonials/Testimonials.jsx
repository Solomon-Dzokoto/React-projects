import data from './data'
import { Swiper,SwiperSlide } from 'swiper/react'
import './Testimonials.css'
import Image from '../../assets/y5hR-9e3QY6QeiCKdTipjQ.jpeg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <main className="min-h-screen py-8">
      <div className="container">
        <div className="top text-center mb-8 ">
        <h1 className='font-extrabold  bg-sky-100 text-2xl mb-4'>
          Hear What Our Customers Are Saying 
        </h1>
        <p className='w-4 bg-gray-500'>
        See how our products and services have made a real difference for real people.Read their stories and discover why MaaH-MooD Rentals is the right choice for you.
        </p>
        </div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
         {
          data.map(item => 
          <div key={item.id}>
          <SwiperSlide>
            <article className='flex shadow-2xl shadow-current gap-4 p-8 rounded-xl bg-sky-700'>
            <img
              className='thumb'
              src={item.img}
              alt={item.name} 
             />
             <div className="detail">
             
              <p>{item.message}</p>
              <h4 className='font-bold'>{item.name}</h4>
             </div>
            </article>
          </SwiperSlide>
          </div>
          )
         }
        </Swiper>
        <img 
        className='img'
        src={Image}
        alt={Image}
        />
      </div>
    </main>
  )
}

export default Testimonials
