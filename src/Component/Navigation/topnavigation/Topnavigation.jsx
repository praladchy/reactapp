import React from "react";
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
        <div classname="home-contaner">Home</div>
        <div classname="bussiness-container">Bussiness</div>
        <div classname="politics-container">politics</div>
        <div classname="service-container">Service</div>

        <div classname="contact-container">contact</div>
      </div>
    </div>
  );
};

export default Topnavigation;
