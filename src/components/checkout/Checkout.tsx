import React from 'react';
import { fetchFromApi } from '../helpers/helpers';
import { useStripe } from '@stripe/react-stripe-js';

export const Checkout = (): JSX.Element  => {
    const stripe = useStripe();

  return ( 
    <div>

    </div>
  )
};
