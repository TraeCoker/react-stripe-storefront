import React from 'react';
import { fetchFromApi } from '../helpers/helpers';
import { useStripe } from '@stripe/react-stripe-js';

export const Courses = (): JSX.Element => {
  const stripe = useStripe();

  
  return( 
    <div>
      <h1>Courses</h1>
    </div>
  )

};
