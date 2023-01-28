import React from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import TechNews from './TechNews'

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
                    <Link to='/tech'>Tech News</Link>
                    
            </button>
        </div>
        </>
    )
}

export default TechNewsButton

