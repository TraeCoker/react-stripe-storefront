import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Courses } from './components/courses/Courses';
import { Subscriptions } from './components/subscriptions/Subscriptions';
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/courses" element={ <Courses /> } />
        <Route path="/subscriptions" element={ <Subscriptions /> } />
      </Routes>
    </div>
  );
}

export default App;
