import React from 'react'
// import Politicsdata from '../../Dummydata/Politicsdata'
import Bussinessdata from '../../Dummydata/Bussinessdata'
import './Bussiness.css'
const Bussiness = () => {
    return (
        <div>
            <div className='Bussiness-main-container'>
                <div className='Bussiness-heading-container'>

                    <h2>Bussiness</h2>
                </div>
                {Bussinessdata.map((each, index) => (
                    <div className='Bussiness-image-description-container' key={index}>
                        <figure>
                            <img
                                src={each?.image}
                                className="Bussiness-image-container"
                                alt="imgload"

                            />
                        </figure>

                        <div className='Bussiness-title-description-container'>
                            <div className='Bussiness-description-heading-container'>
                                <p>{each?.title}</p>
                            </div>
                            <div className='Bussiness-description-container'>
                                <p>{each?.Description}</p>
                            </div>

                        </div>
                    </div>
                ))

                }


            </div>
        </div>
    )
}

export default Bussiness