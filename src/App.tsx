import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Courses } from './components/courses/Courses';
import { Subscriptions } from './components/subscriptions/Subscriptions';
import { Dashboard } from './components/user/Dashboard';
import { Navbar } from './components/navigation/Navbar';
import './App.css';



const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/courses" element={ <Courses /> } />
        <Route path="/subscriptions" element={ <Subscriptions /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </div>
  );
}

export default App;
