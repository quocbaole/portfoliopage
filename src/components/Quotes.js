import React, { useEffect } from 'react'
import AOS from 'aos'
import canva from './../images/canva.png'
const Quotes = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  const redirectToCanva = () => {

    window.open("http://www.canva.com");
  }
  return (
    <div className="quotes">
      <div className="container border-top" data-aos="fade">
        <div className="content">
          <h1 data-aos="fade">"Bao is a skilled developer and a very passionate programmer. He considers problems deeply, thinks out of the box and comes up with unique solutions for complex problems. Bao is also a team player and a quick learner. He is absolutely a great addition to any team"</h1>
          <h3 data-aos="fade">Kelvin</h3>
          <p data-aos="fade">Front End Dev at <button onClick={redirectToCanva}>
            <img src={canva} />
          </button></p>
        </div>
      </div>

    </div>
  )
}

export default Quotes
