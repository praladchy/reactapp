import React from "react";
import { ButtonWithIcon } from "../../../Shared/buttonfield/ButtonWithIcon";
import './Topnavigation.css'
import { GrSearch } from 'react-icons/gr';
import { SearchInput } from "../../../Shared/inputfield/SearchInput";




const Topnavigation = () => {
  return (
    <div>
      <div className="container">
        <div className="top-container">
          {/* <div className="top-logo-container"> */}
            <h2 className="logo-container">wel-learn</h2>
          {/* </div> */}
         
          <div className="search-side-container">
            <div className='search-container'>
              <SearchInput />
            </div>
            <div className='button-container'>
              <ButtonWithIcon icon={<GrSearch color="blue"/>}/>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnavigation;

