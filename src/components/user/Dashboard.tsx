import React, { useState, useEffect, Suspense } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser, AuthCheck } from 'reactfire';
import firebase from 'firebase/compat/app';
import { auth, db } from '../helpers/firebase'
import { User} from 'firebase/auth';


export function SignIn() {
  const signIn = async () => {
    const credential: any = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    const { uid, email} = credential.user;
    db.collection('users').doc(uid).set({ email }, { merge: true });
  };

  return (
    <button onClick={signIn}>
      Sign in with Google
    </button>
  )
};

export function SignOut(props){
  return props.user && (

    <button onClick={() => auth.signOut()}>
      Sign Out User {props.user.uid}
    </button>
  )
}


function SaveCard(props): JSX.Element {
  const stripe = useStripe();
  const elements = useElements();
  const user = useUser();

  const [setupIntent, setSetupIntent] = useState();
  const [wallet, setWallet] = useState();

  useEffect(() => {
    getWallet();
  }, [user]);

  const createSetupIntent = async (event) => {
    const setupIntent = await fetchFromAPI('wallet')
    setSetupIntent(setupIntent);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements?.getElement(CardElement)

    const {
      setupIntent: updatedSetupIntent,
      error,
    } = await stripe?.confirmCardSetup(setupIntent.client_secret, {
      payment_method: {card: cardElement},
    });

    if (error) {
      alert(error.message);
      console.log(error);
    } else {
      setSetupIntent(updatedSetupIntent);
      await getWallet();
      alert('Success! Card added to your wallet');
    }
  };

  
  const getWallet = async () => {
    if (user){
      const paymentMethods = await fetchFromAPI('wallet', {method: 'GET' })
      setWallet(paymentMethods);
    }
  };

  return (
    <>

      <AuthCheck fallback={<SignIn />}>
        <div>
          <button
            onClick={createSetupIntent}
            hidden={setupIntent}>
            Attach New Credit Card 
          </button>
        </div>
        <hr/>

        <form onSubmit={handleSubmit}>

            <CardElement />
            <button type='submit'>
              Attach
            </button>
        </form>

        <div>
          <h3>Retrieve all Payment Resources</h3>
          <select>
            {wallet.map((paymentSource) => (
              <CreditCard key={paymentSource.id} card={paymentSource.card} />
            ))}
          </select>
        </div>
          <div>
            <SignOut user={user}/>
          </div>
      </AuthCheck>

    </>
  )
}

function CreditCard(props) {
  const { last4, brand, exp_month, exp_year } = props.card
  return(
    <option>
      {brand} **** **** **** {last4} expires {exp_month}/{exp_year}
    </option>
  )
}

export const Dashboard = (): JSX.Element => {
    return( 
        <div>
          <h1>Dashboard</h1>
          <Suspense fallback={'loading user'}>
            <SaveCard/>
          </Suspense>
        </div>
      );
};
