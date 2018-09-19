import React from 'react';
import PostList from './modules/postList/components/PostList';
import PageContainer from './common/components/PageContainer';

const PostBoardPage = () => (
  <PageContainer title="Post Board">
    <PostList />
  </PageContainer>
);

export default PostBoardPage;
