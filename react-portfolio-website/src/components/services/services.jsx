import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='service'> 
    <h5>What I Offer</h5>
    <h2> Services</h2>
<div className="container services_container">
  <article className="service">
    <div className="service_head">
      <h3>Article writing</h3>
    </div>
    <ul className="service_list"> 
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Content Creation:</p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>SEO Optimization:</p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Proofreading and Editing:</p> </li><
      li> <AiOutlineCheck className='service_list-icon'/>
    <p>Topic Research: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Copywriting: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Customized Formatting: </p> </li>
    </ul>
  </article>
  {/* End of UI/UX */}

    <article className="service">
    <div className="service_head">
      <h3>Web development</h3>
    </div>
    <ul className="service_list"> 
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Website Design: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Front-End Development: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Back-End Development: </p> </li><
      li> <AiOutlineCheck className='service_list-icon'/>
    <p>Full-Stack Development: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>E-commerce Development: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Content Management System (CMS) Development: </p> </li>
    </ul>
  </article>
  {/* End of web development */}

    <article className="service">
    <div className="service_head">
      <h3>Assignment Writting</h3>
    </div>
    <ul className="service_list"> 
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Custom Assignment Writing: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Essay Writing: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Research Paper Writing: </p> </li><
      li> <AiOutlineCheck className='service_list-icon'/>
    <p>Proofreading and Editing: </p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Literature Review Writing</p> </li>
    <li> <AiOutlineCheck className='service_list-icon'/>
    <p>Case Study Analysis: </p> </li>
    </ul>
  </article>
  {/* content creation */}
</div>
    </section>
  )
}

export default Services