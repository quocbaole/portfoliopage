import React, { useEffect } from 'react'
import quocbao from '../images/2143abae966a4934107b.jpg'
import fpt from '../images/fpt.png'
import udemy from '../images/udemy.png'
import cybersoft from '../images/cybersoft.png'
import AOS from 'aos'
const Overall = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <div className="overall" >
      <div className="container">
        <div data-aos="fade" className="title">
          <h1 >Le Quoc Bao</h1>
          <h1>IT comtor</h1>
          <h1>Front End Developer</h1>
        </div>
        <div className="flex-block" >
          <div className="image" data-aos="fade">
            <img src={quocbao} alt="image" />
          </div>
          <div className="text">
            <div className="item" data-aos="fade">
              <h4>BIOGRAPHY</h4>
              <p>I am Bao, a graduate of FPT University. I have earned a Bachelor's degree with a specialization in Japanese language studies. </p>
              <p>
              My current interest lies in web development, and I am currently <i>self-teaching Java core programming</i> with the goal of <i>Becoming a BrSE</i>.
              </p>
            </div>
            <div className="item" data-aos="fade">
              <h4>CONTACT</h4>
              <p>Da Lat, Vietnam</p>
              <p>quocbaole5420@gmail.com</p>
              <p>+84 889 210 454</p>
            </div>
            <div className="item" data-aos="fade">
              <h4>SERVICES</h4>
              <p>Documents Translation</p>
              <p>Meeting Interpretation</p>
            </div>
          </div>
          <div className="numbers">
            <div className="item" data-aos="fade">
              <h4>YEARS OF EXPERIENCE</h4>
              <p> 1+ </p>
            </div>
            <div className="item" data-aos="fade">
              <h4>FE DEVELOPER INTERNSHIP at BUYMED</h4>
              <p> 1/2022-4/2022 </p>
              <p>Write ReactJS/ NextJS code to implement new functions</p>
              <p>Commit code to Github and get the code reviewed by Senior Developers</p>
            </div>
            <div className="item" data-aos="fade">
              <h4>IT COMTOR at MTI TECHNOLOGY</h4>
              <p> 4/2022-4/2023 </p>
              <p>Translate Documents</p>
              <p>Join and offer interpretation for basic meetings</p>
              <p>Verify uncleared requirements from JP side</p>
            </div>
            
          </div>
        </div>

        <div className="logos" data-aos="fade">
          <img src={fpt} alt="fpt-logo" />
          <img src={udemy} alt="udemy-logo" />
          <img src={cybersoft} alt="cybersoft-logo" />
        </div>
      </div>
    </div>
  )
}

export default Overall
