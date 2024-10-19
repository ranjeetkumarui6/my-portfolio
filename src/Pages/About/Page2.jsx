import React from 'react'
import styles from './page2.module.css'
const Page2 = () => {
  return (
    <>
      <div className={styles.cirtificatecontainer}>
        <div className={styles.cirtificate}>
            <span className={styles.certification}>Certification</span>
            <div className={styles.one}>
            <p className={styles.name}>CSS Youtube Cource Completion Certificate:KG Coding</p>
            <span className={styles.author}>Introduce By:Prashant Jain</span>
            </div>
            <div className={styles.one}>
            <p className={styles.name}>IOT Workshop Training Completion:NIELIT,C-DAC</p>
            <span className={styles.author}>Introduce By:Srikanth Chandrasekaran</span>
            </div>
            <div className={styles.one}>          
            <p className={styles.name}>Research Paper Publication Certificate:NJSRED</p>
            <span className={styles.author}>Introduce By:Dr. Shashank Singh</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Page2
