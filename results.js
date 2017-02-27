'use strict';

//TEST ARRAY: var results = ['Kurt', 75, false];

var results = JSON.parse(localStorage.savedPlayerData);


//results will contain [name, score, boolean (win = true, lose = false)]

var winMessage = 'Great job. You have won the game!';
var lossMessage = 'Oh no, you lost. Time is screwed up.';

var headerEl = document.getElementById('results');

if (/* results[index].boolean */ === true) {
  headerEl.innerHTML = winMessage;
} else {
  headerEl.innerHTML = lossMessage;
}

var scoreEl = document.getElementById('score-number');
scoreEl.innerHTML = 'Score: ' + /*results[index].score*/;
