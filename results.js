'use strict';

//TEST ARRAY: var results = ['Kurt', 75, false];

localStorage.recordedPlayers += localStorage.currentPlayer;
var currentPlayer = JSON.parse(localStorage.currentPlayer);
recordedPlayers += currentPlayer;
JSON.stringify(localStorage.recordedPlayers);

var winMessage = 'The robot is reassembled, and time has returned back to normal. Great job!';
var lossMessage = 'You couldn\'t put the robot back together, and time is screwed up forever. Lucky for us, you can try again!';

var headerEl = document.getElementById('results');

//If the player wins, the Player.score attribute is set to true. It is false otherwise.
if (currentPlayer.win === true) {
  headerEl.innerHTML = winMessage;
} else {
  headerEl.innerHTML = lossMessage;
}

var scoreEl = document.getElementById('score-number');
scoreEl.innerHTML = 'Score: ' + currentPlayer.score;
