import './App.css';
import {useEffect, useState} from 'react'
import Header from './components/Header';

function App() {
  const [topNews, setTopNews] = useState([])
  const [techNews, setTechNews] = useState([])
  const [sportsNews, setSportsNews] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [isTopNewsClicked, setIsTopNewsClicked] = useState(false)
  const [isSportsClicked, setIsSportsClicked] = useState(false)
  const [weatherData, setWeatherData] = useState([])
  const apiKey2 = 'cbdb06c75c00a30fb0a8d241f1ef5392'
  const [cityInput, setCityInput] = useState('')
  const [userCity, setUserCity] = useState('')
  const newsApiKey = 'a6c1d9f1334d8d1ff7508afb79fa7a26'
  // const newsApiKey = '1909ddf9282f17d5e8e3217eb7ac411f'

  // Top News
  useEffect(() => {
    getNews()
  },[])

  const getNews = async () => {
    try{
      const api = await fetch(`https://gnews.io/api/v4/top-headlines?topic=breaking-news&token=${newsApiKey}&lang=en&country=us&max=9`)
      const data = await api.json()
      setTopNews(data.articles)
    }catch(err){
     console.log(err)
    }
  }

  // tech news
  useEffect(() => {
    getTechNews()
  },[])

  const getTechNews = async () => {
    try{
      const api = await fetch(`https://gnews.io/api/v4/top-headlines?topic=technology&token=${newsApiKey}&lang=en&country=us&max=9`)
      const data = await api.json()
      setTechNews(data.articles)
    }catch(err){
      console.log(err)
    }
  }

  // sports news
  useEffect(() => {
    getSportsNews()
  },[])

  const getSportsNews = async () => {
    try{
      const api = await fetch(`https://gnews.io/api/v4/top-headlines?topic=sports&token=${newsApiKey}&lang=en&country=us&max=9`)
      const data = await api.json()
      setSportsNews(data.articles)
    }catch(err){
      console.log(err)
    }
  }

  // weather
  useEffect(() => {
      getWeather()
  },[userCity])

  const getWeather = async () => {
      try{
          const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${!userCity ? 'buffalo' : userCity}&units=imperial&appid=${apiKey2}`)

          const data = await api.json()
          setWeatherData(data)
          if(data.cod === '404'){
            setUserCity('miami')
            setCityInput('')
          }
      }catch(err){
          console.log(err)
          setUserCity('buffalo')
      }
  }
  return (
  <>
  <div className='home-container'>
    <Header 
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        isTopNewsClicked={isTopNewsClicked}
        setIsTopNewsClicked={setIsTopNewsClicked}
        isSportsClicked={isSportsClicked}
        setIsSportsClicked={setIsSportsClicked}
        techNews={techNews}
        topNews={topNews}
        sportsNews={sportsNews}
        weatherData={weatherData}
        cityInput={cityInput}
        setCityInput={setCityInput}
        userCity={userCity}
        setUserCity={setUserCity}
    />
      </div>
  </>
  );
}

export default App;