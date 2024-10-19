import React from 'react'
import styles from './card2.module.css'
const Banner = (props) => {
  return (
    <>
       <div className={styles.homesqurecard}>
                <img src={props.imgbanner} alt="imgsign" className={styles.homesign}/>
                <div className={styles.bannersp}>
                    <span className={styles.homefont1}>{props.show} 
                    <span className={styles.homeproject}>
                    {props.project}
                         </span>
                         </span> 
                    </div>
                </div>
    </>
  )
}

export default Banner
