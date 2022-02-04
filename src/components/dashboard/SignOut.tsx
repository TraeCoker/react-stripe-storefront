import { auth } from '../helpers/firebase'


export function SignOut(props: any){
    return props.user && (
  
      <button className="btn btn--secondary" onClick={() => auth.signOut()}>
        Sign Out User {props.user.uid}
      </button>
    )
  }