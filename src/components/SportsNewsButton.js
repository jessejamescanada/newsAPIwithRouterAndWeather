import React from 'react'
import { Link } from "react-router-dom"

const SportsNewsButton = ({ changedSportsClick, sportsNews}) => {
    const clicked = () => {
        changedSportsClick()
    }
  return (
    <>
      <Link to='/sports'>
        <button
            onClick={clicked}
            className='sports-btn'
            >Sports
          </button>
        </Link> 
    </>
  )
}

export default SportsNewsButton