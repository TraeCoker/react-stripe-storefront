import React, { useState, useEffect, Suspense } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser, AuthCheck} from 'reactfire';
import firebase from 'firebase/compat/app';
import { auth, db } from '../helpers/firebase'
import { Stripe, SetupIntent, StripeCardElement, PaymentMethod} from '@stripe/stripe-js';
import GoogleButton from 'react-google-button';



export function SignIn() {
  const signIn = async () => {
    const credential: any = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    const { uid, email} = credential.user;
    db.collection('users').doc(uid).set({ email }, { merge: true });
  };

  return (
    <div className="google-btn">
      <GoogleButton onClick={signIn} >
        Sign in with Google
      </GoogleButton>
    </div>
  )
};

export function SignOut(props: any){
  return props.user && (

    <button onClick={() => auth.signOut()}>
      Sign Out User {props.user.uid}
    </button>
  )
}


function SaveCard(): JSX.Element {
  const stripe: Stripe | null = useStripe();
  const elements = useElements();
  const user = useUser();
  const currentUser = auth.currentUser

  const [setupIntent, setSetupIntent] = useState<SetupIntent | null>();
  const [wallet, setWallet] = useState<PaymentMethod[] | []>([]);



  useEffect(() => {
    getWallet();
  }, [user]);



  const createSetupIntent = async () => {
    const si: SetupIntent = await fetchFromAPI('wallet')
    setSetupIntent(si);
  };



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cardElement = elements?.getElement(CardElement)

    const {
      setupIntent: updatedSetupIntent,
      error,
    } = await stripe!.confirmCardSetup(setupIntent?.client_secret!, {
      payment_method: {card: cardElement as StripeCardElement},
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

  console.log(currentUser?.displayName)
  return (
    <>
      <section className="section-dashboard">
        <AuthCheck fallback={<SignIn />}>
          <h1>Welcome back {currentUser?.displayName} </h1>
          <div>
            <button
              onClick={createSetupIntent}
              hidden={setupIntent? true : false}>
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
              {wallet.map((paymentSource: PaymentMethod) => (
                <CreditCard key={paymentSource.id} card={paymentSource.card!} />
              ))}
            </select>
          </div>
            <div>
              <SignOut user={user}/>
            </div>
        </AuthCheck>
      </section>
      

    </>
  )
}

type Card = {
  /**ID returned by PaymentMethod */
  key: string,
  /**Object for individual credit cards */
  card: PaymentMethod.Card
};


function CreditCard(props: Card) {
  const { last4, brand, exp_month, exp_year } = props.card
  return(
    <option>
      {brand} **** **** **** {last4} expires {exp_month}/{exp_year}
    </option>
  )
};

export const Dashboard = (): JSX.Element => {
    return( 
        <section className="section-dashboard">
          <h1>Dashboard</h1>
          <Suspense fallback={'loading user'}>
            <SaveCard/>
          </Suspense>
        </section>
      );
};
