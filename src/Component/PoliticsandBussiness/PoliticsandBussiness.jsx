import React from 'react'
import Bussiness from './Bussiness/Bussiness'
import Politics from './Politics/Politics'
// import Politicsdata from '../Dummydata/Politicsdata'
// import './PoliticsandaBussiness.css'
import './PoliticsandBussiness.css'
const PoliticsandBussiness = () => {
  return (
    <div className='politicsandBussiness-container'>
      {/* <div className='politics-container'> */}
        <Politics />

      {/* </div> */}
      {/* <div className='bussiness-container'> */}

        <Bussiness />
      {/* </div> */}
    </div>
  )
}

export default PoliticsandBussiness