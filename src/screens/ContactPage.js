import React, { useEffect } from 'react'
import { FaEnvelope, FaMapMarker, FaPhone, FaTimes, FaUserAlt } from 'react-icons/fa'
import contact from '../images/contact.png'
import AOS from 'aos'
const ContactPage = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <div className='contact-page'>
      <div className='container'>
        <div className='title'>
          <h1 data-aos="fade">Let's get in touch</h1>
          <p data-aos="fade">I'm open for any suggestion or just to have a chat.</p>
        </div>
        <div className='flex-block'>
          <div className='info'>
            <div className='info-flex-block'>

              <div className='item' data-aos="fade">
                <div className='icon'>
                  <FaMapMarker />
                </div>
                <div className='content'>
                  <h5>Address</h5>
                  <p>Binh Thanh District, Ho Chi Minh City</p>
                </div>
              </div>
              <div className='item' data-aos="fade">
                <div className='icon'>
                  <FaPhone />
                </div>
                <div className='content'>
                  <h5>Phone</h5>
                  <p>0889 210 454</p>
                </div>
              </div>
              <div className='item' data-aos="fade">
                <div className='icon'>
                  <FaEnvelope />
                </div>
                <div className='content'>
                  <h5>Email</h5>
                  <p>quocbaole5420@gmail.com</p>
                </div>
              </div>
            </div>
            <img data-aos="fade" src={contact} alt='contact' />
          </div>

          <div className='mail'>
            {/* <h3>Send Message</h3> */}
            <form>
              <div className='cus-input'>
                <FaUserAlt />
                <input placeholder='Full Name' />

              </div>
              <div className='cus-input'>
                <FaEnvelope />
                <input placeholder='Email' />
              </div>
              <div className='cus-input'>

                <textarea placeholder='Message' />
              </div>
              <button>Send message</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactPage
