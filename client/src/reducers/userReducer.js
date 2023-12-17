export default function reducer(state = {}, action) {
  if (action.type === 'GET_USER') {
    return action.payload;
  }

  return state;
};
