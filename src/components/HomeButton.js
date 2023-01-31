import React from 'react'
import { useNavigate } from "react-router-dom";


const HomeButton = ({setShowTopNews, setShowWeather, setIsClicked, setIsTopNewsClicked, setIsSportsClicked}) => {
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
        setShowWeather(true)
        setShowTopNews(true)
        setIsTopNewsClicked(false)
        setIsClicked(false)
        setIsSportsClicked(false)
    }
  return (
    <button onClick={goHome}
    className='home-btn'
        >Home
    </button>
  )
}

export default HomeButton