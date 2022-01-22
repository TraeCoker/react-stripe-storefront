import React, { useState, useEffect, Suspense } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser, AuthCheck } from 'reactfire';
import { db } from '../helpers/firebase';
import { SignIn, SignOut } from '../user/Dashboard';
import { DocumentData } from 'firebase/firestore';
import { User } from 'firebase/auth';

interface UserDataProps {
  user: User
};

function UserData(props: UserDataProps) {
  const [data, setData ] = useState<DocumentData | null>();

  useEffect(
    () => {
      const unsubscribe = db.collection('users').doc(props.user.uid).onSnapshot(doc => setData(doc.data()));
      return () => unsubscribe()
    },
    [props.user]
  )

  return (
    <pre>
      Stripe Customer ID: {data!.stripeCustomerId} <br />
      Subscriptions: {JSON.stringify(data!.activePlans || [])}
    </pre>
  );

}



export const Subscriptions = (): JSX.Element => {

    return( 
        <div>
          <h1>Subscriptions</h1>
        </div>
      )
};
