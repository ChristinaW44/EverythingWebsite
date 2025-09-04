import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Games } from './pages/Games'
import { Jobs } from './pages/Jobs'
import { Layout } from './Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
