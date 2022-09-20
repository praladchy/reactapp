import React from "react";
import "./App.css";
import { Topnavigation } from "./Component/Navigation/topnavigation/Topnavigation";
import Button from "./Shared/buttonfield/Button";
import { Route, Routes } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import Home from "./Pages/Home/Home";
import Politics from "./Pages/Politics/Politics";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <>
      <Topnavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
