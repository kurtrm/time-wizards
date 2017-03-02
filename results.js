'use strict';

//Stretch goal: display high scores of other players stored in local storage.

//If there isn't an array called recordedPlayers, make an empty array in local storage.
//Append the current player to the end of the recordedPlayers array.
//If recordedPlayers.length < 5, display all of the available results.
//Else if there's more than 5, display only the top 5 results.
//Display them from highest score to lowest score.
  // localStorage.recordedPlayers += localStorage.currentPlayer;
  // recordedPlayers += currentPlayer;
  // JSON.stringify(localStorage.recordedPlayers);

var player = JSON.parse(localStorage.getItem('player'));

var winMessage = 'The robot is reassembled, and time has returned back to normal. Great job!';
var lossMessage = 'You couldn\'t put the robot back together, and time is screwed up forever. Lucky for us, you can try again!';

var headerEl = document.getElementById('results');
var imgEl = document.getElementById('results-image');

//If the player wins, the Player.score attribute is set to true. It is false otherwise.
if (player.win === true) {
  headerEl.innerHTML = winMessage;
  imgEl.src = 'images/Cartoon-Robot-300px.png';
  imgEl.alt = 'Fixed Robot';
} else {
  headerEl.innerHTML = lossMessage;
}

var scoreEl = document.getElementById('score-number');
scoreEl.innerHTML = 'Score: ' + player.score;
