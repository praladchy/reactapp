import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../../src/Page/Home/Home";
import Contacts from "../../src/Page/contact/Contacts";
import Politics from "../Page/Politics/Politics";
import Bussiness from "../Page/Bussiness/Bussiness";
import Navigations from "../Component/Navigation/Navigation";

const Routing = () => {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />

        <Route path="/Politics" element={<Politics />} />

        <Route path="/Bussiness" element={<Bussiness />} />
      </Routes>
    </>
  );
};

export default Routing;
