//BOWLING SCORES
var lowScore = {1: [7, '/'],
        2: 'X',
        3: [6, 3],
        4: [3, 5],
        5: [7, 1],
        6: [9, 0],
        7: [7, 1],
        8: [3, 5],
        9: [5, 0],
        10: ['X', 7, 2]}; //113

var highScore= {1: 'X',
        2: 'X',
        3: 'X',
        4: [9, '/'],
        5: [9, '/'],
        6: 'X',
        7: 'X',
        8: [8, '/'],
        9: [8, '/'],
        10: [3, 6]}; //206

var newGame = {}; //0


//BOWL A FRAME AND ADD SCORE TO SHEET
function bowl(scoreSheet, frame, score){
  scoreSheet[frame] = score;
  return scoreSheet;
}


//CONVERT STRIKES & SPARES TO NUMERICAL VALUES FOR EASIER COMPUTATION
function convertScoreSheet(scoreSheet){
  var frame = 1;
  while(frame < 10){
    if(scoreSheet[frame] === undefined){
      scoreSheet[frame] = [0, 0];
    }
    if(scoreSheet[frame] === 'X'){
      scoreSheet[frame] = [10, 0];
    }
    if(scoreSheet[frame][1] === '/'){
      scoreSheet[frame][1] = (10 - scoreSheet[frame][0]);
    }
    if(scoreSheet[frame][0] === '-'){
      scoreSheet[frame][0] = 0;
    }
    if(scoreSheet[frame][1] === '-'){
      scoreSheet[frame][1] = 0;
    }
    frame++;
  }
  if(frame === 10){
    if(scoreSheet[frame] === undefined){
      scoreSheet[frame] = [0, 0];
    }
    for(var i=0; i<scoreSheet[frame].length; i++){
      if(scoreSheet[frame][i] === 'X'){
        scoreSheet[frame][i] = 10;
      }
      if(scoreSheet[frame][i] === '/'){
        scoreSheet[frame][i] = (10 - scoreSheet[frame][i - 1]);
      }
      if(scoreSheet[frame][i] === '-'){
        scoreSheet[frame][i] = 0;
      }
    }
  }
  return scoreSheet;
}


// COMPUTE CURRENT BOWLING SCORE OF GAME
function bowlingScore(scoreSheet){
  var convertedScoresheet = convertScoreSheet(scoreSheet);
  var totalScore = 0;
  var frame = 1;
  // ITERATE THROUGH FRAME 8
  while(frame < 9){
    var frameScore = 0;
    // IF FRAME IS A STRIKE
    if(convertedScoresheet[frame][0] === 10){
      frameScore += 10;
      // ADD NEXT TWO BALLS
      // IF BALL ONE IS A STRIKE
      if(convertedScoresheet[frame + 1][0] === 10){
        frameScore += (10 + convertedScoresheet[frame + 2][0]);
      } else {
        frameScore += (convertedScoresheet[frame + 1][0] + convertedScoresheet[frame + 1][1]);
      }
    }
    // IF FRAME IS A SPARE
    else if(convertedScoresheet[frame][0] !== 10 && (convertedScoresheet[frame][0] + convertedScoresheet[frame][1] === 10)){
      frameScore += (10 + convertedScoresheet[frame + 1][0]);
    }
    else {
      frameScore += (convertedScoresheet[frame][0] + convertedScoresheet[frame][1]);
    }
    totalScore += frameScore;
    frame ++;
  }
  // HANDLE FRAME 9
  while(frame === 9){
    // IF FRAME IS A STRIKE
    if(convertedScoresheet[frame][0] === 10){
      totalScore += (10 + convertedScoresheet[frame + 1][0] + convertedScoresheet[frame + 1][1]);
    }
    // IF FRAME IS A SPARE
    else if(convertedScoresheet[frame][0] !== 10 && (convertedScoresheet[frame][0] + convertedScoresheet[frame][1] === 10)){
      totalScore += (10 + convertedScoresheet[frame + 1][0]);
    }
    else {
      totalScore += (convertedScoresheet[frame][0] + convertedScoresheet[frame][1]);
    }
    frame ++;
  }
  // HANDLE 10TH FRAME
  while(frame === 10){
    for(var i = 0; i < convertedScoresheet[frame].length; i++){
      totalScore += convertedScoresheet[frame][i];
    }
    frame ++;
  }
  return totalScore;
}


// PERFECT GAME
bowl(newGame, 1, 'X');
bowl(newGame, 2, 'X');
bowl(newGame, 3, 'X');
bowl(newGame, 4, 'X');
bowl(newGame, 5, 'X');
bowl(newGame, 6, 'X');
bowl(newGame, 7, 'X');
bowl(newGame, 8, 'X');
bowl(newGame, 9, 'X');
bowl(newGame, 10, ['X', 'X', 'X']);


bowlingScore(newGame);

