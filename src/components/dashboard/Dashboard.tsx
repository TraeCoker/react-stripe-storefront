import React, { useState, useEffect, Suspense } from 'react';
import { auth, db } from '../helpers/firebase'
import Footer from '../layout/Footer';
import { SaveCard } from './SaveCard';


export function SignOut(props: any){
  return props.user && (

    <button className="btn btn--secondary" onClick={() => auth.signOut()}>
      Sign Out User {props.user.uid}
    </button>
  )
}




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
                  <SaveCard />
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
