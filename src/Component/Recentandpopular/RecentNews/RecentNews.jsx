import React from 'react'
// import { Popularpostdata } from '../../Dummydata/Popularpostdata'
import './RecentNews.css'

const RecentNews = ({Datafrompopular}) => {
 console.log('Data',Datafrompopular)
  return (
    <div>
      {Datafrompopular?.map((each,index)=>(
         <div key={index}>
          <h1>
            {each?.title}
          </h1>

         </div>
      ))}
     
    </div>
  )
}

export default RecentNews