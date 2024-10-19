import React from 'react'
import styles from './index.module.css'
import mypic from '../../assets/mypic.jpg'
import Navbar from '../../Shared/Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Footer from '../Home/Footer'
const About = () => {
  return (
    <>
      <div className={styles.aboutconainer}>
        <Navbar/>
        <Page1/>
        <Page2/>
        <Footer/>
      </div>
    </>
  )
}

export default About
