import React from 'react'
import styles from './page1.module.css'
import { GiPolarStar } from "react-icons/gi";
import mypic from '../../assets/mypic.jpg'
import mainlogo from '../../assets/icon2.png'

const Page1 = () => {
  return (
    <>
      <div className={styles.piccontainer}>
      <div className={styles.aboutleft}>
        <div className={styles.leftpic}>
          <img src={mypic} alt="mypic" className={styles.myic} />
        </div>
      </div>
      <div className={styles.abouteright}>
      <div className={styles.aboutlogo}>
        <i><GiPolarStar className={styles.star}/></i>
        <span className={styles.selfsummary}>SELF-SUMMMERY</span>
        <i><GiPolarStar className={styles.star}/></i>
      </div>
      <div className={styles.maincontainer}>
                <div className={styles.main}>
                    <div className={styles.mainlogocontainer}>
                        <img src={mainlogo} alt="mainlog" className={styles.mainlogo} />
                    </div>
                    <div className={styles.aboute}>
                        <h3 className={styles.h3}>Er. Ranjeet Kumar</h3>
                        <p className={styles.para}>A web developer is a programmer who develops World Wide Web applications using a client-server model. The applications typically use HTML, CSS, and any general-purpose programming language in the server.</p>
                    </div>
                </div>
            </div>
            </div>
     </div>
    </>
  )
}

export default Page1
