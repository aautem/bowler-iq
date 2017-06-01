const initialState = {
  games: [],
  game: {
    id: null,
    date: null,
    score: null,
    scoreSheet: {
      frame1: {},
      frame2: {},
      frame3: {},
      frame4: {},
      frame5: {},
      frame6: {},
      frame7: {},
      frame8: {},
      frame9: {},
      frame10: {},
    }
  }
};

export default function reducer(state = initialState, action) {
  // action.payload = complete game object
  if (action.type === 'LOAD_GAME') {
    return {
      ...state,
      game: action.payload
    };
  }
  // if no match above
  return {...state};
};
