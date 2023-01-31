import React, { useState } from 'react'

const ShowStocks = ({stockData, stockInput, setStockInput, stockSearch, setStockSearch}) => {

  const [stockError, setStockError] = useState(false)
  const stockTextHandler = e => {
    setStockInput(e.target.value)
  }
  const onSubmitHandler = e => {
    e.preventDefault()
    if(stockInput === ''){
      setStockError('Please enter a symbol')
      setTimeout(() => {
        setStockError('')
      }, 2000);
    }else{
      setStockSearch(stockInput)
      setStockInput('')
    }
    
  }
  return (
    <div className='stocks-display'>
        <h2 className='finance-h2'>Finance</h2>
        <form onSubmit={onSubmitHandler} className='stock-form'>
          <input type="text" 
            placeholder='Search'
            value={stockInput}
            onChange={stockTextHandler}
          />
          <div className="error">{stockError}</div>
          <button className='stock-btn'>Submit</button>
        </form>
        {stockData.data.map((item) => {
            return(
                <div key={item.volume} className="stock-data">
                    
                <div className="price-vol-container">
                <h4>{item.ticker}</h4>
                    <p className={item.day_change > 0 ? 'poss' : 'neg'}>${item.price}  {item.day_change > 0 ? `+${item.day_change}` : `${item.day_change}`}%</p>
                    <p className='vol'>vol: {item.volume}</p>
                </div>
                </div>
            )
        })}
    </div>
  )
}

export default ShowStocks