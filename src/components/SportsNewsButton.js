import React from 'react'
import { Link } from "react-router-dom"

const SportsNewsButton = ({ changedSportsClick, sportsNews}) => {
    const clicked = () => {
        changedSportsClick()
    }
  return (
    <div>
        <button
            onClick={clicked}
            className='sports-btn'
            >
              <Link to='/sports'>Sports</Link>
        </button>
    </div>
  )
}

export default SportsNewsButton