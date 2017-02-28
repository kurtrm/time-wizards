'use strict';

var topBox = document.getElementById('button-one');
var hideCenterBox = document.getElementById('center-box');
hideCenterBox.style.visibility = 'hidden';
var hideBottomBox = document.getElementById('bottom-box');
hideBottomBox.style.visibility = 'hidden';
var hideFooter = document.getElementById('footer');
hideFooter.style.visibility = 'hidden';

addEventListeners();

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

function handleClickTopBox (click) {
  event.preventDefault();
  event.stopPropagation();
  hideCenterBox.style.visibility = 'visible';
  console.log('click');
}

function handleClickCenterBox (click) {
  event.preventDefault();
  event.stopPropagation();
  hideBottomBox.style.visibility = 'visible';
}

function handleClickBottomBox (click) {
  event.preventDefault();
  event.stopPropagation();
  hideFooter.style.visibility = 'visible';
}

function handleClickFooter (click) {
  event.preventDefault();
  event.stopPropagation();
  document.location.href = 'select-level.html';
}
