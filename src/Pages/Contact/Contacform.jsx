import React from 'react'
import mainlogo from '../../assets/icon2.png'
import styles from './contactform.module.css'
const Contacform = () => {
    return (
        <>
            <div className={styles.contactformcontainer}>
                    <div className={styles.contactmainlogocontainer}>
                        <img src={mainlogo} alt="mainlog" className={styles.contactmainlogo} />
                        <div className={styles.worktogether}>
                        
                        <p className={styles.contactwork}>Let`s Work<span className={styles.contacttogether}>together</span></p>
                    </div>
                    </div>
                    <div className={styles.formcontainer}>
                        <input  className={styles.input} type="text" placeholder="Enter Your Name*" />
                        <input className={styles.input} type="text" placeholder="Enter Your Email*" />
                        <input className={styles.input} type="text" placeholder="Enter Your Subject*" />
                        <textarea className={styles.input} name="" id="" placeholder='Enter Your Message'></textarea>
                    <button className={styles.button}>Send Message</button>
                    </div>
                    
            </div>
        </>
    )
}

export default Contacform
