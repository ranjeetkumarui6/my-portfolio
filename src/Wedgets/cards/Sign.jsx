import React from 'react'
import styles from './sign.module.css'
import { FaRoad } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import resume2 from '../../Data/myresume.pdf'
const Sign = (props) => {
  return (
    <>
      <div className={styles.squre}>
                <div className={styles.squrecard}>
                    <img src={props.sign} alt="imgsign" style={{width:props.width ,marginLeft:props.m}} className={styles.sign}/>
                    <div className={styles.spcontainer}>
                         <span className={styles.font1}>{props.more} 
                         </span>
                    <span className={styles.credential} style={{color:props.color,textDecoration:props.td,}}>
                  
                  {props.project ? <a href="/projects" target='_blank' >{props.project}</a>:<a href={resume2} target='_blank' >{props.Credentials}</a>}
                         </span> 
                        
                    </div>
                </div>
               </div>
    </>
  )
}

export default Sign
