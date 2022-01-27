import { Link } from 'react-router-dom';

export const Navbar = (): JSX.Element => {
  return(
      <div>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/subscriptions">Subscriptions</Link>
              <Link to="/dashboard">Dashboard</Link>
          </nav>
      </div>
  )
};
