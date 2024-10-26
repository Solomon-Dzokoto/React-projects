import './portfolio.css'
import data from './data'
import { useState} from 'react';
import Cards from '../../Components/Cards'


const Portfolio = ({primaryColor}) => {
  
  const [activeCat, setActiveCat] = useState('All');
  
  const filteredData = activeCat === 'All' ? data : data.filter(item => activeCat === item.cat);

  return (
    <section id='portfolio'>
      <div className="container portfolio__container">
        <h2>Recent Projects</h2>
        <p>Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories</p>
        <ul>
          <li><button style={{background:activeCat === 'All' ?primaryColor:''}} onClick={() => setActiveCat('All')} className='btn side'>All</button></li>
          <li><button style={{background:activeCat === 'Frontend' ?primaryColor:''}} onClick={() => setActiveCat('Frontend')} className='btn side'>Frontend</button></li>
          <li><button style={{background:activeCat === 'UI/UX' ?primaryColor:''}} onClick={() => setActiveCat("UI/UX")} className='btn side'>UI/UX</button></li>
        </ul>
          <ul className='cards__details'>
            {filteredData.map(item => (
              <Cards className="cards__items" key={item.id}>
                <img loading="lazy" style={{ width: '20vw', height: '30vh' }} src={item.image} alt="images" />
                <h4>{item.cat}</h4>
                <p>{item.desc}</p>
              </Cards>
            ))}
           
          </ul>
      </div>
    </section>
  );
}

export default Portfolio;
