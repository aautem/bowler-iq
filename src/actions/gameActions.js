export function loadGame(id) {
  // get game from db with id and send object as payload
  let game = {
    id: 300,
    date: 'Thu Jun 1, 2017',
    score: 256,
    frames: [ // array of frame objects (frame = index + 1)
      {
        frame: 1,
        ball1: 4,
        ball2: 6,
        spare: true,
        score: 20
      },
      {
        frame: 2,
        ball1: 10,
        strike: true,
        score: 39 // 19 + 20 from previous frame (running score)
      },
      {
        frame: 3,
        ball1: 7,
        ball2: 2,
        split: true,
        score: 48
      },
      {
        frame: 4,
        ball1: 4,
        ball2: 6,
        spare: true,
        score: 62
      },
      {
        frame: 5,
        ball1: 4,
        ball2: 6,
        spare: true,
        score: 76
      },
      {
        frame: 6,
        ball1: 4,
        ball2: 6,
        spare: true,
        score: 90
      },
      {
        frame: 7,
        ball1: 4,
        ball2: 6,
        spare: true,
        score: 104
      },
      {
        frame: 8,
        ball1: 4,
        ball2: 6,
        spare: true,
        score: 118
      },
      {
        frame: 9,
        ball1: 4,
        ball2: 6,
        spare: true,
        score: 132
      },
      {
        frame: 10,
        ball1: 4,
        ball2: 6,
        spare: true,
        ball3: 10,
        score: 152
      }
    ]
  }
  return {
    type: 'LOAD_GAME',
    payload: game
  };
};

export function newGame() {
  let newGameTemplate = {
    id: null,
    date: null,
    score: null,
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
          disable: true,
          score: null
        },
        frameScore: null,
        totalScore: null
      }
    ]
  };
  return {
    type: 'NEW_GAME',
    payload: newGameTemplate
  }
};
