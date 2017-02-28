'use strict';

//TEST ARRAY: var results = ['Kurt', 75, false];

var currentPlayer = JSON.parse(localStorage.currentPlayer);

var winMessage = 'Great job. You have won the game!';
var lossMessage = 'Oh no, you lost. Time is screwed up.';

var headerEl = document.getElementById('results');

//If the player wins, the Player.score attribute is set to true. It is false otherwise.
if (currentPlayer.win === true) {
  headerEl.innerHTML = winMessage;
} else {
  headerEl.innerHTML = lossMessage;
}

var scoreEl = document.getElementById('score-number');
scoreEl.innerHTML = 'Score: ' + currentPlayer.score;
