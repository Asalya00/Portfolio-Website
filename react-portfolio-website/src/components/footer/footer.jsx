import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Asalya</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
<div className='footer_socials'>
  <a href='https.//facebook.com'><AiOutlineFacebook/></a>
  <a href='https.//instergram.com'><AiOutlineInstagram/></a>
  <a href='https.//twitter.com'><FiTwitter/></a>
</div>

<div className='footer_copyright'>
<small>&copy; Asalya Portfolio</small>
</div>

    </footer>
  )
}

export default Footer