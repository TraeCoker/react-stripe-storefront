import { useState, useEffect, Suspense } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import {  CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser, AuthCheck } from 'reactfire';
import { db } from '../helpers/firebase';
import { SignIn, SignOut } from '../user/Dashboard';
import { DocumentData } from 'firebase/firestore';
import { User } from 'firebase/auth';
import Header from '../home/Header';
import { HeaderData } from '../helpers/models';

interface UserDataProps {
  user: User
};


function UserData(props: any): JSX.Element {
  const [data, setData ] = useState<DocumentData | null | undefined>(null);

  useEffect(
    () => {
      const unsubscribe = db.collection('users').doc(props.user.uid).onSnapshot(doc => setData(doc.data()));
      return () => unsubscribe()
    },
    [props.user]
  )

  return (
    <pre>
      Stripe Customer ID: {data && data!.stripeCustomerId} <br />
      Subscriptions: {JSON.stringify(data && data!.activePlans || [])}
    </pre>
  );

};



function SubscribeToPlan() {
  const stripe = useStripe();
  const elements = useElements();
  const user = useUser();

  const [ plan, setPlan ] = useState<string | null>(null);
  const [ subscriptions, setSubscriptions ] = useState< any[]>([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    getSubscriptions();
  }, [user]);

  const getSubscriptions = async (): Promise<void> => {
    if (user) {
      const subs = await fetchFromAPI('subscriptions', { method: 'GET' });
      setSubscriptions(subs);

    }
  };

  const cancel = async (id: string): Promise<void> => {
    setLoading(true);
    await fetchFromAPI('subscriptions/' + id, { method: 'PATCH' });
    alert('canceled');
    await getSubscriptions();
    setLoading(false);
  };
  
  const handleSubmit = async (event: any) => {
    setLoading(true);
    event.preventDefault();

    const cardElement = elements?.getElement(CardElement)!;


    const { paymentMethod, error } = await stripe!.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    };

    const subscription = await fetchFromAPI('subscriptions', {
      body: {
        plan, 
        payment_method: paymentMethod!.id,
      },
    });

    const { latest_invoice } = subscription;

    if (latest_invoice.payment_intent) {
      const { client_secret, status } = latest_invoice.payment_intent;

      if(status === 'requires_action') {
        const { error: confirmationError } = await stripe!.confirmCardPayment(
          client_secret
        );

        if (confirmationError) {
          console.error(confirmationError);
          alert('unable to confirm card');
          return
        }
      }

      alert('You are subscribed!');
      getSubscriptions();
    }

    setLoading(false);
    setPlan(null);
  };


  const userData = () => {
    if (typeof user !== null){
      return <UserData user={user} />
    }
  }

  return (
    <>
      <AuthCheck fallback={<SignIn />}>
        <div>
          {user && userData()}
        </div>

        <hr />

        <div>

          <button
            onClick={() => setPlan('price_1KHf5OEFpPobBmTk37NB2k5c')}>
            Choose Monthly $25/m
          </button>

          <button
            onClick={() => setPlan('price_1KHf5OEFpPobBmTkLpTaKnk4')}>
            Choose Quarterly $50/q 
          </button>

          <p>
            Selected Plan: <strong>{plan}</strong>
          </p>
        </div>
        <hr />

        <form onSubmit={handleSubmit} hidden={!plan}>

          <CardElement />
          <button type="submit" disabled={loading}>
            Subscribe and Pay
          </button>
        </form>

        <div>
          <h3>Manage Current Subscriptions</h3>
          <div>
            {subscriptions.map((sub) => (
              <div key={sub.id}>
                {sub.id}. Next payment of {sub.plan.amount} due{' '}
                {new Date(sub.current_period_end * 1000).toUTCString()}
                <button
                  onClick={() => cancel(sub.id)}
                  disabled={loading}>
                  Cancel
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SignOut user={user} />
        </div>
      </AuthCheck>
    </>
  );
};



export const Subscriptions: React.FC = () => {
  const headerData: HeaderData = {
    mainHeading: "commUNITY",
    subHeading: "join our inclusive", 
    image: "img/logo-3.png",
}

    return( 
        <div>
           <Header {...headerData}/>
          <h1>Subscriptions</h1>
          <SubscribeToPlan />
        </div>
      )
};
