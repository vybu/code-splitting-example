import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { createPost } from '../../postList/postList.actions';
import { setBody, setAuthor } from '../postForm.actions';
import { getAuthorNameValue, getBodyValue } from '../postForm.selectors';
import './CreatePostForm.css';

class CreatePostForm extends Component {
  setAuthorName = (ev) => this.props.setAuthor(ev.target.value);
  setBodyValue = (value) => this.props.setBody(value);
  submit = () => {
    const { createPost, setAuthor, setBody, onSubmit } = this.props;
    setAuthor('');
    setBody('');
    createPost({ authorName: this.props.authorName, body: this.props.body });
    onSubmit();
  };

  render() {
    return (
      <form className="CreatePostForm" onClick={(e) => e.preventDefault()}>
        <input
          className="CreatePostForm-name"
          placeholder="Name (optional)"
          value={this.props.authorName}
          onChange={this.setAuthorName}
          type="text"
          id="authorName"
        />
        <ReactQuill
          className="CreatePostForm-rce"
          theme="snow"
          value={this.props.body}
          onChange={this.setBodyValue}
        />
        <button className="CreatePostForm-submit" onClick={this.submit}>
          Submit
        </button>
      </form>
    );
  }
}

CreatePostForm.propTypes = {
  createPost: PropTypes.func,
  setAuthor: PropTypes.func,
  setBody: PropTypes.func,
  authorName: PropTypes.string,
  body: PropTypes.string,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  authorName: getAuthorNameValue(state),
  body: getBodyValue(state),
});

const mapDispatchToProps = {
  createPost,
  setAuthor,
  setBody,
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(CreatePostForm);
