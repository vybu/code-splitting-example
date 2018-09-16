import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { getPostById } from '../postList.selectors';
import './PostListItem.css';

const PostListItem = ({ authorName, body, date }) => (
  <article className="PostListItem">
    <div className="PostListItem-header">
      {authorName || 'Anonymous'}
      <span>&nbsp;&nbsp;&#183;&nbsp;&nbsp;</span>
      {moment(date).fromNow()}
    </div>
    <div className="PostListItem-body" dangerouslySetInnerHTML={{ __html: body }} />
  </article>
);

PostListItem.propTypes = {
  authorName: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => ({
  ...getPostById(state, ownProps.postId),
});

export default connect(mapStateToProps)(PostListItem);
