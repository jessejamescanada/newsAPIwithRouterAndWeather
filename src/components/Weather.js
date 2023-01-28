import React from 'react'
import '../App.css';
import {motion} from 'framer-motion'
import {useState} from 'react'

const Weather = ({weatherData, cityInput, setCityInput, userCity, setUserCity}) => {

    // const [weatherData, setWeatherData] = useState([])
    // const apiKey = 'cbdb06c75c00a30fb0a8d241f1ef5392'

    // useEffect(() => {
    //     getWeather()
    // },[])

    // const getWeather = async () => {
    //     try{
    //         const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=buffalo&units=imperial&appid=${apiKey}`)

    //         const data = await api.json()
    //         setWeatherData(data)
    //         console.log(data)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    const inputTextHandler = e => {
        e.preventDefault()
        setCityInput(e.target.value)
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        setUserCity(cityInput)
    }
  return (
    <div className="weather-container">
        <motion.div 
        initial={{x: '100vw'}}
        animate={{x: 0}}
        transition={{delay: 0.2, duration: 1, type: 'spring', stiffness: 70}}
            className="weather-content">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-container">
                        <input type="text" 
                            placeholder='Enter City'
                            value={cityInput}
                            onChange={inputTextHandler}
                            />
                    </div>
                    <button>Search</button>
                </form>
            <div className='weather-results'>
                <div className="weather-results-container">
                    <h2>{weatherData.name}</h2>
                    <p>Temp: {weatherData.main.temp}</p>
                    <p>Humidity: {weatherData.main.humidity}</p>
                    <p>Wind: {weatherData.wind.speed}</p>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="" />
                    <p>{weatherData.weather[0].description}</p>

                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Weather

