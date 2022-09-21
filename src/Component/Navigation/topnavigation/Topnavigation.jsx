import React from "react";
import Button from "../../../Shared/buttonfield/Button";
import Search from "../../../Shared/inputfield/Search";
// import './Topnavigation.css'
import { GrSearch } from 'react-icons/gr';




const Topnavigation = () => {
  return (
    <div>
      <div className="container">
        <div className="top-container">
          <div className="top-logo-container">
            <h2 className="logo-container">wel-learn</h2>
          </div>
         
          <div className="search-side-container">
            <div className='search-container'>
              <Search />
            </div>
            <div className='button-container'>
              <Button icon={<GrSearch color="blue"/>}/>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnavigation;

