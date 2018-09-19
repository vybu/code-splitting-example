import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="Navigation">
    <NavLink className="Navigation-link" activeClassName="Navigation-linkActive" to="/" exact>
      board
    </NavLink>
    &nbsp;/&nbsp;
    <NavLink className="Navigation-link" activeClassName="Navigation-linkActive" to="/stats">
      stats
    </NavLink>
  </nav>
);

export default Navigation;
