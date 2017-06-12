export default function reducer(state = {}, action) {
  // action.payload = complete user object
  if (action.type === 'GET_USER') {
    return action.payload;
  }
  // if no match above
  return state;
};
