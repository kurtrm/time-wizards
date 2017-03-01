'use strict';

var nameInputEl = document.getElementById('name-form');
nameInputEl.addEventListener('submit', handleSubmit);

//This section adds text data for the player
var player = new Player ('', 'images/player.png');

// Function to handle name submit events, brings user to next page
function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  player.name = event.target.inputName.value;
  // document.location.href = 'introduction.html';
  saveToLocalStorage();
  document.location.href = 'introduction.html';
}
// functions to save and load from local storage
function saveToLocalStorage () {
  localStorage.setItem('player', JSON.stringify(player));

  console.log(JSON.stringify(player));
}
