import React, { useState, useEffect } from 'react';
import { fetchFromAPI } from '../helpers/helpers';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useUser, AuthCheck} from 'reactfire';
import { Stripe, SetupIntent, StripeCardElement, PaymentMethod} from '@stripe/stripe-js';
import { SignIn } from './SignIn';
import { SignOut } from './SignOut';





export const SaveCard: React.FC = () => {
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
            <div className="dashboard__save-card--attach">
              <button className="btn btn--secondary"
                onClick={createSetupIntent}
                hidden={setupIntent? true : false}>
                Attach New Credit Card 
              </button>
            </div>

            <div className="dashboard__save-card--form">
              <form onSubmit={handleSubmit}  hidden={setupIntent? false : true}>
                <CardElement />
                  <button className="btn btn--secondary"
                  type='submit'>
                  Attach
                  </button>
              </form>
            </div>
            

            <div className="dashboard__save-card--payments">
              <hr/>
              <h3>Retrieve all Payment Resources</h3>
              <select>
                {wallet.map((paymentSource: PaymentMethod) => (
                  <CreditCard key={paymentSource.id} card={paymentSource.card!} />
                ))}
              </select>
            </div>
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