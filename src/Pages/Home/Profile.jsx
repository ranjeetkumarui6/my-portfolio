import React from 'react'
import styles from './profile.module.css'
import mypic from '../../assets/mypic.jpg'

const Profile = () => {
  return (
    <>
      <div className={styles.bodycontainer}>
    <div className={styles.maincol}>
                        <img src={mypic} alt="mypic" className={styles.mypic} />
                    <div className={styles.content}>
                        <p className={styles.p1}>Web Developer</p>
                        <span className={styles.sp1}>Er.</span>
                        <h1 className={styles.h1}>   Ranjeet Kumar</h1>
                        <p className={styles.para}>I am  a Mern Stack Developer based in india</p>
                        <span className={styles.para}></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
            </div>
            </div> 
    </>
  )
}

export default Profile
