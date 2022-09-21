import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div>
      <div className='top-search-container'>
        <div className='main-container'>
          <input type={"text"} placeholder={"search.."} />
        </div>

      </div>
    </div>
  )
}

export default Search