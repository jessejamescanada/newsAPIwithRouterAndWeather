import React from 'react'
import { Link } from "react-router-dom"

const TechNewsButton = ({ changedTechClick, techNews}) => {
    const clicked = () => {
        changedTechClick()
    }
    return(
        <>
            <Link to='/tech'>
                <button 
                    onClick={clicked}
                    className='tech-btn'
                    >Tech
                </button>
            </Link>
        </>
    )
}

export default TechNewsButton

