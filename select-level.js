'use-strict';

// This section adds text data to historical figure
var historicalFigureIntroEl = document.getElementById('historical-text');
historicalFigureIntroEl.textContent = (einstein.intro);
var historicalFigureImageEl = document.getElementById('historical-image');
historicalFigureImageEl.setAttribute('src', einstein.image[0]);

var hiddenButtonContainerEl = document.getElementById('hidden-button-container');

var historicalFigure = einstein;
var scene = japan;

var encountersPerGame = 1;
var encountersCompleted = 0;

// Box holding all portals.
var sceneContainer = document.getElementById('location-image-box');

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

generateScenes();

function saveToLocalStorage() {
  localStorage.setItem('historicalFigure', JSON.stringify(historicalFigure));
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
}

function handleClick(event){
  event.stopPropagation();
  event.preventDefault();

  document.location.href = 'combat.html';
}

saveToLocalStorage();
loadFromLocalStorage();

if(encountersCompleted === encountersPerGame){
  localStorage.setItem('finalQuestionOfGame', true);
  // Reveal final question button to combat phase.
  var hiddenButton = document.createElement('button');
  hiddenButton.setAttribute('id', 'hidden-button');
  hiddenButton.textContent = 'REPAIR THE ROBOT';
  hiddenButton.addEventListener('click', handleClick);

  hiddenButtonContainerEl.appendChild(hiddenButton);
}
