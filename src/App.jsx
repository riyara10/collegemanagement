import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Dashboard from './pages/Dasboard'
import Employees from './pages/Employees'
import Pnf from './pages/Pnf'


function App() {
 

  return (
      <Routes>
           <Route path="/" element={ <Dashboard/> } />
          <Route path='employees' element={<Employees/>}/>
         <Route path='*' element={<Pnf/>}/>
      </Routes>
  )
}

export default App
