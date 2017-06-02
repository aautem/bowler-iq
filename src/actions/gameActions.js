export function newGame() {
  let newGameTemplate = {
    id: null, // id for current game in database
    date: null, // date the game was played
    score: null, // final score for game
    frames: [ // array of frame objects (frameNumber = index + 1)
      {
        frame: 1, // frameNumber
        ball1: { // first ball of frame
          disabled: false, // score selector disabled in DOM
          score: null // pins knocked down by this ball
        },
        ball2: { // second ball of frame
          disabled: true,
          score: null
        },
        frameScore: null, // total score for frame (for graphing purposes)
        totalScore: null // current total score in game (cumulative)
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
  return {
    type: 'NEW_GAME',
    payload: newGameTemplate
  }
};

// UPDATE WITH NEW GAME OBJECT FORMAT
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

export function bowlFirstBall(scorecard, frameNumber, score) {
  // scorecard = frames array from game object
  // frameNumber = number
  // score = string (convert to number below)
  score = parseInt(score);

  // update score on scorecard and disable first ball
  scorecard[frameNumber - 1].ball1.score = score;
  scorecard[frameNumber - 1].ball1.disabled = true;

  // handle strike
  if (score === 10) {
    console.log('Strike!');
    scorecard[frameNumber - 1].strike = true;
    scorecard[frameNumber].ball1.disabled = false;
  }

  // handle everything else
  if (score < 10) {
    console.log('Good shot.');
    let pinsLeft = 10 - score;
    let ball2Select = document.getElementById('two-' + frameNumber);

    for (let i = 1; i <= pinsLeft; i ++) {
      if (i === pinsLeft) { // last pin
        ball2Select.appendChild(createOption(i, '/'));
      } else {
        ball2Select.appendChild(createOption(i, i));
      }
    }
    // activate next ball in frame
    scorecard[frameNumber - 1].ball2.disabled = false;
  }

  // score game in case updates from spare or strike
  scorecard = scoreGame(scorecard);

  return {
    type: 'BOWL_FIRST_BALL',
    payload: scorecard
  }
};

export function bowlSecondBall(scorecard, frameNumber, score) {
  // scorecard = frames array from game object
  // frameNumber = number
  // score = string (convert to number below)
  score = parseInt(score);

  // update score on scorecard and disable second ball
  scorecard[frameNumber - 1].ball2.score = score;
  scorecard[frameNumber - 1].ball2.disabled = true;

  if (scorecard[frameNumber - 1].ball1.score + score === 10) {
    scorecard[frameNumber - 1].spare = true;
  }

  scorecard = scoreGame(scorecard);

  // activate first ball, next frame
  scorecard[frameNumber].ball1.disabled = false;

  return {
    type: 'BOWL_SECOND_BALL',
    payload: scorecard
  }
};


// helper function to create option elements to append to select elements
// MOVE TO HELPERS FILE
function createOption(value, text) {
  let option = document.createElement('option');
  option.value = '' + value;
  option.innerHTML = '' + text;
  return option;
};


// helper function to tally scores in scorecard
// MOVE TO HELPERS FILE
// score frame: loop over scorecard and recalculate each frame
// frames with strikes and spares require future frames for scoring
function scoreGame(scorecard) {
  // iterate through frame 8 (after 8, scoring gets trickier)
  for (let i = 0; i <= 7; i ++) {
    // calculate frame score
    // CHECK FRAME BOWLED
    if (scorecard[i].ball1.score !== null) {
      let frameScore = null;
      // IF FRAME STRIKE, ADD TWO BALLS
      if (scorecard[i].strike) {
        // CHECK NEXT FRAME BOWLED
        if (scorecard[i + 1].ball1.score !== null) {
          // IF FRAME STRIKE, ADD NEXT FRAME, BALL1
          if (scorecard[i + 1].strike) {
            // CHECK NEXT-NEXT FRAME BOWLED
            if (scorecard[i + 2].ball1.score !== null) {
              frameScore = 20 + scorecard[i + 2].ball1.score;
            }
          } else {
            if (scorecard[i + 1].ball2.score !== null) {
              frameScore = 10;
              frameScore += scorecard[i + 1].ball1.score;
              frameScore += scorecard[i + 1].ball2.score;
            }
          }
        }
      }
      // IF FRAME SPARE, ADD NEXT BALL
      if (scorecard[i].spare) {
        // CHECK NEXT BALL BOWLED
        if (scorecard[i + 1].ball1.score !== null) {
          frameScore = 10 + scorecard[i + 1].ball1.score;
        }
      } else {
        // ADD FRAME'S TWO BALLS TOGETHER IF BOTH BOWLED
        if (scorecard[i].ball2.score !== null) {
          frameScore = scorecard[i].ball1.score + scorecard[i].ball2.score;
        }
      }

      scorecard[i].frameScore = frameScore;

      // calculate current total score (cumulative)
      // totalScore = lastFrame total score + current frameScore
      if (scorecard[i].frameScore !== null) {
        if (i === 0) {
          scorecard[i].totalScore = scorecard[i].frameScore;
        } else {
          scorecard[i].totalScore = scorecard[i - 1].totalScore + scorecard[i].frameScore;
        }
      }
    }
  }
  return scorecard;
};


// function bowlingScore(scoreSheet){
//   var convertedScoresheet = convertScoreSheet(scoreSheet);
//   var totalScore = 0;
//   var frame = 1;
//   // ITERATE THROUGH FRAME 8
//   while(frame < 9){
//     var frameScore = 0;
//     // IF FRAME IS A STRIKE
//     if(convertedScoresheet[frame][0] === 10){
//       frameScore += 10;
//       // ADD NEXT TWO BALLS
//       // IF BALL ONE IS A STRIKE
//       if(convertedScoresheet[frame + 1][0] === 10){
//         frameScore += (10 + convertedScoresheet[frame + 2][0]);
//       } else {
//         frameScore += (convertedScoresheet[frame + 1][0] + convertedScoresheet[frame + 1][1]);
//       }
//     }
//     // IF FRAME IS A SPARE
//     else if(convertedScoresheet[frame][0] !== 10 && (convertedScoresheet[frame][0] + convertedScoresheet[frame][1] === 10)){
//       frameScore += (10 + convertedScoresheet[frame + 1][0]);
//     }
//     else {
//       frameScore += (convertedScoresheet[frame][0] + convertedScoresheet[frame][1]);
//     }
//     totalScore += frameScore;
//     frame ++;
//   }
//   // HANDLE FRAME 9
//   while(frame === 9){
//     // IF FRAME IS A STRIKE
//     if(convertedScoresheet[frame][0] === 10){
//       totalScore += (10 + convertedScoresheet[frame + 1][0] + convertedScoresheet[frame + 1][1]);
//     }
//     // IF FRAME IS A SPARE
//     else if(convertedScoresheet[frame][0] !== 10 && (convertedScoresheet[frame][0] + convertedScoresheet[frame][1] === 10)){
//       totalScore += (10 + convertedScoresheet[frame + 1][0]);
//     }
//     else {
//       totalScore += (convertedScoresheet[frame][0] + convertedScoresheet[frame][1]);
//     }
//     frame ++;
//   }
//   // HANDLE 10TH FRAME
//   while(frame === 10){
//     for(var i = 0; i < convertedScoresheet[frame].length; i++){
//       totalScore += convertedScoresheet[frame][i];
//     }
//     frame ++;
//   }
//   return totalScore;
// }

