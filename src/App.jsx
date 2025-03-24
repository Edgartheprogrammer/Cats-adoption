// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import AllCatsPage from './pages/AllCatsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import './styles/App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allCats" element={<AllCatsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
