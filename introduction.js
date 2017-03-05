'use strict';

// Get the player's name for the introduction.
var playerName;
function loadLocalStorage(){
  playerName = JSON.parse(localStorage.getItem('player')).name;
}
loadLocalStorage();

// The element that the introduction text goes.
var robotIntroductionEl = document.getElementById('robot-introduction');

robotIntroductionEl.textContent = 'Hello ' + playerName + '! ' + 'My name is JSON Timeberlake and a discrepancy in my Subatomic-Unilateral-Concatenating-Kaleidoscope (S.U.C.K.) has ruptured the delicate balance of space time. Time warp holes have been created and parts of my S.U.C.K have been scattered. You must travel through these warp holes and retrieve my missing parts and fix my S.U.C.K.';

//this block hides the div containers until user clicks on buttons
var topBox = document.getElementById('button-one');
var hideCenterBox = document.getElementById('center-box');
hideCenterBox.style.visibility = 'hidden';
var hideBottomBox = document.getElementById('bottom-box');
hideBottomBox.style.visibility = 'hidden';
var hideFooter = document.getElementById('footer');
hideFooter.style.visibility = 'hidden';

addEventListeners();

//this function adds event click listeners to the buttons
function addEventListeners () {
  var showCenterBox = document.getElementById('button-two');
  var showBottomBox = document.getElementById('button-three');
  var showFooter = document.getElementById('button-footer');
  topBox.addEventListener('click', handleClickTopBox);
  showCenterBox.addEventListener('click', handleClickCenterBox);
  showBottomBox.addEventListener('click', handleClickBottomBox);
  showFooter.addEventListener('click', handleClickFooter);
  console.log('event listeners added');
}

//the next four functions handle clicks for each individual button
function handleClickTopBox (event) {
  event.preventDefault();
  event.stopPropagation();
  hideCenterBox.style.visibility = 'visible';
  console.log('click');
}

function handleClickCenterBox (event) {
  event.preventDefault();
  event.stopPropagation();
  hideBottomBox.style.visibility = 'visible';
}

function handleClickBottomBox (event) {
  event.preventDefault();
  event.stopPropagation();
  hideFooter.style.visibility = 'visible';
}

function handleClickFooter (event) {
  event.preventDefault();
  event.stopPropagation();
  document.location.href = 'select-level.html';
}
