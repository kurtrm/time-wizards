'use-strict';

// This section adds text data to historical figure
var historicalFigureIntroEl = document.getElementById('historical-text');
var historicalFigureImageEl = document.getElementById('historical-image');

var hiddenButtonContainerEl = document.getElementById('hidden-button-container');

var historicalFigure;
var scene = japan;

var remainingHistoricalFigures;
var remainingScenes;

var encountersPerGame = 1;
var encountersCompleted = 0;

// Box holding all portals.
var sceneContainer = document.getElementById('location-image-box');

// Pick a random value between 0 and array length.
function randomizeHistoricalFigure(min, max) {
  var min = 0; // Array values.
  var max = historicalFigures.length;
  return Math.floor(Math.random() * (max - min) + min);
  // return Math.random() * (max - min) + min;
}
console.log('Random number: ' + randomizeHistoricalFigure());

// CONSTRUCTOR: function HistoricalFigure (name, comments, intro, image)
// DATA ARRAY: var historicalFigures = [];
function selectHistoricalFigure() {
//randomizeHistoricalFigure
  historicalFigure = historicalFigures[randomizeHistoricalFigure()];
}

// Create all levels/scenes dynamically
function generateScenes() {

  for (var i = 0; i < locations.length; i++) {

    console.log('Created ' + locations[i].name);

    var sceneImage = document.createElement('img'); // Scene image.
    sceneImage.setAttribute('class', 'scene-image');
    sceneImage.setAttribute('id', 'scene-image-' + i);
    sceneImage.setAttribute('src', locations[i].image);

    var sceneImageLink = document.createElement('a'); // Image link.
    sceneImageLink.setAttribute('id', 'scene-portal-link-' + i);
    sceneImageLink.appendChild(sceneImage);
    sceneImageLink.setAttribute('href', 'combat.html');

    var sceneName = document.createElement('h3'); // Portal name.
    sceneName.setAttribute('class', 'scene-name');
    sceneName.setAttribute('id', 'scene-name-' + i);
    sceneName.textContent = locations[i].name;

    var sceneLink = document.createElement('a'); // Portal link.
    sceneLink.setAttribute('id', 'scene-link-' + i);
    sceneLink.appendChild(sceneName);
    sceneLink.setAttribute('href', 'combat.html');

    var scenePortal = document.createElement('div'); // Container.
    scenePortal.setAttribute('class', 'scene');
    scenePortal.setAttribute('id', 'scene-portal-' + i);
    scenePortal.appendChild(sceneImageLink);
    scenePortal.appendChild(sceneLink);

    sceneContainer.appendChild(scenePortal);
  }
}

function rememberHistoricalFigures() {

  // Pull random historicalFigure to localStorage if it doesn't already exist.
  if(localStorage.getItem('historicalFigure') === null){
    localStorage.setItem('historicalFigure', JSON.stringify(selectHistoricalFigure()));
  }

  if (localStorage.getItem('remainingHistoricalFigures') !== null) {
  // If present the player has played a previous encounter already.
  // Remove previous hist fig from remaining hist fig.
  // console.log(remainingHistoricalFigures);
    for (var i = 0; i < remainingHistoricalFigures.length; i++) {
      if (remainingHistoricalFigures[i].name === historicalFigure.name) {
        reaminaingHistoricalFigures.splice([i], 1); // Remove = (index, array[1])
        // Save entire figures array for first time.
        localStorage.setItem('remainingHistoricalFigures', remainingHistoricalFigures);
        break;
      }
    }
  } else {
  // False. 1st time page 3 loaded, this play-through.
  // Setting remaining hist fig to hist fig array.
    remainingHistoricalFigures = historicalFigures;
    localStorage.setItem('remainingHistoricalFigures', remainingHistoricalFigures);
  }
}

function saveToLocalStorage() {
  rememberHistoricalFigures();

  localStorage.setItem('scene', JSON.stringify(scene));

  // Add encountersCompleted to localStorage if it doesn't already exist.
  if(localStorage.getItem('encountersCompleted') === null){
    localStorage.setItem('encountersCompleted', 0);
  }

  // Add finalQuestionOfGame to localStorage if it doesn't already exist.
  if(localStorage.getItem('finalQuestionOfGame') === null){
    localStorage.setItem('finalQuestionOfGame', false);
  }
}

function loadFromLocalStorage() {
  player = JSON.parse(localStorage.getItem('player'));
  scene = JSON.parse(localStorage.getItem('scene'));
  historicalFigure = JSON.parse(localStorage.getItem('historicalFigure'));
  encountersCompleted = parseInt(localStorage.getItem('encountersCompleted'));

  if(localStorage.getItem('historicalFigure') !== null){
    // check current hist fig value, remove from possible next shown values.
    historicalFigure = JSON.parse(localStorage.getItem('historicalFigure'));
  }
}

function handleClick(event){
  event.stopPropagation();
  event.preventDefault();

  document.location.href = 'combat.html';
}

saveToLocalStorage();
loadFromLocalStorage();
generateScenes();

historicalFigureIntroEl.textContent = (historicalFigure.intro);
historicalFigureImageEl.setAttribute('src', historicalFigure.image);

console.log('Random Historical Figure: ' + historicalFigure.name);

if(encountersCompleted === encountersPerGame){
  localStorage.setItem('finalQuestionOfGame', true);
  // Reveal final question button to combat phase.
  var hiddenButton = document.createElement('button');
  hiddenButton.setAttribute('id', 'hidden-button');
  hiddenButton.textContent = 'REPAIR THE ROBOT';
  hiddenButton.addEventListener('click', handleClick);

  hiddenButtonContainerEl.appendChild(hiddenButton);
}
