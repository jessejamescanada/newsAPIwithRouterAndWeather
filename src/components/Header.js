import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import '../App.css';
import HomeButton from './HomeButton';
import TechNewsButton from './TechNewsButton';
import TopNewsButton from './TopNewsButton';
import SportsNewsButton from './SportsNewsButton';
import TechNews from '../pages/TechNews';
import TopNews from '../pages/TopNews';
import SportsNews from '../pages/SportsNews';
import Weather from './Weather';
import Stocks from './Stocks';
import Home from '../pages/Home';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Header = ({techNews, topNews, sportsNews, weatherData, cityInput, setCityInput, userCity, setUserCity}) => {

    const [isClicked, setIsClicked] = useState(false)
    const [isTopNewsClicked, setIsTopNewsClicked] = useState(false)
    const [isSportsClicked, setIsSportsClicked] = useState(false)
    const [showWeather, setShowWeather] = useState(true)
    const [showTopNews, setShowTopNews] = useState(true)
    const [imgWidth, setImgWidth] = useState(null)
    const [displayDate, setDisplayDate] = useState('')
    const imgRef = useRef(null)
    const elementRef = useRef(null)

    const currentDate = () => {
        let date = new Date()
        date = date.toString().split(" ")
        setDisplayDate(date)
    }
    useEffect(() => {
        currentDate()
    },[])
  
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
            setShowTopNews(false)
        }
    }

    const handleScroll = (element, speed, distance, step) => {
        console.log(distance)
        let scrollAmount = 0
        const slideTimer = setInterval(() => {
            element.scrollLeft += step
            scrollAmount += Math.abs(step)
            if(scrollAmount >= distance){
                clearInterval(slideTimer)
            }
        }, speed);
    }

    // icon styling
    const arrowLeftStyle = {fontSize: '3.5em', cursor: 'pointer', color: '#fff', opacity: '0.7' }
    const arrowRightStyle = {fontSize: '3.5em', cursor: 'pointer', color: '#fff', opacity: '0.7'}

    return (
    <div>
        <div className="header-container">
            <div className="header-items-container">
                <h1>The News</h1>
                <motion.div
                    initial={{x: 0, rotate: 20}}
                    animate={{x: 0, rotate: -20}}
                    transition={{delay: 0.2, duration: 1, repeat: Infinity, repeatType: 'reverse'}}
                    className='exclamation'
                    >!
                    </motion.div>
                <div className="options-container">
                </div>
            </div>

            <div className="btns-weather">
                <div className={showWeather ? 'news-btns' : 'row'}>
                <motion.div
                        initial={{x: '100vw'}}
                        animate={{x: 0}}
                        transition={{delay: 0.2, duration: 0.2, type: 'spring', stiffness: 50}}
                >
                        <HomeButton setShowTopNews={setShowTopNews} setShowWeather={setShowWeather} setIsClicked={setIsClicked} setIsTopNewsClicked={setIsTopNewsClicked} setIsSportsClicked={setIsSportsClicked}/>
                </motion.div>
                <motion.div                    
                        initial={{x: '100vw'}}
                        animate={{x: 0}}
                        transition={{delay: 0.3, duration: 0.2, type: 'spring', stiffness: 50}}
                >
                <TopNewsButton 
                    changedTopClick={changedTopClick}
                />
                </motion.div>
                <motion.div
                        initial={{x: '100vw'}}
                        animate={{x: 0}}
                        transition={{delay: 0.4, duration: 0.2, type: 'spring', stiffness: 50}}
                >
                <TechNewsButton  
                    changedTechClick={changedTechClick}
                />
                </motion.div>
                <motion.div
                        initial={{x: '100vw'}}
                        animate={{x: 0}}
                        transition={{delay: 0.5, duration: 0.2, type: 'spring', stiffness: 50}}
                >
                <SportsNewsButton  
                    changedSportsClick={changedSportsClick}
                />
                </motion.div>
                </div>
                <div className="weather">
                {(showWeather && typeof weatherData.main != 'undefined') ? (<Weather weatherData={weatherData} cityInput={cityInput} setCityInput={setCityInput} userCity={userCity} setUserCity={setUserCity} displayDate={displayDate} />) : ''}
                </div>
            </div>

            <div className="stocks-weather-container">
                {showTopNews ? <div className="top-news-section">
                    <h2>trending</h2>
                <div className="top-btn-container">
                         <button onClick={() => handleScroll(elementRef.current, 10, (imgWidth - 10), -10)}><FaChevronLeft style={arrowLeftStyle}/></button>
                         <button onClick={() => handleScroll(elementRef.current, 10, (imgWidth - 10), 10)}><FaChevronRight style={arrowRightStyle}/></button>
                    </div>
                    <div className="top-news-content" ref={elementRef} >
                        {topNews ? topNews.map((item) => {
                            return(
                                <>
                                <a href={item.url}  className="showcase-container">
                                    <div ref={imgRef} key={item.url}>
                                    <img src={item.image} className="top-img-home" alt=""  onLoad={() => setImgWidth(imgRef.current.scrollWidth)}/>
                                    </div>
                                    <div className="showcase-title">
                                        {item.title}
                                    </div>
                                </a>
                                </>
                            )
                        }): ''}
                    </div>
                </div> : ''}
                <div className="stocks-weather">       
                    {showWeather && <Stocks />}
                </div>
            </div>
        </div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/tech/*' element={<div>{isClicked ?  <TechNews techNews={techNews} setShowWeather={setShowWeather} setShowTopNews={setShowTopNews} setIsTopNewsClicked={setIsTopNewsClicked} setIsClicked={setIsClicked} setIsSportsClicked={setIsSportsClicked}/> : ''}</div>}/>

            <Route path='/top/*' element={<div>{isTopNewsClicked ? <TopNews topNews={topNews} setShowWeather={setShowWeather} setShowTopNews={setShowTopNews} setIsTopNewsClicked={setIsTopNewsClicked} setIsClicked={setIsClicked} setIsSportsClicked={setIsSportsClicked}/> : ''}</div>}/>

            <Route path='/sports/*' element={<div>{isSportsClicked ? <SportsNews sportsNews={sportsNews} setShowWeather={setShowWeather} setShowTopNews={setShowTopNews} setIsTopNewsClicked={setIsTopNewsClicked} setIsClicked={setIsClicked} setIsSportsClicked={setIsSportsClicked}/> : ''}</div>}/>
        </Routes>
    </div>
  )
}

export default Header

