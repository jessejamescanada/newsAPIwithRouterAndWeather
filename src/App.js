
import './App.css';
import {useEffect, useState} from 'react'
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import TechNews from './components/TechNews';
import TopNews from './components/TopNews';
import SportsNews from './pages/SportsNews';

function App() {
  const apiKey = 'e853281ea7754622b58941754cedafaf'
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

  // Top News
  useEffect(() => {
    getNews()
  },[])

  const getNews = async () => {
    try{
      const api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&sortBy=popular&pageSize=10&apiKey=${apiKey}`)
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
      const api = await fetch(`https://newsapi.org/v2/everything?q=apple+microsoft+tesla+chatgpt&sortBy=popularity&pageSize=10&apiKey=${apiKey}`)
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
      const api = await fetch(`https://newsapi.org/v2/everything?q=nfl+nhl+mlb+nba&sortBy=popularity&pageSize=10&apiKey=${apiKey}`)
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
          console.log(data)
      }catch(err){
          console.log(err)
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
      {/* <div>{isClicked ?  <TechNews techNews={techNews} /> : ''}</div>
      <div>{isTopNewsClicked ? <TopNews topNews={topNews}  /> : ''}</div>
      <div>{isSportsClicked ? <SportsNews sportsNews={sportsNews} /> : ''}</div> */}
      </div>
  </>
  );
}

export default App;