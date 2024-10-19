import React from 'react'
import styles from './card2.module.css'
import sign from '../../assets/doc.png'
import Sign from '../../Wedgets/cards/Sign'
import propic from '../../assets/propic1.jpg'

const Card2 = () => {
  return ( 
    <>
              <div className={styles.card2container}>
              <div className={styles.marquee}>
                <marquee behavior="" className={styles.mar} direction="">MERN Stack Developers are tasked with overseeing the complete software development lifecycle. Their responsibilities include creating efficient, testable code to meet specific requirements and ensure operational effectiveness.
                </marquee>
              </div>
              <div className={styles.twocontainer}>
              <Sign sign={sign} more="CV"  Credentials="Download" width="60%" m="3rem" color="blue" td="underline"/>
               <Sign sign={propic} more="SHOWCASE" project="Projects" />
               </div>
               </div>
    </>
  )
}

export default Card2
