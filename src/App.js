import React from "react";
import "./App.css";
import {Topnavigation} from "./Component/Navigation/topnavigation/Topnavigation";
import Button from "./Shared/buttonfield/Button";
import {BiSearchAlt2} from "react-icons/bi";
function App() {
  return (
    <div>
      <Topnavigation />
      <Button icon={<BiSearchAlt2 />} />
    </div>
  );
}

export default App;
