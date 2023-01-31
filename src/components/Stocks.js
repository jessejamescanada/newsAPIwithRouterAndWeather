import React from 'react'
import { useState,useEffect } from 'react'
import ShowStocks from './ShowStocks'
import {motion} from 'framer-motion'

const Stocks = () => {
    const stockApi = 'uAbMPJG1taDF2dr5xqby8EMSuOZxTcZdSpnK1Eko'
    const [stockData, setStockData] = useState([])
    const [stockInput, setStockInput] = useState('')
    const [stockSearch, setStockSearch] = useState('')

    useEffect(() => {
        getStocks()
    },[stockSearch])

    const getStocks = async () => {
        try{
            const api = await fetch(`https://api.stockdata.org/v1/data/quote?symbols=${!stockSearch ? 'AAPL,TSLA,XOM' : stockSearch}&api_token=${stockApi}`)

            const data = await api.json()
            setStockData(data)
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
            {(typeof stockData.data != 'undefined') ? (<ShowStocks stockData={stockData} stockInput={stockInput} setStockInput={setStockInput} stockSearch={stockSearch} setStockSearch={setStockSearch} />) : ''}
        </motion.div>
    </div>
  )
}

export default Stocks
