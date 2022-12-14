import React from "react";
import './Navigation.css'

import Topnavigation from "../../Component/Navigation/topnavigation/Topnavigation";
import Bottomnavigation from "../../Component/Navigation/bottomNavigation/Bottomnavigation";
import { Navdata } from "../Dummydata/Navdata";
const Navigations = () => {
   
   
  return (
    <div className="main-container">
      <div className="top-container">
        <Topnavigation />
      </div>
      <div className="bottom-container">
        <Bottomnavigation Navdata={Navdata} />
      </div>
    </div>
  );
};

export default Navigations;
