export const SET_AUTHOR = 'SET_AUTHOR';
export const SET_BODY = 'SET_BODY';

export const setAuthor = value => ({
  type: SET_AUTHOR,
  payload: value,
});

export const setBody = value => ({
  type: SET_BODY,
  payload: value,
});
