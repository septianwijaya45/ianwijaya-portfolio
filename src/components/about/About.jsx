import React from 'react'
import { Me3 } from '../../assets'
import AboutBox from '../../sections/AboutBox/AboutBox'
import './about.css'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>About Me</h2>

      <div className='about__container grid'>
        <img src={Me3} alt='About Me' className='about__image'/>

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>
              I'm Septian Wijaya, fresh graduate Informatic Technology from State of Politechnic Malang. I have some experience in the field of application development, especially in Web Developer, Mobile Developer or Software Engineer. Actively seeking more experience in Software Engineer to improve programming language skills.
            </p>
            <a href='' className='btn'>Download My CV</a>
          </div>
          <div className='about__skills grid'>
            {/* DATA */}
              <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>PHP</h3>
                  <span className='skills__number'>Laravel</span>
                </div>

                <div className='skills__bar'>
                  <span className='skills__percentage'></span>
                </div>
              </div>

              <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Javascript</h3>
                  <span className='skills__number'>Node Js, Express Js, React, React Native</span>
                </div>

                <div className='skills__bar'>
                  <span className='skills__percentage'></span>
                </div>
              </div>

              <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>CSS</h3>
                  <span className='skills__number'>Bootstrap</span>
                </div>

                <div className='skills__bar'>
                  <span className='skills__percentage'></span>
                </div>
              </div>
              
              <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Database</h3>
                  <span className='skills__number'>Mysql, MongoDB</span>
                </div>

                <div className='skills__bar'>
                  <span className='skills__percentage'></span>
                </div>
              </div>
            {/* DATA */}
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About