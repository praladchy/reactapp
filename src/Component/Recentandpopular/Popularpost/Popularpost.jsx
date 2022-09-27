import React from 'react'
import './Popularpost.css'

const Popularpost = ({Popularpostdata=[]}) => {
    return (
        <>
            <div className='popularpost-main-componenet'>
                <div className='popularpost-heading-componenet'>

                </div>
                {Popularpostdata.map((each, index) => (

                    <div className='popularpost-image-title-component' key={index}>
                        <figure>
                            <img
                                src={each?.image}
                                className="popularpost-image-container"
                                alt="popularposts not found"
                            />
                        </figure>
                        <div className='popularpost-title-container'>
                            <h2>{each?.title}</h2>
                        </div>

                    </div>

                ))

                }
            </div>
        </>
    )
}

export default Popularpost