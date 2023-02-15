import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import Error from './Error'

const SportsNews = ({sportsNews, setShowWeather, setShowTopNews, setIsTopNewsClicked, setIsClicked, setIsSportsClicked}) => {
      // set these false so on page refresh they dont show behind page
      useEffect(() => {
        setShowWeather(false)
        setShowTopNews(false)
      },[])

  return (
    <>
     <motion.div initial={{x: '-100vw'}} animate={{x: 0}} transition={{delay: 0.2, duration: 0.3, type:'tween'}}>
        <div className="news-article-container">
            {sportsNews ? sportsNews.map((item) => {
                return (
                    <a href={item.url} key={item.url} className='img-info-container'>
                        <div className="title-container">
                            <h2 className='title'>{item.title.length > 70 ? `${item.title.substring(0, 70)}...` : item.title}</h2>
                        </div>
                        <div className="img-container">
                            <img src={item.image} alt={item.publishedAt} className='news-image' />
                        </div>
                        <div className="news-description">
                            <p>{item.description.length > 200 ? `${item.description.substring(0, 200)}...` : item.description}</p>
                        </div>
                    </a>
                )
            }) : <Error setShowWeather={setShowWeather} setShowTopNews={setShowTopNews} setIsTopNewsClicked={setIsTopNewsClicked} setIsClicked={setIsClicked} setIsSportsClicked={setIsSportsClicked} />}
        </div>
    </motion.div>
    </>
  )
}

export default SportsNews