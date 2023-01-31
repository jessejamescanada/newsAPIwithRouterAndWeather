import React from 'react'
import { useState,useEffect } from 'react'
import ShowStocks from './ShowStocks'
import {motion} from 'framer-motion'

const Stocks = () => {
    const stockApi = 'p5KNISYFOld2vvCoGcYRXrjOlqC4XZUAQkjM9c3W'
    const [stockData, setStockData] = useState([])

    useEffect(() => {
        getStocks()
    },[])

    const getStocks = async () => {
        try{
            const api = await fetch(`https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,XOM&api_token=${stockApi}`)

            const data = await api.json()
            setStockData(data)
            // console.log(stockData)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className="stocks-container">
        <motion.div 
            initial={{y: '100px'}}
            animate={{y: 0}}
            transition={{duration: 7, type: 'spring', stiffness: 330}}
            className="stocks-content"
        >
            {(typeof stockData.data != 'undefined') ? (<ShowStocks stockData={stockData} />) : ''}
        </motion.div>
    </div>
  )
}

export default Stocks

// https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=p5KNISYFOld2vvCoGcYRXrjOlqC4XZUAQkjM9c3W 