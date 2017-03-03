'use-strict';

// Returns a random whole number between the min (inclusive) and max (exclusive).
function randomize(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

// Selects a historical figure randomly out of the remaining figures not used and assigns the next figure.
function selectHistoricalFigure(){
  historicalFigure = remainingHistoricalFigures[randomize(0, remainingHistoricalFigures.length)];
}

// Generates ALL the scene DOM elements dynamically.
function generateScenes(){
  for (var i = 0; i < remainingScenes.length; i++){
    // This current scene's image element.
    var sceneImage = document.createElement('img');
    sceneImage.setAttribute('class', 'scene-image');
    sceneImage.setAttribute('id', 'scene-image-' + i);
    sceneImage.setAttribute('src', remainingScenes[i].image);

    // The current scene's link element that the image is appended to.
    var sceneImageLink = document.createElement('a');
    sceneImageLink.setAttribute('id', 'scene-portal-link-' + i);
    sceneImageLink.appendChild(sceneImage);
    sceneImageLink.addEventListener('click', handlePortalClick);

    // The current scene's name element.
    var sceneName = document.createElement('h3');
    sceneName.setAttribute('class', 'scene-name');
    sceneName.setAttribute('id', 'scene-name-' + i);
    sceneName.textContent = remainingScenes[i].name;

    // The current scene's link element that the name is appended to.
    // Different from sceneImageLink for potential styling
    // differences when hovering over the link.
    var sceneLink = document.createElement('a');
    sceneLink.setAttribute('id', 'scene-link-' + i);
    sceneLink.appendChild(sceneName);
    sceneImageLink.addEventListener('click', handlePortalClick);

    // The current scene's container element that all previous elements become nested in.
    var scenePortal = document.createElement('div');
    scenePortal.setAttribute('class', 'scene');
    scenePortal.setAttribute('id', 'scene-portal-' + i);
    scenePortal.appendChild(sceneImageLink);
    scenePortal.appendChild(sceneLink);

    // Place this newly made scene's portal into the container holding all portals.
    sceneContainer.appendChild(scenePortal);
  }
}

// Saves the current historical figure and remaining historical figures
// based on previous encounter data.
function updateHistoricalFigures(){
  // If this is NOT the first time getting to this page, historical figure and remaining
  // historical figures are set from previous encounter data.
  if(localStorage.getItem('remainingHistoricalFigures') !== null){
    remainingHistoricalFigures = JSON.parse(localStorage.getItem('remainingHistoricalFigures'));
    historicalFigure = JSON.parse(localStorage.getItem('historicalFigure'));

    // Check all remaining historical figures from before the encounter, and remove the one that
    // was with the player for the previous encounter from the array.
    for(var i = 0; i < remainingHistoricalFigures.length; i++){
      if (remainingHistoricalFigures[i].name === historicalFigure.name){
        remainingHistoricalFigures.splice([i], 1); // Remove = (index, array[1])
        localStorage.setItem('remainingHistoricalFigures', JSON.stringify(remainingHistoricalFigures));
        // Found the historical figure previously shown, exit the loop.
        break;
      }
    }

    // Select a new historical figure for the next encounter out of the edited
    // remaining historical figures' array.
    selectHistoricalFigure();
    localStorage.setItem('historicalFigure', JSON.stringify(historicalFigure));
  }else{
    // This is the first time getting to this page for this play-through.
    // The player will be given access to ALL possible historical figure partners to start with.
    remainingHistoricalFigures = historicalFigures;
    localStorage.setItem('remainingHistoricalFigures', JSON.stringify(remainingHistoricalFigures));
    // Generate the FIRST historical figure.
    historicalFigure = historicalFigures[randomize(0, historicalFigures.length)];
    localStorage.setItem('historicalFigure', JSON.stringify(historicalFigure));
  }
}

// Saves the current scene and remaining scenes based on previous encounter data.
function updateScenes(){
  if(localStorage.getItem('remainingScenes') !== null){
    // This is NOT the first time on this page this play-through.
    remainingScenes = JSON.parse(localStorage.getItem('remainingScenes'));
    scene = JSON.parse(localStorage.getItem('scene'));

    // Check all remaining scenes from before the encounter, and remove the one that
    // the player went to from the array.
    for(var i = 0; i < remainingScenes.length; i++){
      if(remainingScenes[i].name === scene.name){
        remainingScenes.splice([i], 1); // Remove = (index, array[1])
        localStorage.setItem('remainingScenes', JSON.stringify(remainingScenes));
        // Found the scene previously shown, exit the loop.
        break;
      }
    }
  }else{
    // This is the first time getting to this page for this play-through.
    // The player will be given access to ALL possible scenes to start with.
    remainingScenes = scenes;
    localStorage.setItem('remainingScenes', JSON.stringify(remainingScenes));
  };
}

// Save all data that will be needed for the combat phase of the game.
function saveLocalStorage(){
  // First, save the historical figure data, which will change depending on if
  // it's the first time the player has gotten to this page.
  updateHistoricalFigures();
  // Second, save the scene data, which also changed depending on if it's the
  // first time the player has gotten to this page.
  updateScenes();

  // Save the randomly generated scene.
  localStorage.setItem('scene', JSON.stringify(scene));

  // Add encountersCompleted to localStorage if it doesn't already exist.
  if(localStorage.getItem('encountersCompleted') === null){
    localStorage.setItem('encountersCompleted', 0);
  }

  // Add finalQuestionOfGame to localStorage if it doesn't already exist.
  if(localStorage.getItem('finalQuestionOfGame') === null){
    localStorage.setItem('finalQuestionOfGame', 'false');
  }
}

// Loads the data needed for tracking the player's progress.
function loadLocalStorage(){
  encountersCompleted = parseInt(localStorage.getItem('encountersCompleted'));
}

// Handles the "Repair the Robot" button being clicked.
function handleHiddenButtonClick(event){
  event.stopPropagation();
  event.preventDefault();
  // Go to the combat phase.
  document.location.href = 'combat.html';
}

// Handles when a portal is clicked (a.k.a selected for combat phase).
function handlePortalClick(event){
  event.stopPropagation();
  event.preventDefault();

  // Get the protal ID attribute.
  // Get the lastIndexOf the dash in it.
  // Get all text spliced after that as a parseInt() return.
  // Use that index to know what place in the array to go to and set+save scene as that scene in remainingScenes[].
  var portalId = event.target.getAttribute('id');
  var lastDashIndex = portalId.lastIndexOf('-');
  var sceneIndex = parseInt(portalId.slice((lastDashIndex + 1), portalId.length));
  scene = remainingScenes[sceneIndex];
  localStorage.setItem('scene', JSON.stringify(scene));

  // Go to the combat phase.
  document.location.href = 'combat.html';
}

// Historical Figure image and text elements.
var historicalFigureIntroEl = document.getElementById('historical-text');
var historicalFigureImageEl = document.getElementById('historical-image');
// The hidden button's container element we will append it to.
var hiddenButtonContainerEl = document.getElementById('hidden-button-container');
// Container element for appending all portals.
var sceneContainer = document.getElementById('location-image-box');

// The randomly chosen historical figure for the next encounter.
var historicalFigure;
// The randomly chosen scene that the player will fight at.
var scene;
// The currently unused historical figures for this play-through.
var remainingHistoricalFigures;
// The currently unused scenes for this play-through.
var remainingScenes;
// How many encounters the player must survive before being presented with repairing the robot.
var encountersPerGame = 3;
// The current amount of completed encounters the player has done.
var encountersCompleted = 0;

// Save, load, and generate scene portals IN THAT ORDER.
saveLocalStorage();
loadLocalStorage();
generateScenes();

// Display the current historical figure AFTER they have been generated.
historicalFigureIntroEl.textContent = (historicalFigure.intro);
historicalFigureImageEl.setAttribute('src', historicalFigure.image);

// If the player has just finished the final regular encounter,
// they now will be given the option of going to repair the robot.
if(encountersCompleted === encountersPerGame){
  // The combat phase of the game will now know that it's the final question of the game.
  localStorage.setItem('finalQuestionOfGame', 'true');

  // Reveal final question button to combat phase.
  var hiddenButton = document.createElement('button');
  hiddenButton.setAttribute('id', 'hidden-button');
  hiddenButton.textContent = 'REPAIR THE ROBOT';
  hiddenButton.addEventListener('click', handleHiddenButtonClick);
  hiddenButtonContainerEl.appendChild(hiddenButton);
}
