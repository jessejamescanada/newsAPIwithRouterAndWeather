import React from 'react'
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const HomeButton = ({setShowWeather}) => {


    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
        setShowWeather(true)
    }
  return (
    <motion.button onClick={goHome}
    className='home-btn'
    initial={{x: '-100vw'}}
    animate={{x: 0}}
        >Home
    </motion.button>
  )
}

export default HomeButton