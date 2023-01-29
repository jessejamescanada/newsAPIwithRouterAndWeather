import React from 'react'

const ShowStocks = ({stockData}) => {
  return (
    <div className='stocks-display'>
        {console.log(stockData)}
        <h2 className='finance-h2'>Finance</h2>
        {stockData.data.map((item) => {
            return(
                <div className="stock-data">
                    
                <div className="price-vol-container">
                <h4>{item.ticker}</h4>
                    {/* <p className='price'>${item.price}  %{item.day_change}</p> */}
                    <p className='price'>${item.price}  {item.day_change > 0 ? `${item.day_change}+` : `${item.day_change}-`}%</p>
                    <p className='vol'>vol: {item.volume}</p>
                </div>
                
                </div>

            )
        })}
    </div>
  )
}

export default ShowStocks