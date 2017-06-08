const initialState = {
  view: 'home'
};

export default function reducer(state = initialState, action) {
  // action.payload = page
  if (action.type === 'CHANGE_PAGE') {
    return {...state, view: action.payload};
  }
  // if no match above
  return state;
};
