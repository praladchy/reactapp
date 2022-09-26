import React from "react";
// import {Righteditordata}from "../Dummydata/Righteditordata"
// import AA from "../photos/AA.jpg"
// import { Trendingdata } from '../Dummydata/Trendingdata'
import LeftEditor from "../../Component/Trendingandeditor/Editor/LeftEditor";
import Righteditor from "./Editor/Righteditor";
import Trending from "../../Component/Trendingandeditor/trendinting/Trending";
import "./Trendingandeditor.css";
const Trendingandeditor = () => {
  return (
    <>
      <div className="Trendingandeditor-main-container">
        <div className="Editor-container">
          <div className="Editor-heading-container">
            <h3>Editor's</h3>
          </div>
          <div className="Editor-bottom-container">
            <div className="editor-left">
              <LeftEditor />
            </div>
            <div className="editor-right">
              <Righteditor />
            </div>
          </div>
        </div>
        <div className="Trending-container">
          <div className="Trending-heading-container">
            <h3>Trending</h3>
          </div>
          <div className="Trending-heading-container">
            <Trending />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trendingandeditor;
