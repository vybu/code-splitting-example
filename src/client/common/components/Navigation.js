import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { DynamicStatsPage } from '../..';

const Navigation = () => (
  <nav className="Navigation">
    <NavLink className="Navigation-link" activeClassName="Navigation-linkActive" to="/" exact>
      board
    </NavLink>
    &nbsp;/&nbsp;
    <NavLink
      onMouseOver={() => DynamicStatsPage.load()}
      onFocus={() => DynamicStatsPage.load()}
      className="Navigation-link"
      activeClassName="Navigation-linkActive"
      to="/stats"
    >
      stats
    </NavLink>
  </nav>
);

export default Navigation;
