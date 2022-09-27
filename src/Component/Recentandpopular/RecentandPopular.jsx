import React from 'react'
import './RecentandPopularpost.css'
import Popularpost from './Popularpost/Popularpost'
import {Popularpostdata} from '../Dummydata/Popularpostdata'
import RecentNews from './RecentNews/RecentNews'

const RecentandPopular = () => {
  return (
    <div>
        <RecentNews  Datafrompopular={Popularpostdata.slice(0,1)}/>
        <Popularpost Popularpostdata={Popularpostdata}/>
    </div>
  )
}

export default RecentandPopular