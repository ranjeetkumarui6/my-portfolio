import React from 'react'
import styles from './index.module.css'
import Education from './Education'
import Navbar from '../../Shared/Navbar'
import Footer from '../Home/Footer'

const Edu = () => {
  return (
    <>
    <div className={styles.edu}>
      <Navbar/>
      <Education/>
      <Footer/>
    </div>
    </>
  )
}

export default Edu
