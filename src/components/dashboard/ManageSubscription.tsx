import React, { useState, useEffect} from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import {  CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser} from 'reactfire';
import { db } from '../helpers/firebase';
import { DocumentData } from 'firebase/firestore';
import { User } from 'firebase/auth';



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



export const ManageSubscriptions: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {data: user} = useUser();

  
  const [ plan, setPlan ] = useState<string | null>(null);
  const [ subscriptions, setSubscriptions ] = useState<any[]>([]);
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
  

  const userData = () => {
    if (typeof user !== null){
      return <UserData user={user} />
    }
  }

  return (
    <>
        <h3>Manage Current Subscriptions</h3>
         <div>
          {user && userData()}
        </div>

        <div>
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
    </>
  );
};