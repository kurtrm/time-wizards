'use strict';
//An array to store all user input names to local storage
var allNames = [];

// loadFromLocalStorage();

var nameInputEl = document.getElementById('name-form');
nameInputEl.addEventListener('submit', handleSubmit);

// Function to handle name submit events, brings user to next page
function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  var fullname = event.target.inputName.value;
  document.location.href = 'introduction.html';
  allNames.push(fullname);

  console.log(allNames);

  saveToLocalStorage();
}
// functions to save and load from local storage
function saveToLocalStorage (allNames) {
  localStorage.setItem('allNames', JSON.stringify(allNames));

  console.log('saved to local storage');
}

function loadFromLocalStorage () {
  if(localStorage.getItem('allNames') !== null) {
    allNames = JSON.parse(localStorage.getItem('allNames'));
  }
}
