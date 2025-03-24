import React from 'react'
import '../styles/CatsCard.module.css'

const CatCard = ({image, name}) => {
  return (
    <div className="cat-card">
      <img src={image} alt={name}/>
      <h3>{name}</h3>
    </div>
  )
}

export default CatCard