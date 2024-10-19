import React from 'react'
import styles from './main.module.css'
import mainlogo from '../../assets/icon2.png'
const Main = () => {
    return (
        <>
            <div className={styles.maincontainer}>
                <div className={styles.main}>
                    <div className={styles.mainlogocontainer}>
                        <img src={mainlogo} alt="mainlog" className={styles.mainlogo} />
                    </div>
                    <div className={styles.worktogether}>
                        <span className={styles.lets}>Let`s</span>
                        <p className={styles.work}>Work<span className={styles.together}>together</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
