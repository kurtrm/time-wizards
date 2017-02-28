'use strict';
var radioButtons = [];

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

for (var i = 0; i < 4; i++) {
  var radioButton = document.getElementById('answer-choice-1' + 'answer-choice-2' + 'answer-choice-3' + 'answer-choice-4');
  radioButtons.push(radioButtons);
}

var answerChoiceOne = document.getElementById('answer-choice-1');
answerChoiceOne.textContent = selectedAttackQuestion.answerChoices[0];
var answerChoiceTwo = document.getElementById('answer-choice-2');
answerChoiceTwo.textContent = selectedAttackQuestion.answerChoices[1];
var answerChoiceThree = document.getElementById('answer-choice-3');
answerChoiceThree.textContent = selectedAttackQuestion.answerChoices[2];
var answerChoiceFour = document.getElementById('answer-choice-4');
answerChoiceFour.textContent = selectedAttackQuestion.answerChoices[3];

var submitButtonEl = document.getElementById('submit-answer');
submitButtonEl.addEventListener ('click', handleClick);

function handleClick(event){
  event.preventDefault();
  event.stopPropagation();
  if(radioButtons[selectedAttackQuestion.correctAnswer].checked === true ){
    console.log('correct answer selected');
  }
  else {
    console.log('false answer');
  }

  console.log('submit was clicked');
}
