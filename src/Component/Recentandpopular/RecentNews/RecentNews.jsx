import React from 'react'
// import { Popularpostdata } from '../../Dummydata/Popularpostdata'
import './RecentNews.css'


const RecentNews = ({Datafrompopular=[]}) => {
  // console.log('Data', Datafrompopular)
  return (
    <div>
      <div className='RecentNews-heading-container'><h2>RecentNews</h2></div>
      {Datafrompopular.map((each, index) => (
        <div key={index} className="RecentNews-tittle-description-container">
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