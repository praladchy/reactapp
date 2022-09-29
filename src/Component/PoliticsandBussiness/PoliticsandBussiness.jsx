import React from 'react'
import Politicsdata from '../Dummydata/Politicsdata'
import Bussiness from './Bussiness/Bussiness'
import Politics from './Politics/Politics'

// import './PoliticsandaBussiness.css'
import './PoliticsandBussiness.css'
const PoliticsandBussiness = () => {
  return (
    <div className='politicsandBussiness-container'>
      {/* <div className='politics-container'> */}
        <Politics FromPoliticsdata={Politicsdata.slice(0,4)}/>

      {/* </div> */}
      {/* <div className='bussiness-container'> */}

        <Bussiness />
      {/* </div> */}
    </div>
  )
}

export default PoliticsandBussiness