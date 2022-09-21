import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from "../../src/Page/Home/Home";
import Contacts from "../../src/Page/contact/Contacts";
import Politics from "../Page/Politics/Politics";
import Bussiness from "../Page/Bussiness/Bussiness";




const Routing = () => {
  return (
    <div>

      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />

        <Route path='/Politics' element={<Politics />} />

        <Route path='/Bussiness' element={<Bussiness />} />
      </Routes>
    </div>

  )
}

export default Routing