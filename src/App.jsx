import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SingIn from './Pages/SingIn'
import SingUp from './Pages/SingUp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/SingIn" element={<SingIn/>}/>
    <Route path="/SingUp" element={<SingUp/>}/>
   </Routes>
  )
}

export default App;
