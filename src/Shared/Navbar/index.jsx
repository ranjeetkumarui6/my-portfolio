import React, { useRef, useState } from 'react'
import styles from './index.module.css'
import mylogo from '../../assets/logo111.png'
import Navbutton from '../../Wedgets/Navbutton'
import { IoReorderThreeSharp, IoHome } from "react-icons/io5";
import { FaUser, FaUserGraduate, FaFileCode, FaMoon, FaLightbulb } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdContactPhone, MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const sidemenu = useRef()
  const toggle = useRef()

  let a = 0;
  const hideshow = () => {
    a++;
    if (a == 1) {
      // sidemenu.current.style.display = "none"
      sidemenu.current.style.width = "200px"

    } else if (a == 2) {
      // sidemenu.current.style.display = "block"
      sidemenu.current.style.width = "0px"
      a = a - 2;
    }

  }

//   const [dark,setdark]= useState(true)

//   const move=useRef();
// const handlemove=()=>{
//   if(dark){
//     move.current.style.justifyContent="right"


//   setdark(false)

//   }else{
//     move.current.style.justifyContent="left"

 
//   setdark(true)
    
//   }
// }
  
  return (

    <>
      <div className={styles.togglecontainer}  ref={toggle}>
        {/* <div className={styles.mode} ref={move}>
            <MdLightMode onClick={handlemove}  className={styles.color}/>
        </div> */}
        <IoReorderThreeSharp className={styles.toggle}  onClick={hideshow} />
      </div>
      <div className={styles.sidemenu}  ref={sidemenu}  >
        <div className={styles.snavcontainer}>
          <ul className={styles.slistcontainer}>
            <Link to="/">  <li className={styles.slistitems} ><IoHome className={styles.sanchor} /></li></Link>
            <Link to="/about">     <li className={styles.slistitems} ><FaUser className={styles.sanchor} /></li></Link>
            <Link to="/education"> <li className={styles.slistitems} ><FaBuildingColumns className={styles.sanchor} /></li></Link>
            <Link to="/skills">     <li className={styles.slistitems} ><FaUserGraduate className={styles.sanchor} /></li></Link>
            <Link to="/projects">   <li className={styles.slistitems} ><FaFileCode className={styles.sanchor} /></li></Link>
            <Link to="/contact">     <li className={styles.slistitems} ><MdContactPhone className={styles.sanchor} /></li></Link>
          </ul>
        </div>
      </div>
      <nav className={styles.navbarcontainer}>
        <div className={styles.navcontainer}>
          <ul className={styles.listcontainer}>
            <Link to="/">  <li className={styles.listitems}><a href="#" className={styles.anchor}>Home </a></li></Link>
            <Link to="/about">    <li className={styles.listitems}><a href="#" className={styles.anchor}>About </a></li></Link>
            <Link to="/education">    <li className={styles.listitems}><a href="#" className={styles.anchor}>Education </a></li></Link>
            <Link to="/skills">    <li className={styles.listitems}><a href="#" className={styles.anchor}>Skills </a></li></Link>
            <Link to="/projects">    <li className={styles.listitems}><a href="#" className={styles.anchor}>Projects </a></li></Link>
            <Link to="/contact">  <li className={styles.listitems}><a href="#" className={styles.anchor}>Contacts </a></li></Link>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar;
