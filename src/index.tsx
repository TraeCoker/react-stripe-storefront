import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './index.css';
import App from './App';

export const stripePromise = loadStripe(
  'pk_test_51KGBNSEFpPobBmTkltOc1h9VYvzqjyMRayZIyRhSHTSDHfloP7D4JgA9FpcJRPAwiS7dTyMqGG6SKPiyLbMQvyeo00NazYii6J'
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
        <Router>
          <App />
        </Router>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);


