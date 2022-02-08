import firebase from 'firebase/compat/app';
import { auth, db } from '../helpers/firebase'
import GoogleButton from 'react-google-button';



export function SignIn() {
    const signIn = async () => {
      const credential: any = await auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      const { uid, email} = credential.user;
      db.collection('users').doc(uid).set({ email, uid }, { merge: true });
    };
  
    return (
      <div className="google-btn">
        <GoogleButton onClick={signIn} >
          Sign in with Google
        </GoogleButton>
      </div>
    )
  };