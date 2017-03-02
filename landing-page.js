'use strict';

localStorage.clear();

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
    changeBatman();
    alert('CAN YOU READ? ENTER NAME!');
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

// function to change default logo to batman if user doesn't enter a name
function changeBatman () {
  var batmanEl = document.getElementById('border-outline');
  batmanEl.setAttribute('src', 'images/batman.jpg');
}

// Function to animate Batman NANANANANAN...but it didn't work =T

// window.onload = readyBatman();

// var batmanObject = null;
// var animate ;
//
// function readyBatman(){
//   batmanObject.document.getElementById('batman');
//   batmanObject.style.visibility = 'hidden';
//   batmanObject.style.position = 'relative';
//   batmanObject.style.left = '0px';
//
// }
// function moveRight(){
//   batmanObject.style.visibility = 'visible';
//   batmanObject.style.left = parseInt(batmanObject.style.left) + 10 + 'px';
//   animate = setTimeout(moveRight,50); // call moveRight in 20msec
// }
//
// function stop(){
//   clearTimeout(animate);
//   batmanObject.style.left = '0px';
// }

// var batmanEl = document.getElementById('batman');
// var batmanImage = document.createElement('img');
//
// batmanImage.setAttribute('src', 'images/batman.jpg');
// batmanEl.appendChild('batmanImage');
