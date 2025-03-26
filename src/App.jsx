// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx'
import AllCatsPage from './pages/AllCatsPage/AllCatsPage.jsx'
import AdoptPage from './pages/AdoptPage/AdoptPage.jsx'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx'
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import styles from './styles/App.module.css'
import useThemeStore from './store/themeStore';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={styles['layout']} data-theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allCats" element={<AllCatsPage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </div>
  )

}

export default App;
