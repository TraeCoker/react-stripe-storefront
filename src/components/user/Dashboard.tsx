import React, { useState, useEffect, Suspense } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser, AuthCheck } from 'reactfire';
import firebase from 'firebase/compat/app';
import { auth, db } from '../helpers/firebase'

export const Dashboard = (): JSX.Element => {
  
    return( 
        <div>
          <h1>Dashboard</h1>
        </div>
      );
};
