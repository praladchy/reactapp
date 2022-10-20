import React from 'react'
import './RecentandPopularpost.css'
import Popularpost from './Popularpost/Popularpost'
import { Popularpostdata } from '../Dummydata/Popularpostdata'
import RecentNews from './RecentNews/RecentNews'

const RecentandPopular = () => {
  return (
    <div className='recentandpopular-container'>
      <div className='recent-popular-news-container'>
        <RecentNews Datafrompopular={Popularpostdata.slice(0, 3)} />
      </div>
      <div className='recent-popular-popular-container'>
        <Popularpost Popularpostdata={Popularpostdata} />
      </div>

    </div>
  )
}

export default RecentandPopular