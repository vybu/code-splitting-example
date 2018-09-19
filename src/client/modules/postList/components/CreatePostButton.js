import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './CreatePostButton.css';

const CreatePostButton = ({ history }) => (
  <button type="button" className="CreatePostButton" onClick={() => history.push('/create-post')}>
    Create post
  </button>
);

CreatePostButton.propTypes = {
  history: PropTypes.object,
};

export default withRouter(CreatePostButton);
