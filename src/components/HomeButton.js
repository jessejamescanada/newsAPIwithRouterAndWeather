import React from 'react'
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const HomeButton = ({setShowWeather, setIsClicked, setIsTopNewsClicked, setIsSportsClicked}) => {


    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
        setShowWeather(true)
        setIsTopNewsClicked(false)
        setIsClicked(false)
        setIsSportsClicked(false)
    }
  return (
    <motion.button onClick={goHome}
    className='home-btn'
    initial={{y: '-100vw'}}
    animate={{y: 0}}
    transition={{delay: 0.1, duration: 0.5, type: 'spring', stiffness: 80}}
        >Home
    </motion.button>
  )
}

export default HomeButton