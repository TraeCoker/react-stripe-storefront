import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation = (): JSX.Element => {
    const [checked, setChecked] = useState(false);
    
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
                  <li className="navigation__item" ><Link to="/" className="navigation__link" onClick={() => setChecked(!checked)}><span>01</span>Home</Link></li>
                  <li className="navigation__item"><Link to="/courses" className="navigation__link" onClick={() => setChecked(!checked)}><span>02</span>Courses</Link></li>
                  <li className="navigation__item"><Link to="/subscriptions" className="navigation__link" onClick={() => setChecked(!checked)}><span>03</span>Subscriptions</Link></li>
                  <li className="navigation__item"><Link to="/dashboard" className="navigation__link" onClick={() => setChecked(!checked)}><span>04</span>Dashboard</Link></li>
              </ul>
          </nav>
      </div>
  )
};
