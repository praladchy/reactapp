import React from 'react'
// import AA from "../../photos/AA.jpg";
import { LeftEditordata } from '../../Dummydata/LeftEditordata';
import "./LeftEditor.css";

const Editor = () => {
  return (
    <div>
      <div className='left-side-main-container'>

        {LeftEditordata.map((each,index) => (
        <div className='right-side-container' >
          <figure>
          <img src={each?.image}
            alt="imgunload"
            className='img-container'
          />
          </figure>
          {/* <div className='title-container'> */}
          <div className='description-container'>
            <h3>{each?.title}</h3>
            <p>{each?.description}</p>
          </div>
          {/* </div> */}
        </div>
         ))} 



      </div>
    </div>
  )
}

export default Editor