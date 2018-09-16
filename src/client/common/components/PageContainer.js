import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import  './PageContainer.css';

const PageContainer = ({ children, title }) => (
  <div className="PageContainer-outerContainer">
    <div className="PageContainer-innerContainer">
      <Navigation />
      <header className="PageContainer-header">
        <h1 className="PageContainer-title">{title}</h1>
      </header>
      {children}
    </div>
  </div>
);

PageContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default PageContainer;
