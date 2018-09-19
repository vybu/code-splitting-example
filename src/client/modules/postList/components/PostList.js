import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostsIds } from '../postList.selectors';
import PostListItem from './PostListItem';
import CreatePostButton from './CreatePostButton';

const PostList = ({ postsIds }) => (
  <div>
    <div style={{ padding: '20px 0' }}>
      <CreatePostButton />
    </div>
    {postsIds.map(id => <PostListItem key={id} postId={id} />)}
  </div>
);

PostList.propTypes = {
  postsIds: PropTypes.array,
};

const mapStateToProps = state => ({
  postsIds: getPostsIds(state),
});

export default connect(mapStateToProps)(PostList);
