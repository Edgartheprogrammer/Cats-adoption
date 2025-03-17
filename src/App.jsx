// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import AdoptPage from './pages/AdoptPage.jsx'
import InConstruction from './pages/InConstruction.jsx'
import './styles/App.css'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/contact" element={<InConstruction />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
