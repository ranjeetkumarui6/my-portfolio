import React from 'react'
import styles from './social.module.css'
const Socialifo = (props) => {
  return (
    <>
      <div className={styles.contacticoncontainer}>
        <div className={styles.icons}>
          {props.icon1 && <a href="https://www.linkedin.com/in/ranjeet-kumar-a57623275" target='_blank'> <i className={styles.icon}>{props.icon1}</i></a>}
           {props.icon2 && <a href="https://instagram.com/kumaradranjeet" target='_blank'> <i className={styles.icon}>{props.icon2}</i></a> } 
           {props.icon3 && <a href="https://github.com/ranjeetkumarui6" target='_blank'> <i className={styles.icon}>{props.icon3}</i></a>} 
        </div>
      </div>
    </>
  )
}

export default Socialifo
