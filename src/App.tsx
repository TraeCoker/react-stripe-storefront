import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } /> 
      </Routes>
    </div>
  );
}

export default App;
