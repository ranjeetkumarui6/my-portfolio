import React from 'react'
import styles from './index.module.css'
import Navbar from '../../Shared/Navbar'
import Projects from './Projects'
import Footer from '../Home/Footer'
const Project = () => {
  return (
    <>
    <div className={styles.projects}>
    <Navbar/>
    <Projects/>
    <Footer/>
    </div>
    </>
  )
}

export default Project
