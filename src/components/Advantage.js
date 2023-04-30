import React, { useEffect } from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import sass from '../images/sass.png'
import react from '../images/react.png'
import java from '../images/java.png'
import AOS from 'aos'
const Advantage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <div className="advantage " >
      <div className="container border-top" data-aos="fade">
        <h1 data-aos="fade">My Advantages</h1>
        <div className="flex-block">
          <div className="item" data-aos="fade">
            <div className="rounded">
              <img src={java} alt="java" />
            </div>
            <p>Java Core</p>
          </div>
          <div className="item" data-aos="fade">
            <div className="rounded">
              <img src={html} alt="html" />
            </div>
            <p>HTML</p>
          </div>
          <div className="item" data-aos="fade">
            <div className="rounded">
              <img src={css} alt="css" />
            </div>
            <p>CSS</p>
          </div>
          <div className="item" data-aos="fade">
            <div className="rounded">
              <img src={js} alt="js" />
            </div>
            <p>Javascript</p>
          </div>
          <div className="item" data-aos="fade">
            <div className="rounded">
              <img src={sass} alt="sass" />
            </div>
            <p>SASS</p>
          </div>
          <div className="item" data-aos="fade">
            <div className="rounded">
              <img src={react} alt="react" className="fixheight-react" />
              {/* <h1>80%</h1> */}
            </div>
            <p>ReactJS</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Advantage
