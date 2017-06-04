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
  // action.payload = frames array (game.frames) aka scorecard
  if (action.type === 'BOWL_FIRST_BALL') {
    let strikes = state.strikes;

    if (action.payload.strike) {
      strikes ++;
    }

    return {
      ...state,
      frames: action.payload.scorecard,
      strikes: strikes,
      score: getCurrentScore(action.payload.scorecard)
    };
  }
  // action.payload = frames array (game.frames) aka scorecard
  if (action.type === 'BOWL_SECOND_BALL') {
    let spares = state.spares;

    if (action.payload.spare) {
      spares ++;
    }

    return {
      ...state,
      frames: action.payload.scorecard,
      spares: spares,
      score: getCurrentScore(action.payload.scorecard)
    };
  }
  // action.payload = frames array (game.frames) aka scorecard
  if (action.type === 'BOWL_TENTH_FRAME') {
    let strikes = state.strikes;
    let spares = state.spares;

    if (action.payload.strike) {
      strikes ++;
    }
    if (action.payload.spare) {
      spares ++;
    }

    return {
      ...state,
      frames: action.payload.scorecard,
      strikes: strikes,
      spares: spares,
      score: getCurrentScore(action.payload.scorecard)
    };
  }
  // action.payload = date
  if (action.type === 'ADD_DATE') {
    return {...state, date: action.payload}
  }
  // if no match above
  return state;
};
