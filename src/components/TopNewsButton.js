import React from 'react'
import { Link } from "react-router-dom"

const TopNewsButton = ({changedTopClick, topNews}) => {

    const clicked = () => {
        changedTopClick()
    }
  return (
    <div>
        <button
             onClick={clicked}
             className='top-btn'
             >
             <Link to='/top'>Top News</Link>
        </button>
    </div>
  )
}

export default TopNewsButton