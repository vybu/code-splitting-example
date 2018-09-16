import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './CreatePostButton.css';

class CreatePostButton extends Component {
  render() {
    return (
      <button className="CreatePostButton" onClick={() => this.props.history.push('/create-post')}>
        Create post
      </button>
    );
  }
}

CreatePostButton.propTypes = {
  history: PropTypes.object,
};

export default withRouter(CreatePostButton);
