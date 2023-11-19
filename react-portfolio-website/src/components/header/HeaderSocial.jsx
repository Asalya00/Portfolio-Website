import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'


 
const HeaderSocial = () => {
  return (
    <div className='headerSocial'>
        <a href='http://linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='http://github.com' target='_blank'><FiGithub/></a>
    </div>
  )
}

export default HeaderSocial