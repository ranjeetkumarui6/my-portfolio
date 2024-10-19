import React from 'react'
import styles from './index.module.css'
import Skills from './Skills'
import Navbar from '../../Shared/Navbar'
import Footer from '../Home/Footer'
const Skill = () => {
  return (
    <>
     <div className={styles.skillscontainer}>
      <Navbar/>
      <Skills/>
      <Footer/>
     </div>
    </>
  )
}

export default Skill
