import React, { useEffect } from 'react'
import Advantage from '../components/Advantage'
import Contact from '../components/Contact'
import EduAndEx from '../components/EduAndEx'
import Overall from '../components/Overall'
import Projects from '../components/Projects'
import Quotes from '../components/Quotes'
import { useState } from 'react';
import ContactModal from '../components/ContactModal'
import Aos from 'aos'

const Home = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true)
  }
  const hideModalHandler = () => {
    setModalIsShown(false)
  }

  return (
    <>
      {modalIsShown && <ContactModal hideModalHandler={hideModalHandler} />}
      {/* <ContactModal /> */}
      <Overall />
      <Advantage />
      <EduAndEx />
      <Projects />
      <Quotes />
      <Contact showModalHandler={showModalHandler} />
    </>
  )
}

export default Home
