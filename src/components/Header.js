import React from 'react'
import '../App.css';
import HomeButton from './HomeButton';
import TechNewsButton from './TechNewsButton';
import TopNewsButton from './TopNewsButton';
import SportsNewsButton from './SportsNewsButton';
import { Route, Routes } from "react-router-dom"
import TechNews from './TechNews';
import TopNews from './TopNews';
import SportsNews from '../pages/SportsNews';
import { useState } from 'react';
import Weather from './Weather';
import Stocks from './Stocks';

const Header = ({techNews, topNews, sportsNews, weatherData, cityInput, setCityInput, userCity, setUserCity}) => {

    const [isClicked, setIsClicked] = useState(false)
    const [isTopNewsClicked, setIsTopNewsClicked] = useState(false)
    const [isSportsClicked, setIsSportsClicked] = useState(false)
    const [showWeather, setShowWeather] = useState(true)
  
    const changedSportsClick = () => {
        setIsSportsClicked(prevClick => !prevClick)
        setIsClicked(false)
        setIsTopNewsClicked(false)
        changeWeather()
    }

    const changedTechClick =() => {
        setIsClicked(prevClick => !prevClick)
        setIsSportsClicked(false)
        setIsTopNewsClicked(false)
        changeWeather()
    }

    const changedTopClick = () => {
        setIsTopNewsClicked(prevClick => !prevClick)
        setIsClicked(false)
        setIsSportsClicked(false)
        changeWeather()
    }

    const changeWeather = () => {
        if((isClicked === false) || (isSportsClicked === false) || (isTopNewsClicked === false)){
            setShowWeather(false)
        }
    }

    const headerWeather = () => {
        setShowWeather(true)
        setIsTopNewsClicked(false)
        setIsClicked(false)
        setIsSportsClicked(false)
    }
  
    return (
    <header>
        <div className="header-container">
            <div className="header-items-container">
                <h3>Menu</h3>
                <h1>The News</h1>
                <div className="options-container">
                    <ul className='header-ul'>
                        <li onClick={headerWeather}>Weather</li>
                        <li>Sports</li>
                    </ul>
                </div>
            </div>
            <div className="news-btns">
            <HomeButton setShowWeather={setShowWeather} setIsClicked={setIsClicked} setIsTopNewsClicked={setIsTopNewsClicked} setIsSportsClicked={setIsSportsClicked}/>
            <TopNewsButton 
                changedTopClick={changedTopClick}
                />
            <TechNewsButton  
                changedTechClick={changedTechClick}
                />
            <SportsNewsButton  
                changedSportsClick={changedSportsClick}
                />
            </div>
            <div className="stocks-weather-container">
            {showWeather && <Stocks />}
            {(showWeather && typeof weatherData.main != 'undefined') ? (<Weather weatherData={weatherData} cityInput={cityInput} setCityInput={setCityInput} userCity={userCity} setUserCity={setUserCity} />) : ''}

            </div>

        </div>
        <Routes>
            <Route path='/tech' element={<div>{isClicked ?  <TechNews techNews={techNews} /> : ''}</div>}/>
            <Route path='/top' element={<div>{isTopNewsClicked ? <TopNews topNews={topNews}  /> : ''}</div>}/>
            <Route path='/sports' element={<div>{isSportsClicked ? <SportsNews sportsNews={sportsNews} /> : ''}</div>}/>
        
        </Routes>
    </header>
  )
}

export default Header

// to get route to load that pages content (eg, /Tech on reload loads the articles), you have to remove the 'isClicked ? ' condition