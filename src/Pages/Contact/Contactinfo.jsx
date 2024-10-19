import React from 'react'
import styles from './contactinfo.module.css'

const Contactinfo = ({icon,title,para}) => {
  return (
    <>
      <div className={styles.iconscontainer}>
        <div className={styles.icons}>
            <i className={styles.icon}>{icon}</i>
        </div>
        <div className={styles.info}>
            <span className={styles.title}>{title}</span>
            <p className={styles.para}>{para}</p>
        </div>
      </div>
    </>
  )
}

export default Contactinfo
