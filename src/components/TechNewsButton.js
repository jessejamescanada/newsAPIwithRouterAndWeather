import React from 'react'
import { Link } from "react-router-dom"

const TechNewsButton = ({ changedTechClick, techNews}) => {
    const clicked = () => {
        changedTechClick()
    }
    return(
        <>
        <div>
            <button 
                onClick={clicked}
                className='tech-btn'
                >
                    <Link to='/tech'>Tech</Link>
                    
            </button>
        </div>
        </>
    )
}

export default TechNewsButton

