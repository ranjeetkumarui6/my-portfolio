import React from 'react'
import styles from './liberary.module.css'
function Liberary(props) {
  return (
    <>
      <div className={styles.liberary}>
        <h4 className={styles.lib}>{props.name}</h4>
      </div>
    </>
  )
}

export default Liberary
