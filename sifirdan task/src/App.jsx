import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import Home from './pages/Home'
import Admin from './pages/Add'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
     <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path='/admin' element={<Admin/>}/>
     </Route>

   </Routes>
    </>
  )
}

export default App
