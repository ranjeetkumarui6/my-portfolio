import React from 'react'
import styles from './index.module.css'
import Navbar from '../../Shared/Navbar'
import { PiLinktreeLogo } from "react-icons/pi";
import Profile from './Profile';
import Card2 from './Card2';
import About from '../About';
import Main from './Main';
import Main2 from './Main2';
import Footer from './Footer';
import Banner from './Banner';
const Home = () => {
  
  return (
    <>
    <div className={styles.componentcontainer}>
    <Navbar/>
    <div className={styles.first}>
   <Profile/>
   <Card2/>
   </div>
   <div className={styles.main}>
    <Main/>
    <Main2/>
   </div>
   <div className={styles.footer}>
    <Footer/>
   </div>
    </div>

    </>
  )
}

export default Home
