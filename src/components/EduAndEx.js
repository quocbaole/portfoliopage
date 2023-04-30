import React, { useEffect } from 'react'
import AOS from 'aos'
const EduAndEx = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <div className="edu-and-ex " >
      <div className="container border-top" data-aos="fade">
        <h1 data-aos="fade">Education & Experience</h1>
        <div className="row-flex">
          
          <div className="column-flex" data-aos="fade">
            <h6>2019 - 2020</h6>
            <div className="item">
              <h5>Malaysia Foreign Exchange</h5>
              <p>KDU University</p>
            </div>
            <div className="item">
              <h5>Japan Foreign Exchange</h5>
              <p>KGU University</p>
            </div>
           
          </div>
          <div className="column-flex" data-aos="fade">
            <h6>2021 - 2022</h6>
            <div className="item">
              <h5>Front End Course</h5>
              <p>Cybersoft IT Center</p>
            </div>
            <div className="item">
              <h5>Udemy Courses</h5>
              <p>React, NodeJS lessons from Maximilian, Jonas</p>
            </div>
            <div className="item">
              <h5>Japanese Certificate</h5>
              <p>JLPT N2</p>
            </div>
            
          </div>
          <div className="column-flex" data-aos="fade">
            <h6>2023 - Now</h6>
            <div className="item">
              <h5>Japanese Certificate</h5>
              <p>JLPT N1</p>
            </div>
            <div className="item">
              <h5>Graduated FPT University</h5>
              <p>Bachelor's degree of Japanese language</p>
            </div>
            <div className="item">
              <h5>Self-teaching Java core</h5>
              <p>Java lessons from Tim Buchalka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EduAndEx
