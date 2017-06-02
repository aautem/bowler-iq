const initialState = {
  id: null,
  date: null,
  score: null,
  frames: [ // array of frame objects (frame = index + 1)
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]
};

export default function reducer(state = initialState, action) {
  // action.payload = complete game object
  if (action.type === 'LOAD_GAME') {
    return action.payload;
  }
  // if no match above
  return state;
};
