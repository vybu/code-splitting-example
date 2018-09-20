import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CreatePostForm from './modules/postForm/components/CreatePostForm';
import Dialog from './common/components/Dialog';

const CreatePostDialog = ({ history }) => {
  const backToBoard = () => history.push('/');

  return (
    <Dialog onOutsideClick={backToBoard}>
      <CreatePostForm onSubmit={backToBoard} />
    </Dialog>
  );
};

CreatePostDialog.propTypes = {
  history: PropTypes.object,
};

export default withRouter(CreatePostDialog);
