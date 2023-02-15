import React from 'react'
import { useState, useEffect } from 'react';
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
import {motion} from 'framer-motion'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Header = ({techNews, topNews, sportsNews, weatherData, cityInput, setCityInput, userCity, setUserCity}) => {

    const [isClicked, setIsClicked] = useState(false)
    const [isTopNewsClicked, setIsTopNewsClicked] = useState(false)
    const [isSportsClicked, setIsSportsClicked] = useState(false)
    const [showWeather, setShowWeather] = useState(false)
    const [showTopNews, setShowTopNews] = useState(false)
    const [displayDate, setDisplayDate] = useState('')

    const currentDate = () => {
        let date = new Date()
        date = date.toString().split(" ")
        setDisplayDate(date)
    }
    useEffect(() => {
        currentDate()
        setShowWeather(true)
        setShowTopNews(true)
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
                {showTopNews ? 
                <div className="top-news-section">
                    <h2>Trending</h2>
                    <div className="top-news-content">
                <Swiper 
                modules={[Navigation]}
                    spaceBetween={5}
                    slidesPerView={2}
                    navigation
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                          },
                          "@0.75": {
                            slidesPerView: 2,
                          },
                          "@1.00": {
                            slidesPerView: 2,
                          },
                          "@1.50": {
                            slidesPerView: 2,
                          }
                    }}
                >
                    {topNews ? topNews.map((item) => {
                        return(
                        <>
                        <SwiperSlide key={item.url} >
                                <a href={item.url} >
                                <img src={item.image} alt="" className='top-img-home' />
                                <div className="showcase-title" >
                                    {item.title.length > 40 ? `${item.title.substring(0, 40)}...` : item.title}
                                </div>
                                </a>  
                        </SwiperSlide>
                        </>
                        )
                    }): ''}
                </Swiper>
                </div>
                </div>
                : 
                ''}
                <div className="stocks-weather">       
                    {showWeather && <Stocks />}
                </div>
            </div>
        </div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/tech/*' element={<div>{techNews ?  <TechNews techNews={techNews} setShowWeather={setShowWeather} setShowTopNews={setShowTopNews} setIsTopNewsClicked={setIsTopNewsClicked} setIsClicked={setIsClicked} setIsSportsClicked={setIsSportsClicked}/> : ''}</div>}/>

            <Route path='/top/*' element={<div>{topNews ? <TopNews topNews={topNews} setShowWeather={setShowWeather} setShowTopNews={setShowTopNews} setIsTopNewsClicked={setIsTopNewsClicked} setIsClicked={setIsClicked} setIsSportsClicked={setIsSportsClicked}/> : ''}</div>}/>

            <Route path='/sports/*' element={<div>{sportsNews ? <SportsNews sportsNews={sportsNews} setShowWeather={setShowWeather} setShowTopNews={setShowTopNews} setIsTopNewsClicked={setIsTopNewsClicked} setIsClicked={setIsClicked} setIsSportsClicked={setIsSportsClicked}/> : ''}</div>}/>
        </Routes>
    </div>
  )
}

export default Header

