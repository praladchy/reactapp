import React from 'react'

import Topnavigation from '../../Component/Navigation/topnavigation/Topnavigation'
import Bottomnavigation from '../../Component/Navigation/bottomNavigation/Bottomnavigation'
import { Navdata } from '../Dummydata/Dummydata'
const Navigation = () => {
    return (


        <div className='main-container'>

            <div className='top-container'>
                <Topnavigation />
            </div>
            <div className="bottom-container">
               
                <Bottomnavigation Navdata={<Navdata/>} />

            </div>
        </div>
    )
}

export default Navigation