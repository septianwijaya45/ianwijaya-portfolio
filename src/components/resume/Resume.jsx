import React from 'react'
import Card from '../../sections/Card/Card'
import { Data } from './Data'
import './resume.css'

const Resume = () => {
  return (
    <section className='resume container section' id='resume'>
      <h2 className='section__title'>My Experience</h2>

      <div className='resume__container grid'>
        <div className='timeline grid'>
          {Data.map((data) => {
            if(data.category === 'education'){
              return(
                <Card
                  key={data.id}
                  icon={data.icon}
                  title={data.title}
                  year={data.year}
                  desc={data.desc}
                  category={data.category}
                />
              );
            }
          })}
        </div>
        <div className='timeline grid'>
          {Data.map((data) => {
            if(data.category === 'experience'){
              return(
                <Card
                  key={data.id}
                  icon={data.icon}
                  title={data.title}
                  year={data.year}
                  desc={data.desc}
                  category={data.category}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume