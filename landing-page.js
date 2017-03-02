'use strict';

var nameInputEl = document.getElementById('name-form');
nameInputEl.addEventListener('submit', handleSubmit);

//This section adds text data for the player
var player = new Player ('', 'images/player.png');

// Function to handle name submit events, brings user to next page ONLY if they enter their name
function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  var validate = document.forms['name-form']['inputName'].value;
  if(validate == '') {
    alert('Enter your name dummy!');

    moveRight();
  }
  if(validate != '') {
    event.preventDefault();
    event.stopPropagation();
    player.name = event.target.inputName.value;
    saveToLocalStorage();
    document.location.href = 'introduction.html';
  }
}
// functions to save and load from local storage
function saveToLocalStorage () {
  localStorage.setItem('player', JSON.stringify(player));
  console.log(JSON.stringify(player));
}

// Function to animate Batman NANANANANAN

var batmanObject = null;
var animate ;

function readyBatman(){
  batmanObject = document.getElementById('batman');
  batmanObject.style.position = 'relative';
  batmanObject.style.left = '0px';

}
function moveRight(){
  batmanObject.style.left = parseInt(batmanObject.style.left) + 10 + 'px';
  animate = setTimeout(moveRight,1); // call moveRight in 20msec
}

function stop(){
  clearTimeout(animate);
  batmanObject.style.left = '0px';
}
window.onload = readyBatman();
// var batmanImage = document.createElement('img');
// batmanObject.appendChild(batmanImage);
// batmanObject.setAttribute = ('src', 'images/batman.jpg');
