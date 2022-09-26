import React from 'react'
// import {Righteditordata}from "../Dummydata/Righteditordata"
// import AA from "../photos/AA.jpg"
// import { Trendingdata } from '../Dummydata/Trendingdata'
import LeftEditor from "../../Component/Trendingandeditor/Editor/LeftEditor"
import Righteditor from './Editor/Righteditor'
import Trending from "../../Component/Trendingandeditor/trendinting/Trending"
import './Trendingandeditor.css'
const Trendingandeditor = () => {
    return (<>
        <div className='Trendingandeditor-main-container'>
            <div className='Editor-container'>
                <div className='Editor-heading-container'>
                    <h3>Editor's</h3>
                </div>
                <div className='Editor-bottom-container'>
                    <LeftEditor />
                    
                    <Righteditor />
                    {/* <div className='left-side-main-container'>

                    {/* {LeftEditordata.map((each,index) => ( */}
                    {/* <div className='right-side-continer' > */}
                    {/* <figure> */}
                    {/* <img src={ AA}
                                alt="imgunload"
                                className='image-container'
                            /> */}
                    {/* </figure>
                        <div className='description-container'>
                            <p>lorem is not just a normal snippet—it’s actually a generator. Every time you expand it, it will generate a 30-words dummy text, splitted into a few sentences.</p>
                        </div> */}
                    {/* </div> */}
                    {/* ))} */}



                    {/* </div>  */}
                    {/* <div className='right-side-main-container'>
                    {Righteditordata.map((each, index) => (
                        <div className='right-container'>
                            <figure>
                                <img
                                    src={each?.url}
                                    alt="imgload"
                                    className='image-container'
                                />
                            </figure>
                            <div className='description-container'>
                                <p>{each?.description}</p>

                            </div>
                        </div>


                    )
                    )
                    }
                </div> */}
                </div>
            </div>
            <div className='Trending-container'>
                <div className='Trending-heading-container'>
                    <h3>Trending</h3>
                </div>
                <div className='Trending-heading-container'>
                    <Trending />
                    {/* {Trendingdata.map((each, index) => (
               <h5>{index}</h5>
               <div className='right-trending-container'>
                   <p>{each?.trending} </p>
               </div>
               ))} */}
                </div>v
            </div>
        </div>
    </>
    )
}

export default Trendingandeditor