import React from 'react'
import styles from './skills.module.css'
import Skillcard from './Skillcard'
import reactjs from '../../assets/skillspic/reacjs.png'
import nodejs from '../../assets/skillspic/nodejs.png'
import mongodb from '../../assets/skillspic/mongodb.png'
import npm from '../../assets/skillspic/npm.webp'
import css from '../../assets/skillspic/css.webp'
import html from '../../assets/skillspic/html.png'
import jquery from '../../assets/skillspic/jquery.png'

import js from '../../assets/skillspic/js.png'
import { GiPolarStar } from 'react-icons/gi'
import Softskills from './Softskills'
import Liberary from './Liberary'
const Skills = () => {
  return (
    <>
      <div className={styles.skillcontainer}>
          <span className={styles.title2}>Technical & Profetional Skills</span>
        <div className={styles.cardcontainer}>
          <span className={styles.title}>Technical Skills</span>
          <div className={styles.cardcontainer1}>
        <Skillcard icon={reactjs} name="ReactJS"/>
        <Skillcard icon={nodejs} name="NodeJS"/>
        <Skillcard icon={npm} name="NPM"/>
        <Skillcard icon={mongodb} name="Mongodb"/>
        <Skillcard icon={js} name="JavaScript"/>
        <Skillcard icon={html} name="HTML"/>
        <Skillcard icon={css} name="CSS"/>
        <Skillcard icon={jquery} name="JQuery"/>
        </div>
        </div>
        <div className={styles.row2}>
        <div className={styles.softskillcontainer}>
          <span className={styles.proskill}>Profetional Skills</span>
          <div className={styles.softskills}>
            <Softskills name="Communication" styles={{borderTopColor:"black"}}/>
            <Softskills name="Creativity"/>
            <Softskills name="Problem Solving"/>
            <Softskills name="Self Motivation"/>
          </div>
        </div>
        <div className={styles.liberary}>
          <span className={styles.libtitle}>Libraries</span>
          <div className={styles.card}>
          <Liberary name="ExpressJS"/>
          <Liberary name="Bootstrap"/>
          <Liberary name="ReduxJS"/>
          <Liberary name="EcmaScript"/>
          <Liberary name="RestAPIs"/>
          <Liberary name="Github"/>
          <Liberary name="Debugging"/>
          <Liberary name="Jsx(JSXML)"/>
          <Liberary name="Figma"/>
          <Liberary name="VanilaJS"/>
          <Liberary name="Algorithms"/>
          <Liberary name="DataStructures"/>
       

          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Skills
