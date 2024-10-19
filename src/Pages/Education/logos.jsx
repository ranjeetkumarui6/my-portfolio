import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import styles from './logos.module.css'
const Logos = (props) => {
  return (
    <>
     <div className={styles.education}>
          <i className={styles.logo}>
            {props.logo}
          </i>
          <div className={styles.study}>
            <span  style={{width:props.w}}  className={styles.date}>{props.date}</span>
            <h3 className={styles.title}>{props.course}</h3>
            <p className={styles.para}>{props.branch}</p>
            <p className={styles.para}>{props.college}</p>
          </div>
        </div> 
    </>
  )
}

export default Logos
