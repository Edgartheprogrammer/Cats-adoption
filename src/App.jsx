import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//!!!!
import './styles/App.css';//!!!!!

import NavBar from './components/NavBar';
import CatsSlider from './components/CatsSlider';
import CatCard from './components/CatCard';
import Button from './components/Button';

import HomePage from './pages/HomePage';
import AdoptPage from './pages/AdoptPage';
import InConstruction from './pages/InConstruction';


function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        
        {/* Эти компоненты будут на всех страницах */}
        <CatsSlider />
        <CatCard />
        <Button />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/construction" element={<InConstruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






