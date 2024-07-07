import React from 'react'
import data from './data'

function card(props) {
  return (
    <div className='card'>
      <img src={`${props.imageUrl}`} alt="" className='card-img' />
      <div className='card-content'>
      <div className='location-container'>
      <img src="locationicon.svg" alt="" />
      <span><a href={`${props.googleMapsUrl}`}>View on Google Maps</a></span>
      </div>
      <h1 className='title'>{props.title}</h1>
      <div className='dates'>
      <span>{`${props.startDate}-`}</span>
      <span>{props.endDate}</span>
      </div>
      <p className='desc'>{props.description}</p>
      </div>
    </div>
  )
}

export default card
