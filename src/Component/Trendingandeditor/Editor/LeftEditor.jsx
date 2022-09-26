import React from 'react'
// import AA from "../../photos/AA.jpg";
import { LeftEditordata } from '../../Dummydata/LeftEditordata';
import { Righteditordata } from '../../Dummydata/Righteditordata';
import "./LeftEditor.css";

const Editor = () => {
  return (
    <div>
      <div className='left-side-main-container'>

        {LeftEditordata.map((each,index) => (
        <div className='left-side-container' key={index} >
          <figure>
          {/* <img src={each?.image}
            alt="imgunload"
            className='img-container'
          /> */}
           <img src={Righteditordata[0].url}
            alt="imgunload"
            className='img-container'
          />
          </figure>
          {/* <div className='title-container'> */}
          {/* <div className='left-side-description-container'>
            <h3>{each?.title}</h3>
            <p>{each?.description}</p>
          </div> */}
          <div className='left-side-description-container'>
            {/* <h3>{Righteditordata[0].title}</h3> */}
            <p>{Righteditordata[0].description}</p>
          </div>
          
          {/* </div> */}
        </div>
         ))} 



      </div>
    </div>
  )
}

export default Editor