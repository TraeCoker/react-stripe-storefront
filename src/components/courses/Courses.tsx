import { Checkout } from "../checkout/Checkout";
import { auth } from "../helpers/firebase";
import usePremiumStatus from "../../stripe/usePremiumStatus";


export const Courses: React.FC = ()=> {
  const user = auth.currentUser!
    const userIsPremium = usePremiumStatus(user)
  
  return( 
    <div>
    </div>
  )

};
