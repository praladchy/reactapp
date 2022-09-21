import React from "react";
import { NavLink } from "react-router-dom";
import "./Bottomnavigation.css";

const Bottomnavigation = ({ Navdata=[] }) => {
  return (
    <div className="main-bottom-container">
      <div className="bottom-container">
        {Navdata.map((each, index) => (
          <div className="bottom-nav-container">
            <NavLink to={each.url}>{each.lable}</NavLink>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Bottomnavigation;
