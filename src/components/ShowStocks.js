import React from 'react'

const ShowStocks = ({stockData}) => {
  return (
    <div className='stocks-display'>
        <h2 className='finance-h2'>Finance</h2>
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