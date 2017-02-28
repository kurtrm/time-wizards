'use strict';


// Selects a random question.
function selectQuestion(questionType){
  if(questionType === 'attack'){
    var questionIndex = Math.floor(Math.random() * attackQuestions.length);
    return attackQuestions[questionIndex];
  }else if(questionType === 'defense'){
    //
  }else{
    //
  }
}

var selectedAttackQuestion = selectQuestion('attack');

var questionEl = document.getElementById('question');
questionEl.textContent = selectedAttackQuestion.question;

var radioButtonOne = document.getElementById('answer-choice-1-radio-button');
var radioButtonTwo = document.getElementById('answer-choice-2-radio-button');
var radioButtonThree = document.getElementById('answer-choice-3-radio-button');
var radioButtonFour = document.getElementById('answer-choice-4-radio-button');

var answerChoiceOne = document.getElementById('answer-choice-1');
answerChoiceOne.textContent = selectedAttackQuestion.answerChoices[0];
var answerChoiceTwo = document.getElementById('answer-choice-2');
answerChoiceTwo.textContent = selectedAttackQuestion.answerChoices[1];
var answerChoiceThree = document.getElementById('answer-choice-3');
answerChoiceThree.textContent = selectedAttackQuestion.answerChoices[2];
var answerChoiceFour = document.getElementById('answer-choice-4');
answerChoiceFour.textContent = selectedAttackQuestion.answerChoices[3];

var submitButtonEl = document.getElementById('submit-answer');
submitButtonEl.addEventListener ('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();
  event.target.id.checked === true ){
    console.log('correct answer selected');
  }
  else {
    console.log('false answer');
  }

  console.log('submit was clicked');
}
