import React from 'react'
// import Politics from '../../Component/PoliticsandBussiness/Politics/Politics'
import Popularpost from '../../Component/Recentandpopular/Popularpost/Popularpost'
import { Popularpostdata } from '../../Component/Dummydata/Popularpostdata'
import Politicsdata from '../../Component/Dummydata/Politicsdata'
import './Bussiness.css'
const Bussiness = () => {
  return (
    <div className='Bussiness-page-politics-popularpost-container'>
      {/* <Politics /> */}
      <div>
        <div className='Bussiness-page-heading-container'>
          <h2>Politics</h2>
        </div>
        {Politicsdata.map((each, index) => (
          <div ClassName="Bussiness-page-Politics-container " key={index}>
            <div className='Bussiness-page-politics-title-container'>
              <h3>{each?.lable}</h3>
            </div>
            <div className='Bussiness-page-description-container'>
              <p>{each?.Description}</p>

            </div>
          </div>
        ))}
      </div>
      <Popularpost Popularpostdata={Popularpostdata} />
    </div>
  )
}

export default Bussiness