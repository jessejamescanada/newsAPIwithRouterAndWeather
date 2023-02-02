import React from 'react'
import { Link } from "react-router-dom"

const TopNewsButton = ({changedTopClick, topNews}) => {

    const clicked = () => {
        changedTopClick()
    }
  return (
    <>
      <Link to='/top'>
        <button
          onClick={clicked}
          className='top-btn'
          >Top News
        </button>
      </Link>
    </>
  )
}

export default TopNewsButton