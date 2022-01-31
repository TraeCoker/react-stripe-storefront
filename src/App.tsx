import React from 'react';
import { AuthProvider, useFirebaseApp  } from 'reactfire';
import { getAuth } from 'firebase/auth';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Courses } from './components/courses/Courses';
import { Subscriptions } from './components/subscriptions/Subscriptions';
import { Dashboard } from './components/user/Dashboard';
import { Navigation } from './components/navigation/Navigation';
import './css/style.css'
//import './App.css';




const App = (): JSX.Element => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/courses" element={ <Courses /> } />
        <Route path="/subscriptions" element={ <Subscriptions /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
