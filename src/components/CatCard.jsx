import React from 'react'
import '../styles/CatsCard.module.css'

const CatCard = () => {
  return (
    <div className="catCard">
      <img src={image} alt={title} />
    </div>
  )
}

export default CatCard