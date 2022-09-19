import React from 'react'
import './search.css'

const search = () => {
  return (
    <div>
      <div className='top-search-container'>
        <div className='main-container'>
          <input type={"text"}  placeholder={"search.."}/>
        </div>

      </div>
    </div>
  )
}

export default search