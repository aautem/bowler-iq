import {getCurrentScore} from './../utilities/actionHelpers';

const initialState = {
  id: null,
  date: null,
  score: 0,
  strikes: 0,
  spares: 0,
  splits: 0,
  frames: [
    {
      frame: 1,
      ball1: {
        disabled: false,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 2,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 3,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 4,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 5,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 6,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 7,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 8,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 9,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    },
    {
      frame: 10,
      ball1: {
        disabled: true,
        score: null
      },
      ball2: {
        disabled: true,
        score: null
      },
      ball3: {
        disabled: true,
        score: null
      },
      frameScore: null,
      totalScore: null
    }
  ]
};

export default function reducer(state = initialState, action) {
  // action.payload = complete game object
  if (action.type === 'LOAD_GAME') {
    return action.payload;
  }
  // action.payload = complete new game object template with defaults
  if (action.type === 'NEW_GAME') {
    return action.payload;
  }
  // action.payload = complete game object
  if (action.type === 'BOWL_FIRST_BALL') {
    return {
      ...state,
      frames: action.payload.frames,
      score: getCurrentScore(action.payload.frames)
    };
  }
  // action.payload = complete game object
  if (action.type === 'BOWL_SECOND_BALL') {
    return {
      ...state,
      frames: action.payload.frames,
      score: getCurrentScore(action.payload.frames)
    };
  }
  // action.payload = complete game object
  if (action.type === 'BOWL_TENTH_FRAME') {
    return {
      ...state,
      frames: action.payload.frames,
      score: getCurrentScore(action.payload.frames)
    };
  }
  // action.payload = date
  if (action.type === 'ADD_DATE') {
    return {...state, date: action.payload}
  }
  // if no match above
  return state;
};
