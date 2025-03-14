import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-about'>
        <h2>About</h2>
        <p>About us</p>
        <p>FAQ</p>
        <p>Privacy Policy</p>
        </div>
                
        <div className='footer-social'>
            <img src='./images/social-media.png' alt='social media'/>
            </div>
    </div>
  )
}

export default Footer