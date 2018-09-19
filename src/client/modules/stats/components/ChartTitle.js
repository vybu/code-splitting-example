import React from 'react';
import PropTypes from 'prop-types';
import './ChartTitle.css';
const ChartTitle = ({ children }) => (
  <h2 className="ChartTitle">{children}</h2>
);

ChartTitle.propTypes = {
  children: PropTypes.string,
};

export default ChartTitle;
