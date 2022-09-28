import React from "react";
import Carousel from "../../Component/Carousel/Carousel";
// import Footernav from "../../Component/Navigation/Footernavigation/Footernav";
import PoliticsandBussiness from "../../Component/PoliticsandBussiness/PoliticsandBussiness";
import RecentandPopular from "../../Component/Recentandpopular/RecentandPopular";
import Trendingandeditor from "../../Component/Trendingandeditor/Trendingandeditor";
// import { Carouseldata } from '../../Component/Dummydata/Carouseldata'

// import Footerdata from "../../Component/Dummydata/Footerdata";

// import {Footerdata} from '../../Component/Dummydata/Footerdata'

// import Footernav from '../../Component/Navigation/Footernavigation/Footernav'

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="carousel-home-container">
        <Carousel />
      </div>
      <div className="trending-home-container">
        <Trendingandeditor />
      </div>

      <PoliticsandBussiness />
      <RecentandPopular />
    </div>
  );
};

export default Home;
