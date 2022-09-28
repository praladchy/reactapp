import React from 'react'
// import LeftEditor from "../Trendingandeditor/Editor/LeftEditor"
import "./Editorspick.css"
const Editorspick = ({ Editorspickdata = [] }) => {

  return (
    <>

      {
        Editorspickdata.map((each, index) => (
          <div className='Editorspick-container' key={index}>
            <div className='Editorspick-image-container'>
              <img src={each?.url} alt="righteditordata not work" />
            </div>
            <div className='Editorspick-description-container'>
              <p>{each?.description}</p>
            </div>

          </div>

        ))

      }

    </>
  )
}

export default Editorspick