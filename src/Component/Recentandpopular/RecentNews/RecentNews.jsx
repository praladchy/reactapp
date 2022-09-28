import React from 'react'
// import { Popularpostdata } from '../../Dummydata/Popularpostdata'
import './RecentNews.css'


const RecentNews = ({ Datafrompopular }) => {
  console.log('Data', Datafrompopular)
  return (
    <div>
      {Datafrompopular.map((each, index) => (
        <div key={index}>
          <h2>
            {each?.title}
          </h2>
          <div className='RecentNews-description-container'>
            <p>{each?.description}</p>

          </div>
        </div>
      ))}
    </div>
  )
}
export default RecentNews;