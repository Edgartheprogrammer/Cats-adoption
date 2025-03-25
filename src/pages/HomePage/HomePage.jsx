// HomePage.jsx
import React from 'react';
import bannerImage from '../../assets/images/home-cat.jpg';
import kittenIcon from '../../assets/icons/kitten-icon.png';
import Banner from '../../components/Banner/Banner.jsx'
import AdoptionInfo from '../../components/InfoText/InfoText.jsx';
import CatsButton from '../../components/CatsButton/CatsButton.jsx';
import CatsSlider from '../../components/CatsSlider/CatsSlider.jsx';//!!!!!

const HomePage = () => {
  return (
    <main className="homepage-container">
      <Banner
        imageSrc={bannerImage}
        line1="Adopt.."
        line2="Don't shop.."/>
      <AdoptionInfo />

      {/* Добавляем компонент слайдера */}
      <div className="slider-section">
        <h2 className="section-title">Наши котики</h2>
        <CatsSlider />
      </div>

      <CatsButton imageSrc={kittenIcon} buttonText="See All Meows" linkTo="/allCats" />
    </main>
  );
};

export default HomePage;