import React, { useState, Suspense } from 'react';
import { AuthCheck, useUser } from 'reactfire';
import { auth } from '../helpers/firebase'
import Footer from '../layout/Footer';
import { ManageSubscriptions } from './ManageSubscription';
import { SaveCard } from './SaveCard';
import { SignIn } from './SignIn';
import { SignOut } from './SignOut';

export const Dashboard: React.FC = () => {
    const userAuth = useUser();
    const currentUser = auth.currentUser
    const [toggleComponent, setToggleComponent] = useState(0);

    return( 
      <>
        <section className="section-dashboard" id="dashboard">
        <AuthCheck fallback={<SignIn />}>
          <div className="dashboard">
            <div className="row">

              <div className="col-1-of-3">
                <div className="dashboard__nav">
                  <h3 className="heading-tertairy dashboard__nav-heading">Dashboard</h3>
                  <ul>
                    <li onClick={() => setToggleComponent(1)}>Manage Subscription</li>
                    <li onClick={() => setToggleComponent(2)}>Attach New Credit Card</li>
                    <li onClick={() => setToggleComponent(3)}>My Courses</li>
                    <li onClick={() => setToggleComponent(4)}>Sign Out</li>
                  </ul>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="dashboard__utilities">
                  { toggleComponent === 1 ? <ManageSubscriptions /> : null }
                  { toggleComponent === 2 ? 
                  <Suspense fallback={'loading user'}>
                  <SaveCard />
                  </Suspense> : null }
                  { toggleComponent === 3 ? <h2>My Courses:</h2> : null }
                  { toggleComponent === 4 ? <SignOut user={userAuth}/> : null }
                </div> 
              </div>
              <div className="col-1-of-3">
                <div className="dashboard__user">
                  <h3 className="heading-tertairy dashboard__user-heading u-margin-bottom-small">Welcome back {currentUser?.displayName}</h3>
                  { currentUser && <img src={currentUser?.photoURL as string} alt="" className="dashboard__user-img"/>}
                </div>
              
              </div>

            </div>
           
          
          
          </div>
          </AuthCheck>
        </section>
        <Footer />
      </>
      );
};
