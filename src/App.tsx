import React from 'react';
import { AuthProvider, useFirebaseApp  } from 'reactfire';
import usePremiumStatus from './stripe/usePremiumStatus';
import { getAuth } from 'firebase/auth';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Courses } from './components/courses/Courses';
import { Subscriptions } from './components/subscriptions/Subscriptions';
import { Dashboard } from './components/dashboard/Dashboard';
import { Navigation } from './components/layout/Navigation';
import './css/style.css'
import { auth } from './components/helpers/firebase';





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
