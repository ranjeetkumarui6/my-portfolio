import React from 'react'
import styles from './index.module.css'
import Contacts from './Contacts'
import Navbar from '../../Shared/Navbar'
import Footer from '../Home/Footer'
const Contact = () => {
  return (
    <>
    <div className={styles.contacts}>
    <Navbar/>
    <Contacts/>
    <Footer/>
    </div>
    </>
  )
}

export default Contact
