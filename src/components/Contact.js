import React, { useEffect } from 'react'
import ig1 from '../images/ig1.png'
import ig2 from '../images/ig2.png'
import ig3 from '../images/ig3.png'
import ig4 from '../images/ig4.png'
import ig5 from '../images/ig5.png'
import arrow from '../images/arrow.svg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import { Carousel } from 'react-responsive-carousel'

const Contact = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  const redirectHandler = projectLink => {

    window.open(`${projectLink}`);
  }
  return (
    <div className="contact">
      <div className="container" data-aos="fade">
        <h1 data-aos="fade">_tum.5420_</h1>
        <div className="carousel">
        <Carousel
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            dynamicHeight={false}
          >
            <div>
              <div className="item">
                
              <button onClick={() => {
                    redirectHandler("https://www.instagram.com/_tum.5420_/")
                  }}> <img src={ig1} /></button>
              </div>
            </div>
            <div>
              <div className="item">
              <button onClick={() => {
                    redirectHandler("https://www.instagram.com/_tum.5420_/")
                  }}> <img src={ig2} /></button>
               
              </div>
            </div>
            <div>
              <div className="item">
                
              <button onClick={() => {
                    redirectHandler("https://www.instagram.com/_tum.5420_/")
                  }}> <img src={ig3} /></button>
              </div>
            </div>
            <div>
              <div className="item">
                
              <button onClick={() => {
                    redirectHandler("https://www.instagram.com/_tum.5420_/")
                  }}> <img src={ig4} /></button>
              </div>
            </div>
            <div>
              <div className="item">
                
              <button onClick={() => {
                    redirectHandler("https://www.instagram.com/_tum.5420_/")
                  }}> <img src={ig5} /></button>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="flex-block" data-aos="fade">
          <a href="https://www.instagram.com/_tum.5420_/"><img src={ig1} alt="ig1" /></a>
          <a href="https://www.instagram.com/_tum.5420_/"><img src={ig2} alt="ig2" /></a>
          <a href="https://www.instagram.com/_tum.5420_/"> <img src={ig3} alt="ig3" /></a>
          <a href="https://www.instagram.com/_tum.5420_/"><img src={ig4} alt="ig4" /></a>
          <a href="https://www.instagram.com/_tum.5420_/"> <img src={ig5} alt="ig5" /></a>
        </div>
        <div className="call-block" data-aos="fade">
          {window.innerWidth <= 696 ?
            <button onClick={() => {
              window.scrollTo(0, 0)

            }}>
              <Link to='/contact'>
                <div className="call">
                  <p>DESCRIBE YOUR PROJECT</p>
                  <h1>Contact<br /> Quoc Bao</h1>
                  <img src={arrow} alt="arrow" />
                </div>
              </Link>
            </button>
            :
            <button onClick={() => {
              window.scrollTo(0, 0)

            }}>
              <Link to='/contact'>
                <div className="call">
                  <p>DESCRIBE YOUR PROJECT</p>
                  <h1>Contact<br /> Quoc Bao</h1>
                  <img src={arrow} alt="arrow" />
                </div>
              </Link>
            </button>
            // <button onClick={props.showModalHandler} >
            //   <div className="call">
            //     <p>DESCRIBE YOUR PROJECT</p>
            //     <h1>Contact<br /> Quoc Bao</h1>
            //     <img src={arrow} alt="arrow" />
            //   </div>
            // </button>
          }

        </div>
      </div>
    </div >
  )
}

export default Contact
