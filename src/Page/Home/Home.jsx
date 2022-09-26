import React from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import PoliticsandBussiness from '../../Component/PoliticsandBussiness/PoliticsandBussiness'
import Trendingandeditor from '../../Component/Trendingandeditor/Trendingandeditor'
// import { Carouseldata } from '../../Component/Dummydata/Carouseldata'
import './Home.css'
const Home = () => {
  return (
    <div>
      <div className='carousel-home-container'>
      <Carousel /> 
      </div>
     <div className='trending-home-container'>
     <Trendingandeditor />
     </div>

      <PoliticsandBussiness />
    </div>
  )
}

export default Home