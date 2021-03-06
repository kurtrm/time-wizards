'use strict';

// Returns a random whole number between the min (inclusive) and max (exclusive).
function randomize(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

// Selects a random question.
function selectQuestion(questionType){
  var attackQuestions = JSON.parse(localStorage.getItem('attackQuestions'));
  var defenseQuestions = JSON.parse(localStorage.getItem('defenseQuestions'));
  if(questionType === 'attack'){
    var questionIndex = Math.floor(Math.random() * attackQuestions.length);
    var currentAttackQuestion = attackQuestions[questionIndex];
    attackQuestions.splice(questionIndex, 1);
    localStorage.setItem('attackQuestions', JSON.stringify(attackQuestions));
    return currentAttackQuestion;
  }else if(questionType === 'defense'){
    var questionIndex = Math.floor(Math.random() * defenseQuestions.length);
    var currentDefenseQuestion = defenseQuestions[questionIndex];
    defenseQuestions.splice(questionIndex, 1);
    localStorage.setItem('defenseQuestions', JSON.stringify(defenseQuestions));
    return currentDefenseQuestion;
  }else if(questionType === 'final'){
    roundsPerEncounter = 1;
    return finalQuestion;
  }
}

function saveQuestionsToLocalStorage(){
  // Add attackQuestions to localStorage if it doesn't already exist.
  if(localStorage.getItem('attackQuestions') === null){
    localStorage.setItem('attackQuestions', JSON.stringify(attackQuestions));
  }

  // Add defenseQuestions to localStorage if it doesn't already exist.
  if(localStorage.getItem('defenseQuestions') === null){
    localStorage.setItem('defenseQuestions', JSON.stringify(defenseQuestions));
  }
}

// Selects a random enemy.
function selectEnemy(){
  // If it's the final round, choose a specific boss enemy.
  if(finalQuestionOfGame === 'true'){
    enemy = dalek;
    localStorage.setItem('enemy', JSON.stringify(enemy));
  }else{
    // Not the final round, so choose a random enemy.
    if(localStorage.getItem('remainingEnemies') !== null){
      // This is NOT the first time on this page this play-through.
      remainingEnemies = JSON.parse(localStorage.getItem('remainingEnemies'));
      enemy = JSON.parse(localStorage.getItem('enemy'));

      // Check all remaining enemies from before the encounter, and remove the one that
      // the player has just defeated from the array.
      for(var i = 0; i < remainingEnemies.length; i++){
        if(remainingEnemies[i].name === enemy.name){
          remainingEnemies.splice([i], 1); // Remove = (index, array[1])
          localStorage.setItem('remainingEnemies', JSON.stringify(remainingEnemies));
          // Found the enemy previously shown, exit the loop.
          break;
        }
      }

      // Select a new enemy for this encounter out of the edited remaining enemies' array.
      enemy = remainingEnemies[randomize(0, remainingEnemies.length)];
      localStorage.setItem('enemy', JSON.stringify(enemy));
    }else{
      // This is the first time getting to this page for this play-through.
      // The player will be given access to ALL possible enemies to start with.
      remainingEnemies = enemies;
      localStorage.setItem('remainingEnemies', JSON.stringify(remainingEnemies));
      // Generate the FIRST enemy.
      enemy = enemies[randomize(0, enemies.length)];
      localStorage.setItem('enemy', JSON.stringify(enemy));
    }
  }
}

// Handles the submit button being clicked in the form.
function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();

  // If player doesn't submit an answer, alert user to submit an answer.
  if(isNaN(parseInt(event.target.choices.value)) === true) {
    alert('Please select an answer before submitting.');
  }

  // Only allows the logic to proceed if the player already submitted an answer.
  if(!validSubmit && isNaN(parseInt(event.target.choices.value)) !== true){
    validSubmit = true;

    // If the player just answered the final question of the game.
    if(finalQuestionOfGame === 'true'){
      // Check if answer is correct.
      if(parseInt(event.target.choices.value) === selectedQuestion.correctAnswer){
        answerResponseEl.textContent = 'That is correct! You fixed the robot!';
        player.score += 1;
        player.win = true;

        saveLocalStorage();
        document.location.href = 'results.html';
      }else {
        player.win = false;

        saveLocalStorage();
        document.location.href = 'results.html';
      }
    }

    if(currentRound <= roundsPerEncounter){
      // Check if answer is correct.
      if(parseInt(event.target.choices.value) === selectedQuestion.correctAnswer){
        answerResponseEl.textContent = 'That is correct! Nice job!';
        player.score += 1;
      }else {
        answerResponseEl.textContent = selectedQuestion.incorrectAnswerResponse;
      }

      // The last round.
      if(currentRound === roundsPerEncounter){
        // Change text of button.
        submitButtonEl.textContent = 'Proceed';
        // The player can now leave the encounter.
        exitEncounter = true;
        validSubmit = false;
        currentRound += 1;
      }
    }else{
      // Ensure button will send player to select level.
      if(exitEncounter){
        // The player loses if they didn't gain any points this encounter.
        if(scoreAtEncounterStart === player.score){
          // The player loses.
          player.win = false;
          saveLocalStorage();
          document.location.href = 'results.html';
        }else{
          // The player moves onward.
          saveLocalStorage();
          document.location.href = 'select-level.html';
        }
      }
    }
  }
}

// Handles the "Go to Next Question" button being clicked in the form.
function handleNextQuestionClick(event){
  if (validSubmit){
    // Remove this button on the second to last round being completed.
    if(currentRound === roundsPerEncounter - 1){
      event.target.remove();
    }

    // Increment currentRound.
    currentRound += 1;
    // Create the next round.
    encounterRound();
    // Reset validSumbit for next round.
    validSubmit = false;

    var radioButtons = document.getElementsByClassName('answer-radio-button');
    for(var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }

    answerResponseEl.textContent = '';
  }
}

// Creates a new round.
function encounterRound(){
  // Determine which type of question to ask this round.
  if(finalQuestionOfGame !== 'true'){
    if(attackQuestion){
      // Attack.
      selectedQuestion = selectQuestion('attack');
      attackQuestion = !attackQuestion;
    }else{
      // Defense
      selectedQuestion = selectQuestion('defense');
      attackQuestion = !attackQuestion;
    }
  }else{
    selectedQuestion = selectQuestion('final');
    document.getElementById('next-question').remove();
  }

  // Set the text pertaining to the question for the player to see.
  questionEl.textContent = selectedQuestion.question;
  answerChoiceOne.textContent = selectedQuestion.answerChoices[0];
  answerChoiceTwo.textContent = selectedQuestion.answerChoices[1];
  answerChoiceThree.textContent = selectedQuestion.answerChoices[2];
  answerChoiceFour.textContent = selectedQuestion.answerChoices[3];
}

// Loads the information needed for the combat phase of the game.
function loadLocalStorage(){
  // Load scene.
  scene = JSON.parse(localStorage.getItem('scene'));
  // Load player.
  player = JSON.parse(localStorage.getItem('player'));
  scoreAtEncounterStart = player.score;
  // Load historical figure.
  historicalFigure = JSON.parse(localStorage.getItem('historicalFigure'));
  finalQuestionOfGame = localStorage.getItem('finalQuestionOfGame');
}

// Saves the information needed for the select-level and results page.
function saveLocalStorage(){
  // Save player.
  localStorage.setItem('player', JSON.stringify(player));
  var tempEncountersCompleted = parseInt(localStorage.getItem('encountersCompleted'));
  tempEncountersCompleted += 1;
  localStorage.setItem('encountersCompleted', tempEncountersCompleted);
}

// Will be true when the submit button changes into a proceed button.
var exitEncounter = false;
// Will be true if this current round will be an attack.
var attackQuestion = true;
// Will be true if the player is on the "fix the robot" question.
var finalQuestionOfGame = 'false';
// How many rounds are per an encounter.
var roundsPerEncounter = 3;
// The round the player is currently on.
var currentRound = 1;
// The score the player starts with at the beginning of the encounter.
var scoreAtEncounterStart;
// The question for this round.
var selectedQuestion;
// Will be true if the player has made a submission during that round.
var validSubmit = false;

// The current instances the encounter will be dealing with.
var scene;
var player;
var historicalFigure;
var enemy;
var remainingEnemies;

// Element containing the text of the question being asked.
var questionEl = document.getElementById('question');
// Elements containing the text of the answer choices given for the question.
var answerChoiceOne = document.getElementById('answer-choice-1');
var answerChoiceTwo = document.getElementById('answer-choice-2');
var answerChoiceThree = document.getElementById('answer-choice-3');
var answerChoiceFour = document.getElementById('answer-choice-4');
// The form containing the radio and submit buttons.
var answerFormEl = document.getElementById('answer-choices');
answerFormEl.addEventListener('submit', handleSubmit);
// Element containing the text of the answer response.
var answerResponseEl = document.getElementById('answer-response');
// The button for the submission.
var submitButtonEl = document.getElementById('submit-answer');
// The button for the next question.
var nextButtonEl = document.getElementById('next-question');
nextButtonEl.addEventListener('click', handleNextQuestionClick);

// The first round starts automatically.
saveQuestionsToLocalStorage();
loadLocalStorage();
selectEnemy();
encounterRound();

//DOM functionality for scene
var sceneImageEl = document.getElementById('scene-image');
if(finalQuestionOfGame === 'false'){
  sceneImageEl.setAttribute('src', scene.image);
}else{
  // The last question of the game's image is special.
  sceneImageEl.setAttribute('src', 'images/finallevel.png');
}

//DOM functionality for player
var playerNameEl = document.getElementById('player-name');
playerNameEl.textContent = (player.name);
var playerImageEl = document.getElementById('player-image');
playerImageEl.setAttribute('src', player.image);
var playerSpeechEl = document.getElementById('player-speech');
playerSpeechEl.textContent = (player.speech);

//DOM functionality for historical figure
var historicalFigureNameEl = document.getElementById('historical-figure-name');
historicalFigureNameEl.textContent = (historicalFigure.name);
var historicalFigureSpeechEl = document.getElementById('historical-figure-speech');
historicalFigureSpeechEl.textContent = (historicalFigure.comments);
var historicalFigureImageEl = document.getElementById('historical-figure-image');
historicalFigureImageEl.setAttribute('src', historicalFigure.image);

//DOM functionality for enemy
var enemyNameEl = document.getElementById('enemy-name');
enemyNameEl.textContent = (enemy.name);
var enemyImageEl = document.getElementById('enemy-image');
enemyImageEl.setAttribute('src', enemy.image);
var enemySpeechEl = document.getElementById('enemy-speech');
enemySpeechEl.textContent = (enemy.speech);
