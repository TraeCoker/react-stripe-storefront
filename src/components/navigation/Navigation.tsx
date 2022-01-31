import { Link } from 'react-router-dom';

export const Navigation = (): JSX.Element => {
  return(
      <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

          <label htmlFor="navi-toggle" className="navitgation__button">
              <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
              <ul className="navigation__nav">
                  <li className="navigation__item" ><Link to="/" className="navigation__link">Home</Link></li>
                  <li className="navigation__item"><Link to="/courses" className="navigation__link">Courses</Link></li>
                  <li className="navigation__item"><Link to="/subscriptions" className="navigation__link">Subscriptions</Link></li>
                  <li className="navigation__item"><Link to="/dashboard" className="navigation__link">Dashboard</Link></li>
              </ul>
          </nav>
      </div>
  )
};
