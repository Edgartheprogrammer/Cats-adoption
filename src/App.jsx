import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import CatsSlider from './components/CatsSlider'
import CatCard from './components/CatCard'
import Button from './components/Button'
import Footer from './components/Footer'
import HomePage from './pages/HomePage' 
import AdoptPage from './pages/AdoptPage'
import InConstruchion from './pages/InConstruction' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    
    <Footer/>
    </div>
  )
}

export default App
