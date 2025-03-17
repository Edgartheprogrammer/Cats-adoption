// HomePage.jsx
import React from 'react';
import homeCatImage from '../assets/images/home-cat.jpg';
import kittenIcon from '../assets/images/kitten-icon.png';
import AdoptImage from '../components/AdoptImage/AdoptImage.jsx';
import AdoptionInfo from '../components/AdoptionInfo/AdoptionInfo.jsx';
import ImageButton from '../components/ImageButton/ImageButton.jsx';
import '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <AdoptImage
        imageSrc={homeCatImage}
        line1="Adopt.."
        line2="Don't shop.."/>
      <AdoptionInfo />
      <ImageButton imageSrc={kittenIcon} buttonText="Adopt Meow" />
    </div>
  );
};

export default HomePage;