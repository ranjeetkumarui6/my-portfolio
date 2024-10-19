import React from 'react'
import styles from "./footer.module.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
       <div className={styles.footercontainer}>
       <ul className={styles.listcontainer}>
          <Link to="/">  <li className={styles.listitems}><a href="#" className={styles.anchor}>Home </a></li></Link>
          <Link to="/about">    <li className={styles.listitems}><a href="#" className={styles.anchor}>About </a></li></Link>
          <Link to="/education">    <li className={styles.listitems}><a href="#" className={styles.anchor}>Education </a></li></Link>
          <Link to="/skills">    <li className={styles.listitems}><a href="#" className={styles.anchor}>Skills </a></li></Link>
          <Link to="/projects">    <li className={styles.listitems}><a href="#" className={styles.anchor}>Projects </a></li></Link>
          <Link to="/contact">   <li className={styles.listitems}><a href="#" className={styles.anchor}>Contacts </a></li></Link>
          </ul>
        <p className={styles.copy}>@All Right reserved by<span> @ranjeet kumar</span></p>

        </div>
    </>
  )
}

export default Footer
