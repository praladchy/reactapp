import React from "react";
import { NavLink } from "react-router-dom";
import "./Bottomnavigation.css";

const Bottomnavigation = ({ Navdata = [] }) => {
  return (<>
    <div className="main-bottom-container">
      <div className="bottom-container">


        {Navdata.map((each, index) => (
          <div key={index}>
            <NavLink className="bottom-nav-container" to={each.url} >{each.lable}</NavLink>
          </div>
        ))}

      </div>
    </div>
    

  </>
  );
};

export default Bottomnavigation;
