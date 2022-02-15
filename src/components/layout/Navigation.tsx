import {  useState, useEffect } from 'react';
import { useUser } from 'reactfire';
import { HashLink} from 'react-router-hash-link';
import isUserPremium from '../../stripe/isUserPremium';


export const Navigation: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [premiumStatus, setPremiumStatus ] = useState<boolean>(false);
    const user = useUser()

    useEffect(() => {
        if(user){
            const checkPremiumStatus = async function() {
                setPremiumStatus(await isUserPremium());
            };
            checkPremiumStatus();
        }
    }, [user]);


  return(
      <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" 
                 id="navi-toggle" checked={checked} onClick={() => setChecked(!checked)}  />

          <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
              <ul className="navigation__list">
                  <li className="navigation__item" ><HashLink to="/#top" className="navigation__link" onClick={() => setChecked(!checked)}><span>01</span>Home</HashLink></li>

                  {premiumStatus && <li className="navigation__item"><HashLink to="/courses" className="navigation__link" onClick={() => setChecked(!checked)}><span>02</span>Courses</HashLink></li>}
                  {!premiumStatus && <li className="navigation__item"><HashLink to="/#section-courses" className="navigation__link" onClick={() => setChecked(!checked)}><span>02</span>Courses</HashLink></li>}
        
                  <li className="navigation__item"><HashLink to="/subscriptions/#top" className="navigation__link" onClick={() => setChecked(!checked)}><span>03</span>Subscriptions</HashLink></li>
                  <li className="navigation__item"><HashLink to="/dashboard/#dashboard" className="navigation__link" onClick={() => setChecked(!checked)}><span>04</span>Dashboard</HashLink></li>
              </ul>
          </nav>
      </div>
  )
};
