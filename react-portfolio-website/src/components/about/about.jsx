import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className= 'about_icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <FiUsers className= 'about_icon'/>
              <h5>Clients</h5>
              <small>200+ </small>
            </article>
            <article className="about_card">
              <AiOutlineProject className= 'about_icon'/>
              <h5>Projects</h5>
              <small>800+</small>
            </article>
          </div>
          <p>
          I am a 23-year-old undergraduate student pursuing a degree in Information Communication Technology at Uva Wellassa University. With a passion for technology and its potential to transform lives, I am dedicated to expanding my knowledge and skills to contribute to the ever-evolving field of ICT.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About