import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import DataTable from './components/DataTable'
import Statebasic from './components/Statebasic'
import Count from './components/Count'
import Name from './components/Name'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Navbar/>
    <Routes> 
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Signup'element={<Signup/>}/>
      <Route path='/DataTable'element={<DataTable/>}/>
      <Route path='/sTATEBASIC'element={<Statebasic/>}/>
      <Route path='/count'element={<Count/>}/>
      <Route path='/Name'element={<Name/>}/>
      <Route path='/cards'element={<Cards/>}/>
    </Routes>

    </>
  )
}

export default App
