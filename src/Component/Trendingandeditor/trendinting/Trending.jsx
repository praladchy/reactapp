import React from 'react'
import { Trendingdata } from '../../Dummydata/Trendingdata'
import "./Trending.css"
const Trending = () => {
  return (
    <div>
      <div className='Trending-main-container'>
        {Trendingdata.map((each, index) => (
          <div className='inner-trending-container' key={index}>
            <h2>{each?.number}</h2>
            <div className='right-trending-container'>
              <p>{each?.trending} </p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Trending