import React from 'react'
import styles from './contact.module.css'
import Contactinfo from './Contactinfo'
import { TfiEmail } from "react-icons/tfi";
import { SiWhatsapp } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Socialifo from './Socialifo';
import Contacform from './Contacform';
const Contacts = () => {
  return (
    <>
      <div className={styles.contactcontainer}>
        <div className={styles.contactinfocontainer}>
          <div className={styles.contactinfo}>
            <span className={styles.title}>CONTACT INFO</span>
            <Contactinfo icon={<TfiEmail/>} title="MAIL US" para="ranjeetkumar78734@gmail.com Support@gamil.com"/>
            <Contactinfo icon={<SiWhatsapp/>} title="CONTACT US" para="+91 6393792577"/>
            <Contactinfo icon={<CiLocationOn/>} title="LOCATION" para="Khargaora, Unnao ,Lucknow Uttar Pradesh (INDIA)"/>

          </div>
          <div className={styles.socialinfo}>
          <span className={styles.title}>SOCAIL INFO</span>
          <div className={styles.socialicons}>
          <Socialifo icon1={<FaLinkedin/>}/>
          <Socialifo icon2={<FaInstagram/>}/>
          <Socialifo icon3={<FaGithub/>}/>
          </div>
          </div>
        </div>
        <div className={styles.contacform}>
          <Contacform/>
        </div>
      </div>
    </>
  )
}

export default Contacts
