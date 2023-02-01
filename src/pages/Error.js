import React from 'react'
import HomeButton from '../components/HomeButton'
import '../App.css';

const Error = ({setShowWeather, setShowTopNews, setIsTopNewsClicked, setIsClicked, setIsSportsClicked}) => {
  return (
    <div>
        <div className="error-container">
        <div className="error-message">
            <p>Oooops, apologies but we are having some trouble finding what you are looking for...</p>
        </div>
        <HomeButton setShowWeather={setShowWeather} setShowTopNews={setShowTopNews} setIsTopNewsClicked={setIsTopNewsClicked} setIsClicked={setIsClicked} setIsSportsClicked={setIsSportsClicked}/>
        </div>
    </div>
  )
}

export default Error