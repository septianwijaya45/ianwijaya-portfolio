import React, {  useState } from 'react'
import DataProject from './Data'
import './portfolio.css'

const Portfolio = () => {
  const [items, setItems] = useState(DataProject);
  const filterItem = (categoryItem) => {
    const updateItems = DataProject.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updateItems);
  }

  return (
    <section className='work container section' id='portfolio'>
      <h2 className='section__title'>Recent My Project</h2>

      <div className='work__filters'>
        <span className='work__item' onClick={() => setItems(DataProject)}>All</span>
        <span className='work__item' onClick={() => filterItem('PHP/Laravel')}>PHP/Laravel</span>
        <span className='work__item' onClick={() => filterItem('MERN')}>MERN</span>
        <span className='work__item' onClick={() => filterItem('React')}>React</span>
        <span className='work__item' onClick={() => filterItem('Mobile')}>Mobile</span>
        <span className='work__item' onClick={() => filterItem('API')}>Postman API Checker</span>
        <span className='work__item' onClick={() => filterItem('Other')}>Other</span>
      </div>

      <div className='work__container grid'>
        {items.map((data) => {
          return (
            <div className='work__card' key={data.id}>
              <div className='work__thumbnail'>
                <img src={data.image} alt={data.title} classname="work__img"/>
                <div className='work__mask'></div>
              </div>

              <span className='work__category'>{data.category}</span>
              <h3 className='work__title'>{data.title}</h3>
              <a href={data.link} className='work__button' target='__blank'>
                <i className='icon-link icon'></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio