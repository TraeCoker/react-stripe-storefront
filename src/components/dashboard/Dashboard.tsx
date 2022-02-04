import React, { useState, useEffect, Suspense } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser, AuthCheck} from 'reactfire';
import firebase from 'firebase/compat/app';
import { auth, db } from '../helpers/firebase'
import { Stripe, SetupIntent, StripeCardElement, PaymentMethod} from '@stripe/stripe-js';
import GoogleButton from 'react-google-button';
import Footer from '../layout/Footer';



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

    <button className="btn btn--secondary" onClick={() => auth.signOut()}>
      Sign Out User {props.user.uid}
    </button>
  )
}


function SaveCard(): JSX.Element {
  const stripe: Stripe | null = useStripe();
  const elements = useElements();
  const user = useUser();
  

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

  
  return (
    <>
      <div className="dashboard__save-card">
        <AuthCheck fallback={<SignIn />}>
          <div>
            <button className="btn btn--secondary"
              onClick={createSetupIntent}
              hidden={setupIntent? true : false}>
              Attach New Credit Card 
            </button>
          </div>
          <hr/>

          <form onSubmit={handleSubmit}>

              <CardElement />
              <button className="btn btn--secondary"
                type='submit'>
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
      </div>
      

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
    const currentUser = auth.currentUser

    return( 
      <>
        <section className="section-dashboard">
          <div className="dashboard">
            <div className="row">
              
              <div className="col-1-of-3">
                <h1>Dashboard</h1>
                <div className="dahboard__navigation">
                  <ul>
                    <li>Manage Subscription</li>
                    <li>Attach New Credit Card</li>
                    <li>My Courses</li>
                    <li>Sign Out</li>
                  </ul>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="dashboard__utilities">
                  <Suspense fallback={'loading user'}>
                  <SaveCard/>
                  </Suspense>
                </div> 
              </div>
              <div className="col-1-of-3">
                <div className="dashboard__user">
                  <h1 className="heading-tertiary">Welcome back {currentUser?.displayName} </h1>
                  { currentUser && <img src={currentUser?.photoURL as string} alt="" />}
                </div>
              
              </div>

            </div>
           
          
          
          </div>
          
        </section>
        <Footer />
      </>
      );
};
