import React, { Fragment,useState } from "react";
import { ButtonWithIcon } from "../../../Shared/buttonfield/ButtonWithIcon";
import './Topnavigation.css'
import { GrSearch } from 'react-icons/gr';
import { SearchInput } from "../../../Shared/inputfield/SearchInput";

import { NavLink } from "react-router-dom";


const Topnavigation = () => {
  const[login,setlogin]=useState("Login")
  const handleEvent=()=>{
    setlogin("LogOut")}
  return (
    <div>


      <div className="top-container">

        <div className="logo-container"><h2>wel-learn</h2></div>


        <div className="search-side-container">
          <div className="Login-Bottom-Navigation-container">

            <NavLink to="/Login" className="bottom-nav-container"onClick={handleEvent}>{login}</NavLink>
          </div>
          <Fragment>
          <div className='search-container'>
            <SearchInput />
          </div>
          <div className='button-container'>
            <ButtonWithIcon icon={<GrSearch color="blue" />} />


          </div>
          </Fragment>
        </div>

      </div>

    </div>
  );
};

export default Topnavigation;

