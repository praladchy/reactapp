import React from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import Footernav from '../../Component/Navigation/Footernavigation/Footernav'
import PoliticsandBussiness from '../../Component/PoliticsandBussiness/PoliticsandBussiness'
import RecentandPopular from '../../Component/Recentandpopular/RecentandPopular'
import Trendingandeditor from '../../Component/Trendingandeditor/Trendingandeditor'
// import { Carouseldata } from '../../Component/Dummydata/Carouseldata'
import Footerdata from '../../Component/Dummydata/Footerdata'
// import Footernav from '../../Component/Navigation/Footernavigation/Footernav'
const Home = () => {
  return (
    <div>
      <Carousel /> 
      <Trendingandeditor />
      <PoliticsandBussiness />
      <RecentandPopular />
    <Footernav Footerdata={Footerdata}/>
    </div>
  )
}

export default Home