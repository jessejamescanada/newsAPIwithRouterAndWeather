import React from 'react'
import '../App.css';
import {motion} from 'framer-motion'
import {useState} from 'react'

const Weather = ({weatherData, cityInput, setCityInput, userCity, setUserCity}) => {
    const [error, setError] = useState('')
    const inputTextHandler = e => {
        e.preventDefault()
        setCityInput(e.target.value)
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        if(cityInput === ''){
            setError('please enter a city')
            setTimeout(() => {
                setError('')
            }, 2000);
        }else{
            setUserCity(cityInput)
            setCityInput('')
        }
    }
  return (
    <div >
        <motion.div 
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{delay: 0.2, duration: 1, type: 'spring', stiffness: 70}}
            className="weather-content">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-container">
                        <h2>Weather Forecast</h2>
                        <input type="text" 
                            placeholder='Enter City'
                            value={cityInput}
                            onChange={inputTextHandler}
                            />
                    </div>
                    <div className='error'>{error}</div>
                    <button className='search-btn'>Search</button>
                </form>
            <div className='weather-results'>
                <div className="weather-results-container">
                    <h2>{weatherData.name}</h2>
                    <p>Temp: {weatherData.main.temp.toFixed(0)}</p>
                    <p>Humidity: {weatherData.main.humidity}</p>
                    <p>Wind: {weatherData.wind.speed.toFixed(0)}mph</p>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" />
                    <p className='weather-desc'>{weatherData.weather[0].description}</p>

                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Weather

