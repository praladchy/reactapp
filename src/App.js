import React from 'react';
import Routing from './Routing/Routing';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
const App=()=> {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
