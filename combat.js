'use strict';

// Selects a random question.
function selectQuestion(questionType){
  if(questionType === 'attack'){
    var questionIndex = Math.floor(Math.random() * attackQuestions.length);
    return attackQuestions[questionIndex];
  }else if(questionType === 'defense'){
    var questionIndex = Math.floor(Math.random() * defenseQuestions.length);
    return defenseQuestions[questionIndex];
  }else if(questionType === 'final'){
    finalQuestionOfGame = true;
    roundsPerEncounter = 1;
    return finalQuestion;
  }
}

// Handles the submit button being clicked in the form.
function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();

  // Only allows the logic to proceed if the player already submitted an answer.
  if(!validSubmit && event.target.choices.value === NaN){
    validSubmit = true;

    if(finalQuestionOfGame){
      // If player got it right, they win.
      // If player got it right, add +1 to score.
      // If player got it wrong, they lose.
      // Sends player to the results page.
      document.location.href = 'results.html';
    }

    if(currentRound <= roundsPerEncounter){
      // Check if answer is correct.
      if(parseInt(event.target.choices.value) === selectedQuestion.correctAnswer){
        answerResponseEl.textContent = 'That is correct! Nice job!';
        // Add +1 to player score.
      }else {
        answerResponseEl.textContent = selectedQuestion.incorrectAnswerResponse;
      }

      // The last round.
      if(currentRound === roundsPerEncounter){
        // Change text of button.
        submitButtonEl.textContent = 'Proceed';
        // The player can now leave the encounter.
        exitEncounter = true;
      }
    }else{
      // Ensure button will send player to select level.
      if(exitEncounter){
        document.location.href = 'select-level.html';
      }
    }
  }
}

// Handles the "Go to Next Question" button being clicked in the form.
function handleNextQuestionClick () {
  if (validSubmit){
  // Increment currentRound.
    currentRound += 1;
    // Create the next round.
    encounterRound();
    // Reset validSumbit for next round.
    validSubmit = false;

    answerResponseEl.textContent = '';
  }
}

// Creates a new round.
function encounterRound(){
  // Determine which type of question to ask this round.
  if(!finalQuestionOfGame){
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
  }

  // Set the text pertaining to the question for the player to see.
  questionEl.textContent = selectedQuestion.question;
  answerChoiceOne.textContent = selectedQuestion.answerChoices[0];
  answerChoiceTwo.textContent = selectedQuestion.answerChoices[1];
  answerChoiceThree.textContent = selectedQuestion.answerChoices[2];
  answerChoiceFour.textContent = selectedQuestion.answerChoices[3];
}

// Will be true if the player gets one question correct in the encounter.
var survivedEncounter = false;
// Will be true when the submit button changes into a proceed button.
var exitEncounter = false;
// Will be true if this current round will be an attack.
var attackQuestion = true;
// Will be true if the player is on the "fix the robot" question.
var finalQuestionOfGame = false;
// How many rounds are per an encounter.
var roundsPerEncounter = 3;
// The round the player is currently on.
var currentRound = 1;
// The question for this round.
var selectedQuestion;
// Will be true if the player has made a submission during that round.
var validSubmit = false;

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
encounterRound();

//DOM functionality for historical figure

var historicalFigureNameEl = document.getElementById('historical-figure-name');
historicalFigureNameEl.textContent = (einstein.name);
var historicalFigureSpeechEl = document.getElementById('historical-figure-speech');
historicalFigureSpeechEl.textContent = (einstein.comments);
var historicalFigureImageEl = document.getElementById('historical-figure-image');
historicalFigureImageEl.setAttribute('src', einstein.image[1]);

//DOM functionality for player



//DOM functionality for enemy
