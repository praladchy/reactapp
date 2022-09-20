import React from "react";
import BottomNavigation from "../bottomnavigation/BottomNavigation";
import { NavData } from "../../../Statics Data/StaticsData";
// import search from "../../Shared/inputfield/search";
// import { FiSearch } from "react-icons/fi";
// import button from '../../shared/buttonfield/button';

const Topnavigation = () => {
  return (
    <div>
      <div className="container">
        <div className="top-container">
          <div className="top-logo-container">
            <h2 className="logo-container">wel-learn</h2>
            {/* <div className='search-container'> */}
            {/* <search inputtype={"Text"} setplaceholder={"search..."} />                        </div> */}
            {/* <div className='button-container'> */}
            {/* <button className='buttom-icon' */}
            {/* icon={<FiSearch fontSize={"large"} color="white" />} */}
            {/* /> */}

            {/* </div> */}
          </div>
        </div>
          <div className="bottom-nav-containers-layout">
            <BottomNavigation NavData={NavData}/>
          </div>
      </div>
    </div>
  );
};

export {Topnavigation} ;
