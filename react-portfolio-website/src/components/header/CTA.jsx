import React from 'react'
import CV from '../../assests/cv.pdf'

const CTA = () => {
  return (
    <div classname='cta'>
        <a herf={CV} download className='btn' >Download CV</a>
        <a herf="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
  )
}

export default CTA