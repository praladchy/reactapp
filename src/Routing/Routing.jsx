import React from "react";

import { Route, Routes } from "react-router-dom";
// import Home from "../../src/Page/Home/Home";
// import Contacts from "../../src/Page/contact/Contacts";
// import Politics from "../Page/Politics/Politics";
// import Bussiness from "../Page/Bussiness/Bussiness";
import Navigations from "../Component/Navigation/Navigation";
import { Navpath } from "../Component/Dummydata/Navpath"
import Footernav from "../Component/Navigation/Footernavigation/Footernav";
import { Footerdata } from "../Component/Dummydata/Footerdata"
import './Routing.css'
const Routing = () => {
  return (
    <div className="Router-main Container">
      <div className="Router-sub-container">
        <Navigations />
        {Navpath.map((each, index) => (
          <div className="routes-container" key={index}>
            <Routes>

              <Route path={each?.url} element={each?.element} />

            </Routes>
          </div>
        ))}
        <Footernav Footerdata={Footerdata} />
      </div>
    </div>
  );
};

export default Routing;
