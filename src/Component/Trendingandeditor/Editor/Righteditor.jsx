import React from 'react'
import { Righteditordata } from '../../Dummydata/Righteditordata'
import './RightEditor.css'

const Righteditor = () => {
  return (
    
      <div className='right-side-main-container'>
                    {Righteditordata.map((each, index) => (
                        <div className='right-container' key={index}>
                            <figure>
                                <img
                                    src={each?.url}
                                    alt="imgload"
                                    className='imag-container'
                                />
                            </figure>
                            <div className='righteditor-description-container'>
                                <p>{each?.description}</p>

                            </div>
                        </div>


                    )
                    )
                    }
                </div>

  )
}

export default Righteditor