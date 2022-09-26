import React from 'react'
import Carousel from '../../Component/Carousel/Carousel'
import PoliticsandBussiness from '../../Component/PoliticsandBussiness/PoliticsandBussiness'
import Trendingandeditor from '../../Component/Trendingandeditor/Trendingandeditor'
// import { Carouseldata } from '../../Component/Dummydata/Carouseldata'

const Home = () => {
  return (
    <div>
      <Carousel /> 
      <Trendingandeditor />
      <PoliticsandBussiness />
    </div>
  )
}

export default Home