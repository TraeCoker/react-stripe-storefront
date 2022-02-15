import { useState} from 'react';
import { useUser, AuthCheck } from 'reactfire';
import { SignIn } from '../dashboard/SignIn';
import Header from '../layout/Header';
import { HeaderData } from '../helpers/models';
import Footer from '../layout/Footer';
import { createCheckoutSession } from '../../stripe/createCheckoutSession';

function SubscribeToPlan() {
  const user = useUser();
  const [ plan, setPlan ] = useState<string>('');
  const [ loading, setLoading ] = useState(false);

  
  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    createCheckoutSession(user.data!.uid, plan)
  }

 
  return (
    <>
      
      <section className="section-sub" id="section-sub">
      <AuthCheck fallback={<SignIn />}>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Membership plans to fit your lifestyle
            </h2>
        </div>

        <div className="row">
            <div className="col-1-of-2">
              <div className="feature-box feature-box--sub">
                <h3 className="heading-tertiary u-margin-bottom-small">Monthly Membership</h3>
                <p className="paragraph">
                <ul>
                  <li>$25 a month</li>
                  <li>Access to all premium courses</li>
                  <li>Weekly digital meetups</li>
                </ul>
                </p>
                <button className="btn btn--secondary"
                  
                  onClick={() => setPlan('price_1KQJYNEFpPobBmTkJRfRGC1S')}>
                  Choose Monthly $25/m
                </button>
              </div>
                
                </div>
            <div className="col-1-of-2">
              <div className="feature-box feature-box--sub">
              <h3 className="heading-tertiary u-margin-bottom-small">Pro Membership</h3>
              <p className="paragraph">
                <ul>
                  <li>$50 Quarterly</li>
                  <li>Discounted rate</li>
                  <li>Monthly coaching sessions</li>
                </ul>
                </p>
                <button className="btn btn--secondary"
                  onClick={() => setPlan('price_1KQJYNEFpPobBmTkmN3X2w5F')}>
                  Choose Quarterly $50/q 
                </button>
              </div>
            
            </div>
        </div>
        <div className="row">
          <div className="feature-box feature-box--pay">
            <h3 className="heading-tertiary">Selected Plan: 
              <strong>{
                plan === 'price_1KQJYNEFpPobBmTkJRfRGC1S' && ' $25 monthly Subscription' || 
                plan === 'price_1KQJYNEFpPobBmTkmN3X2w5F' && ' $50 quarterly Subscription' }
              </strong>
            </h3>
          
          <form onSubmit={handleSubmit} hidden={!plan}>
              
            
            <div className="feature-box--pay-btn">
              <button className="btn btn--secondary" 
              type="submit" disabled={loading}>
              Subscribe and Pay
              </button>
            </div>
            
          </form>
        </div>
      </div>
      </AuthCheck>
    </section>
    </>
  );
};

export const Subscriptions: React.FC = () => {
  const headerData: HeaderData = {
    mainHeading: "commUNITY",
    subHeading: "join our thriving", 
    page: "sub",
}

    return( 
        <>
           <Header {...headerData}/>
           <main>   
              <SubscribeToPlan />
           </main>
           <Footer />
        </>
      )
};
