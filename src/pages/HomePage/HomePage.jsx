// HomePage.jsx
import React from 'react';
import bannerImage from '../../assets/images/home-cat.jpg';
import kittenIcon from '../../assets/icons/kitten-icon.png';
import Banner from '../../components/Banner/Banner.jsx';
import AdoptionInfo from '../../components/InfoText/InfoText.jsx';
import CatsButton from '../../components/CatsButton/CatsButton.jsx';

const HomePage = () => {
  return (
    <main className='homepageContainer'>
      <Banner
        imageSrc={bannerImage}
        line1="Adopt.."
        line2="Don't shop.."
      />
      <AdoptionInfo />
      <CatsButton imageSrc={kittenIcon} buttonText="See Meows" linkTo="/allCats" />
    </main>
  );
};

export default HomePage;
