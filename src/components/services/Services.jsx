import React from 'react'
import { Image1, Image2, Image3 } from '../../assets';
import './services.css'

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "Mobile Developer",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Services = () => {
  return (
    <section className='services container section'>
      <h2 className='section__title'>My Services</h2>

      <div className='services__container grid'>
        {data.map((data) => {
          return(
            <div className='services__card' key={data.id}>
              <img src={data.image} alt={data.title} className="services__img" />

              <h3 className='services__title'>{data.title}</h3>
              <p className='services__description'>{data.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services