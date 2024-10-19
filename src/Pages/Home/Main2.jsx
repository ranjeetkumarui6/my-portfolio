import React from 'react'
import styles from './main2.module.css'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from 'react-icons/fa6';
const Main2 = () => {
  return (
    <>
      <div className={styles.main2container}>
                <div className={styles.main2}>
                    <div className={styles.profileicons}>
                        <ul className={styles.listcontainer}>
                        <li className={styles.li1}><a href="https://instagram.com/kumaradranjeet" className={styles.anchor} target='_blank'><FaInstagram className={styles.i}/></a></li>
                        <li className={styles.li1}><a href="https://facebook.com/ranjeet.kumarad.96" className={styles.anchor} target='_blank'><FaFacebook className={styles.i}/></a></li>
                        <li className={styles.li1}><a href="https://github.com/ranjeetkumarui6" className={styles.anchor} target='_blank'><FaGithub className={styles.i}/></a></li>
                        <li className={styles.li1}><a href="https://www.linkedin.com/in/ranjeet-kumar-a57623275" className={styles.anchor} target='_blank'><CiLinkedin className={styles.i}/></a></li>
                        </ul>
                    </div>
                </div>
            </div> 
    </>
  )
}

export default Main2
