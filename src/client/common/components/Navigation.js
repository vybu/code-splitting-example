import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="Navigation">
    <Link to="/">board</Link>
    &nbsp;/&nbsp;
    <Link to="/stats">stats</Link>
  </nav>
);

export default Navigation;
