import React, { useState, useEffect} from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { useUser} from 'reactfire';

export const ManageSubscriptions: React.FC = () => {
  const {data: user} = useUser();
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
    alert('subscription canceled');
    await getSubscriptions();
    setLoading(false);
  };
  console.log(subscriptions)

  return (
    <>
        <h3>Manage Current Subscriptions</h3>
        <div>
          <div className="dashboard__manage-subs--text">
            <h2 className="u-margin-bottom-small">{subscriptions.length < 1 && 'No current subscriptions'}</h2>
            {subscriptions.map((sub) => (
              <div key={sub.id}>
                <h2 className="u-margin-bottom-small">{sub.plan.id === 'price_1KQJYNEFpPobBmTkJRfRGC1S' && 'Monthly Membership Plan'}</h2>
                <h2 className="u-margin-bottom-small">{sub.plan.id === 'price_1KQJYNEFpPobBmTkmN3X2w5F' && 'PRO Membership Plan'}</h2>

                <h3>Next payment of ${sub.plan.amount_decimal.substring(0, sub.plan.amount_decimal.length - 2)} due:{' '}</h3>
                <p className="u-margin-bottom-small">{new Date(sub.current_period_end * 1000).toUTCString()}</p>

                <button className="btn btn--secondary"
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