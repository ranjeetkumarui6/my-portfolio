import React from 'react'
import styles from './skillcard.module.css'
const Skillcard = (props) => {
  return (
    <>
      <div className={styles.skillcardcontainer}>
        <div className={styles.logocontainer}>
            <i><img src={props.icon} alt="skill icon" className={styles.icon} /></i>
            <h4 className={styles.name}>{props.name}</h4>
        </div>
      </div>
    </>
  )
}

export default Skillcard
