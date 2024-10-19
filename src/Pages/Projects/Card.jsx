import React from 'react'
import styles from './card.module.css'
import { FaChrome } from 'react-icons/fa6'
function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.bgcolorpic}>
            <div className={styles.toggle}>
                <div className={styles.cardtoggle}>
                {props.atm && <a href="http://ranjeet-atm-machine-app.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.digitalclock && <a href="http://ranjeet-clock.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.texteditor && <a href="http://ranjeet-texteditor.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.portfolio2 && <a href="http://ranjeet-portfolio-2.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.myportfolio && <a href="http://ranjeet-portfolio-1.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.notesapp && <a href="http://ranjeet-notes-app.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.bmipro1 && <a href="http://ranjeet-bmi-calculator.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.unbrew && <a href="http://ranjeet-unbrew-clone.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.todoapp && <a href="http://ranjeet-todo-app.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.lucknogame && <a href="http://ranjeet-luckyno-game.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.calculator && <a href="http://ranjeet-calculator.netlify.app" target='_blank'> <i><FaChrome size={30}/></i></a>}
                {props.lodo &&  <i><FaChrome size={30}/></i>}
                
                <h2 className={styles.appname}>{props.Projectname}</h2>
                <p className={styles.lang}>{props.lang}</p>
                </div>
            </div>
      {props.atm && <img src={props.atm} alt="projectpic" className={styles.propic} />}
      {props.digitalclock &&  <img src={props.digitalclock} alt="projectpic" className={styles.propic} />}
      {props.texteditor &&    <img src={props.texteditor} alt="projectpic" className={styles.propic} />}
      {props.portfolio2 &&    <img src={props.portfolio2} alt="projectpic" className={styles.propic} />}
      {props.myportfolio &&    <img src={props.myportfolio} alt="projectpic" className={styles.propic} />}
      {props.notesapp &&   <img src={props.notesapp} alt="projectpic" className={styles.propic} />}
      {props.bmipro1 &&   <img src={props.bmipro1} alt="projectpic" className={styles.propic} />}
      {props.unbrew &&   <img src={props.unbrew} alt="projectpic" className={styles.propic} />}
      {props.todoapp &&   <img src={props.todoapp} alt="projectpic" className={styles.propic} />}
      {props.lodo &&   <img src={props.lodo} alt="projectpic" className={styles.propic} />}
      {props.lucknogame &&   <img src={props.lucknogame} alt="projectpic" className={styles.propic} />}
      {props.calculator &&   <img src={props.calculator} alt="projectpic" className={styles.propic} />}

        </div>
        <h4 className={styles.name}>{props.name}</h4>

      </div>
    </>
  )
}

export default Card
