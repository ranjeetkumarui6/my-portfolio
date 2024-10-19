import React from 'react'
import styles from './education.module.css'
import { RiUserSettingsFill } from "react-icons/ri";
import { GiPolarStar } from "react-icons/gi";
import Logos from './logos';
import { FaGraduationCap } from 'react-icons/fa';





const Education = () => {
  return (
    <>
      <div className={styles.educationcontainer}>
      <div className={styles.educationtitle}>
        <i className={styles.logo1}>
            <GiPolarStar/>
        </i>
        <span className={styles.title2}>Education & Experience</span>
        <i className={styles.logo1}>
        <GiPolarStar/>
        </i>
      </div>
      <div className={styles.eduexpcontainer}>
        <div className={styles.educontainer}>
        <span className={styles.subtitle}>Education</span>

            <div className={styles.edu1}>
           
            <Logos logo={ <FaGraduationCap/>} date="2021-2025" course="B.Tech" branch="Information Technology" college="SR Institution of Managament & Technology,BKT ,Lucknow"/>
                </div>
                <div className={styles.edu1}>
                <Logos logo={ <FaGraduationCap/>} date="2019-2021" course="INTERMEDIATE" branch="Science,Math" college="Mahatma Gandhi Inter College, Safipur,Unnao"/>
                </div>
                <div className={styles.edu1}>
                <Logos logo={ <FaGraduationCap/>} date="2017" course="High School"  branch="Science,Math "  college="Dayanand Shubhash National Public School,Rasoolabad Unnao"/>
                </div>
        </div>
        <div className={styles.experiencecontainer}>
          <span className={styles.subtitle}>Training</span>
        <div className={styles.edu1}>
           
           <Logos logo={ <RiUserSettingsFill/>}  date="August 2024-Present" course="MERN STACK " branch="Training of 9 Month " college="Skyview Smart Solution, Lucknow, UP"/>
               </div>
               <div className={styles.edu1}>
               <Logos logo={ <RiUserSettingsFill/>}  date="July 2024-August 2024" course="MERN STACK" branch="College Training of 45 Days " college="SR Institution of Managament & Technology,BKT ,Lucknow"/>
               </div>
               <div className={styles.edu1}>
               <Logos logo={ <RiUserSettingsFill/>} date="August 2023-August 2023" course="IOT WORKSHOP" branch="Five Day Hand-On Workshop "  college="Dr. APJ Abdul Kalam Technical University,Lucknow "/>
               </div>
            {/* <Explogo/>
            <Explogo/>
            <Explogo/> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Education
