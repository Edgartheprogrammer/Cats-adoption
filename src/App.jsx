
// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import AllCatsPage from './pages/AllCatsPage.jsx'
import AdoptPage from './pages/AdoptPage.jsx'
import './styles/App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allCats" element={<AllCatsPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
      </Routes>
    </div>
  )

}

export default App;
