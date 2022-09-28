import React from 'react'
import './Popularpost.css'

const Popularpost = ({Popularpostdata=[]}) => {
    return (
        <>
            <div className='popularpost-main-componenet'>
                <div className='popularpost-heading-componenet'>

                </div>
                {Popularpostdata.map((each, index) => (

                    <div className='popularpost-image-title-container' key={index}>
                        <figure>
                            <img
                                src={each?.image}
                                className="popularpost-image-container"
                                alt="popularposts not found"
                            />
                        </figure>
                        <div className='popularpost-title-container'>
                            <h3>{each?.title}</h3>
                        </div>

                    </div>

                ))

                }
            </div>
        </>
    )
}

export default Popularpost