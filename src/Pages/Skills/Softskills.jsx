import React from 'react'
import styles from './softskills.module.css'
const Softskills = (props) => {
  return (
    <>
      <div className={styles.softskill}>
        <div className={styles.container}>
        <div className={styles.skill} >70%</div>
        <h4 className={styles.name}>{props.name}</h4>
        </div>
      </div>
    </>
  )
}

export default Softskills
