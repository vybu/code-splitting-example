import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Dialog.css';

const stopPropagation = (event) => event.stopPropagation();

const Dialog = ({ onOutsideClick, children }) => (
  <div onClick={onOutsideClick} className="Dialog">
    <div onClick={stopPropagation}>{children}</div>
  </div>
);

Dialog.propTypes = {
  onOutsideClick: PropTypes.func,
  children: PropTypes.node,
};

export default withRouter(Dialog);
