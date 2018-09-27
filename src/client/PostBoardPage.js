import React from 'react';
import PostList from './modules/postList';
import PageContainer from './common/components/PageContainer';

const PostBoardPage = () => (
  <PageContainer title="Post Board">
    <PostList />
  </PageContainer>
);

export default PostBoardPage;
