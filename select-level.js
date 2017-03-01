'use-strict';

// This section adds text data to historical figure
var historicalFigureIntroEl = document.getElementById('historical-text');
historicalFigureIntroEl.textContent = (einstein.intro);
var historicalFigureImageEl = document.getElementById('historical-image');
historicalFigureImageEl.setAttribute('src', einstein.image[0]);

var historicalFigure = einstein;
var scene = japan;

function saveToLocalStorage () {
  localStorage.setItem('historicalFigure', JSON.stringify(historicalFigure));
  localStorage.setItem('scene', JSON.stringify(scene));
  console.log('Saved to local storage');
}

function loadFromLocalStorage() {
  player = JSON.parse(localStorage.getItem('player'));
  scene = JSON.parse(localStorage.getItem('scene'));
  historicalFigure = JSON.parse(localStorage.getItem('historicalFigure'));
  console.log('Loaded from local storage');
}

saveToLocalStorage();
loadFromLocalStorage();
