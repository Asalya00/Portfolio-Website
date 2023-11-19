import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1564zwe', 'template_bj1ufit', form.current, 'Xd5jeGNQBHygpDi-J')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
<div className='contact_container'>
  <div className='contact_options'>
    <article className='contact_option'>
      <MdOutlineMailOutline className='contact_option-icon'/>
      <h4>Email</h4>
      <h5>Gunerathneasalya95@gmail.com</h5>
      <a href='mailto:Gunerathneasalya95@gmail.com' target='_blank'>Send me a message.</a>
    </article>
    <article className='contact_option'>
      <BsWhatsapp className='contact_option-icon'/>
      <h4>Whatsapp</h4>
      <h5>0769664399</h5>
      <a href='https://api.whatsapp.com/send?phone+9476966499' target='_blank'>Send me a message.</a>
    </article>
  </div>
  {/*End of contact option */}
  <form ref={form} onSubmit={sendEmail}>
    <input type='email' name='email' placeholder='Yor email' required />
    <textarea name='message' rows='7' placeholder='Yor message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send message</button>
  </form>
</div>

    </section>
  )
}

export default Contact