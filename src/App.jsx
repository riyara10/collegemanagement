import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Dashboard from './pages/Dasboard'
import Employees from './pages/Employees'
import Pnf from './pages/Pnf'
import Loader from './components/Loader'

function App() {
 
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(true), 3400)
    return () => clearTimeout(timer) 
  }, [])
  return (
      <Routes>
           <Route path="/" element={isLoading ? <Dashboard/> : <Loader />} />
          <Route path='employees' element={<Employees/>}/>
         <Route path='*' element={<Pnf/>}/>
      </Routes>
  )
}

export default App
