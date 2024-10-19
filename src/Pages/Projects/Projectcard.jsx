import React from 'react'
import Card from './Card';
import styles from './projectcard.module.css'
import digitalclock from '../../Data/assets/digitalclockpro3.jpg'
import texteditor from '../../Data/assets/texteditor.jpg'
import portfolio2 from '../../Data/assets/portfolio2.png'
import myportfolio from '../../Data/assets/myportfolio.jpg'
import notesapp from '../../Data/assets/notesapp.jpg'
import bmipro1 from '../../Data/assets/bmipro1.jpg'
import unbrew from '../../Data/assets/unbrew-pro.jpg'
import todoapp from '../../Data/assets/todoapp.jpg'
import lodo from '../../Data/assets/lodo.jpg'
import lucknogame from '../../Data/assets/lucknogame.jpg'
import calculator from '../../Data/assets/calculator.jpg'
import atm from '../../Data/assets/atm.png'










const Projectcard = () => {
  return (
    <>
      <div className={styles.projectcardcontainer}>
        
        <div className={styles.Cardcontainer}>
            <Card atm={atm} name="Hover To Play" Projectname="ATM Machine App" lang="React JS,HTML,CSS3, Node JS,Express,MongoDB,Redux JS etc"/>
            <Card digitalclock={digitalclock} name="Hover To Play" Projectname="Digital Clock App" lang="JavaScript,HTML,CSS3 etc"/>
            <Card texteditor={texteditor} name="Hover To Play" Projectname="Text Editor App" lang="React JS,HTML,CSS3 etc"/>
            <Card portfolio2={portfolio2} name="Hover To Play"  Projectname="Portfolio2" lang="React JS,HTML,CSS3, Node JS,Express,MongoDB,Redux JS etc"/>
            <Card myportfolio={myportfolio} name="Hover To Play" Projectname="My Portfolio" lang="React JS,HTML,CSS3, Node JS,Express,MongoDB,Redux JS etc"/>
            <Card notesapp={notesapp} name="Hover To Play" Projectname="Our Notes App" lang="React JS,HTML,CSS3, localstorage etc"/>
            <Card bmipro1={bmipro1} name="Hover To Play" Projectname="BMI Calculator App" lang="JavaScript,HTML,CSS3 etc"/>
            <Card unbrew={unbrew} name="Hover To Play" Projectname="Unbrew Clone" lang="React JS,HTML,CSS3,Bootstap etc"/>
            <Card todoapp={todoapp} name="Hover To Play" Projectname="Todo App" lang="JavaScript,HTML,CSS3 etc"/>
            <Card lodo={lodo} name="Hover To Play"  Projectname="Lodo  Clone" lang="HTML,CSS3 etc"/>
            <Card lucknogame={lucknogame} name="Hover To Play" Projectname="Lucky No Game" lang="JavaScript,HTML,CSS3 etc"/>
            <Card calculator={calculator} name="Hover To Play" Projectname="Calculator App" lang="JavaScript,HTML,CSS3 etc"/>

        </div>
      </div>
    </>
  )
}

export default Projectcard
