import React from 'react'
import styles from './projects.module.css'
import { GiPolarStar } from 'react-icons/gi'
import Projectcard from './Projectcard'
const Projects = () => {
  return (
    <>
      <div className={styles.projectscontainer}>
        <div className={styles.projecttitlecontainer}>
            <span className={styles.title}>Projects & Portfolio</span>
        </div>
        <div className={styles.projectcardcontainer}>
            <Projectcard/>
        </div>
      </div>
    </>
  )
}

export default Projects
