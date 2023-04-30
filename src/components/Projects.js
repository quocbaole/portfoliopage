import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styledcomponent from '../images/styledcomponent.png'
import reactmeals from '../images/reactmeals.png'
import AOS from 'aos'
const Projects = props => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  const containerClass = props.noBorder ?
    'container '
    : 'container border-top'

  const redirectHandler = projectLink => {

    window.open(`${projectLink}`);
  }
  return (
    <div className="projects">
      <div data-aos="fade" className={containerClass}>
        <h1 data-aos="fade">My Latest Projects</h1>
        <div className="carousel" data-aos="fade">
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            dynamicHeight={false}
          >
            <div>
              <div className="item">
                <div className="buttons">
                  <button onClick={() => {
                    redirectHandler("https://reactjs-styledcomponent.web.app")
                  }}>View Web</button>
                  <button onClick={() => {
                    redirectHandler("https://github.com/quocbaole/cv-ecommerce")
                  }}>View Code</button>
                </div>
                <img src={styledcomponent} />
              </div>
            </div>
            <div>
              <div className="item">
                <div className="buttons">
                  <button onClick={() => {
                    redirectHandler("https://reactmeals5420.web.app")
                  }}>View Web</button>
                  <button onClick={() => {
                    redirectHandler("https://github.com/quocbaole/react-meals")
                  }}>View Code</button>
                </div>
                <img src={reactmeals} />
              </div>
            </div>


          </Carousel>
        </div>
        <div className="flex-block">
          <div className="item" data-aos="fade">
            <div className="img-container">
              <div className="buttons">
                <button onClick={() => {
                  redirectHandler("https://reactmeals5420.web.app")
                }}>View Web</button>
                <button onClick={() => {
                  redirectHandler("https://github.com/quocbaole/react-meals")
                }}>View Code</button>
              </div>
              <img src={reactmeals} alt="reactmeals" />
            </div>
            <div className="desc">
              <p>React</p>
              <h5>React meals</h5>
            </div>
          </div>
          <div className="item" data-aos="fade">
            <div className="img-container">
              <div className="buttons">
                <button onClick={() => {
                  redirectHandler("https://reactjs-styledcomponent.web.app")
                }}>View Web</button>
                <button onClick={() => {
                  redirectHandler("https://github.com/quocbaole/cv-ecommerce")
                }}>View Code</button>
              </div>
              <img src={styledcomponent} alt="reactmeals" />
            </div>
            <div className="desc">
              <p>Styled Component</p>
              <h5>ULTRA</h5>
            </div>
          </div>

          <div className="item" />
        </div>
      </div>

    </div>
  )
}

export default Projects
