
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Shared/Navbar'
import About from './Pages/About'
import Education from './Pages/Education'
import Skill from './Pages/Skills'
import Project from './Pages/Projects'
import Contact from './Pages/Contact/Index'
import Edu from './Pages/Education'

function App() {

  return (
    <>
    <Routes>
      <Route path='/'element={ <Home/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/education' element={ <Edu/>}/>
      <Route path='/skills' element={ <Skill/>}/>
      <Route path='/projects' element={ <Project/>}/>
      <Route path='/contact' element={ <Contact/>}/>
    </Routes>
   
    </>
  )
}

export default App
