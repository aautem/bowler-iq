// helper function to create option elements to append to select elements
function createOption(value, text) {
  let option = document.createElement('option');
  option.value = '' + value;
  option.innerHTML = '' + text;
  return option;
};

// helper function to append options to a select element
// selectId = string (ex. 'two-2')
// pinsLeft = number (10 for strike, other for spare)
// lastOption = string ('X' OR '/')
export function appendOptions(selectId, pinsLeft, lastOption) {
  let selectElement = document.getElementById(selectId);
  for (let i = 1; i <= pinsLeft; i ++) {
    if (i === pinsLeft) {
      selectElement.appendChild(createOption(i, lastOption));
    } else {
      selectElement.appendChild(createOption(i, i));
    }
  }
};

// helper function to tally scores in scorecard
// REFACTOR TO PULL OUT MORE HELPER FUNCTIONS (Frame 1 - 8, Frame 9 similar)
// score frame: loop over scorecard and recalculate each frame
// frames with strikes and spares require future frames for scoring
export function scoreGame(scorecard) {
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

  // FRAME 9
  if (scorecard[8].ball1.score !== null) {
    let frameScore = null;
    // IF FRAME STRIKE, ADD TWO BALLS
    if (scorecard[8].strike) {
      // CHECK FRAME 10 HAS TWO BALLS
      if (scorecard[9].ball1.score !== null && scorecard[9].ball2.score !== null) {
        frameScore = 10;
        frameScore += scorecard[9].ball1.score;
        frameScore += scorecard[9].ball2.score;
      }
    }
    // IF FRAME SPARE, ADD ONE BALL
    if (scorecard[8].spare) {
      // CHECK NEXT BALL BOWLED
      if (scorecard[9].ball1.score !== null) {
        frameScore = 10 + scorecard[9].ball1.score;
      }
    } else {
      // ADD FRAME'S TWO BALLS TOGETHER IF BOTH BOWLED
      if (scorecard[8].ball2.score !== null) {
        frameScore = scorecard[8].ball1.score + scorecard[8].ball2.score;
      }
    }

    scorecard[8].frameScore = frameScore;

    // calculate current total score (cumulative)
    // totalScore = lastFrame total score + current frameScore
    if (scorecard[8].frameScore !== null) {
      scorecard[8].totalScore = scorecard[7].totalScore + scorecard[8].frameScore;
    }
  }

  // FRAME 10
  if (scorecard[9].ball1.score !== null) {
    let frameScore = null;
    // IF FRAME STRIKE, NEED NEXT TWO BALLS TO SCORE
    if (scorecard[9].ball1.score === 10) {
      // CHECK BALLS TWO AND THREE BOWLED
      if (scorecard[9].ball2.score !== null && scorecard[9].ball3.score !== null) {
        frameScore = 10;
        frameScore += scorecard[9].ball2.score;
        frameScore += scorecard[9].ball3.score;
      }
    }
    if (scorecard[9].ball2.score !== null) {
      // IF FRAME STRIKE, ADD LAST BALL
      if (scorecard[9].ball2.score === 10) {
        // CHECK NEXT BALL BOWLED
        if (scorecard[9].ball3.score !== null) {
          frameScore = 20 + scorecard[9].ball3.score;
        }
      }
      // IF FRAME SPARE, ADD LAST BALL
      if (scorecard[9].ball1.score + scorecard[9].ball2.score === 10) {
        // CHECK NEXT BALL BOWLED
        if (scorecard[9].ball3.score !== null) {
          frameScore = 10 + scorecard[9].ball3.score;
        }
      }
      if (scorecard[9].ball1.score + scorecard[9].ball2.score < 10) {
        // ADD BALL ONE AND TWO
        frameScore = scorecard[9].ball1.score + scorecard[9].ball2.score;
      }
    }

    scorecard[9].frameScore = frameScore;

    // calculate current total score (cumulative)
    // totalScore = lastFrame total score + current frameScore
    if (scorecard[9].frameScore !== null) {
      scorecard[9].totalScore = scorecard[8].totalScore + scorecard[9].frameScore;
    }
  }
  return scorecard;
};
