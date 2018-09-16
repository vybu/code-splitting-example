import React from 'react';
import PropTypes from 'prop-types';

const ChartTitle = ({ children }) => <h2 style={{ textAlign: 'center' }}>{children}</h2>;

ChartTitle.propTypes = {
  children: PropTypes.string,
};

export default ChartTitle;
