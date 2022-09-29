import React from 'react'
import './search.css'

const SearchInput = () => {
  return (
    <div>
      {/* { */}
      {/* // Searchdata.map((each,index)=>( */}
        
      <div className='main-container' >
      {/* <input type={"text"} placeholder={each?.placeholder}/> */}
      <input type={"text"} placeholder={"search.."}/>
    </div>

      {/* // )) */}
      {/* // } */}


    </div>
  )
}

export { SearchInput }