import React from 'react'
import { Me } from '../../assets'
import ScrollDown from '../../sections/ScrollDown/ScrollDown'
import Shapes from '../../sections/Shapes/Shapes'
import SocialMedia from '../../sections/SocialMedia/SocialMedia'
import './home.css'

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt="Ian Wijaya" className='home__img' />
        <h1 className='home__name'>Ian Wijaya</h1>
        <span className='home__education'>I'm a Software Engineer</span>

        <SocialMedia />
        <div className='btn-hire'>
          <a href='mailto:septianwijayaaminulloh@gmail.com' className='btn'>Hire Me</a>
        </div>
        <ScrollDown/>
      </div>
      <Shapes/>
    </section>
  )
}

export default Home