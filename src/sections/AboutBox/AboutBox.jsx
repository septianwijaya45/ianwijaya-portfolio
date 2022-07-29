import React from 'react'

const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className='about__box'>
            <i className='about__icon icon-fire'></i>

            <div>
                <h3 className='about__title'>15</h3>
                <span className='about__subtitle'>Project Completed</span>
            </div>
        </div>
        <div className='about__box'>
            <i className='about__icon icon-event'></i>

            <div>
                <h3 className='about__title'>2</h3>
                <span className='about__subtitle'>Project Working</span>
            </div>
        </div>
        <div className='about__box'>
            <i className='about__icon icon-people'></i>

            <div>
                <h3 className='about__title'>12</h3>
                <span className='about__subtitle'>Satisfied Client</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox