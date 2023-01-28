import React from 'react'
// import Politicsdata from '../../Dummydata/Politicsdata'
import './Politics.css'
const Politics = ({FromPoliticsdata}) => {
    return (
        <div>
            <div className='Politics-main-container'>
                <div className='politics-heading-container'>

                    <h2 className='politics-heading'>Politics</h2>
                </div>
                {FromPoliticsdata.map((each, index) => (
                    <div className='politics-image-description-container' key={index}>
                        {/* <figure> */}
                            <img
                                src={each?.image}
                                className="politics-image-container"
                                alt="imgload"

                            />
                        {/* </figure> */}

                        <div className='politics-title-description-container'>
                            <div className='politics-description-heading-container'>
                                <p>{each?.title}</p>
                            </div>
                            <div className='politics-description-container'>
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

export default Politics