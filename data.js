'use strict';

// The lists of instances of each object type.
var attackQuestions = [];
var defenseQuestions = [];
var locations = [];
var enemies = [];
var historicalFigures = [];

//==========ATTACK QUESTIONS==========
// BLANK TEMPLATE
// var attackQuestionOneAnswerChoices = [];
// var attackQuestionOne = new Question
//   ('',
//   attackQuestionOneAnswerChoices,
//   0,
//   '');
// attackQuestions.append(attackQuestionOne);

// 1 ATTACK
var attackQuestionOneAnswerChoices = ['Blue', 'Red', 'Green', 'Purple'];
var attackQuestionOne = new Question
  ('What is my favorite color?',
  attackQuestionOneAnswerChoices,
  2,
  'Nope! It\'s Green!');
attackQuestions.append(attackQuestionOne);

// 2 ATTACK
var attackQuestionTwoAnswerChoices = ['12', '13', '10', '11'];
var attackQuestionTwo = new Question
  ('How many items are in a baker\'s dozen?',
  attackQuestionTwoAnswerChoices,
  1,
  'Nope! A dozen is 12, but a baker\'s dozen is adding one more to that.');
attackQuestions.append(attackQuestionTwo);

// 3 ATTACK
var attackQuestionThreeAnswerChoices = ['1', '2', '3', '4'];
var attackQuestionThree = new Question
  ('How many legs does a dog normally have?',
  attackQuestionThreeAnswerChoices,
  3,
  'Nope! While some dogs lose a leg in acidents or are born different, they normally have four legs.');
attackQuestions.append(attackQuestionThree);

//==========DEFENSE QUESTIONS==========

// 1 DEFENSE
var defenseQuestionOneAnswerChoices = ['2001', '2007', '2015', '2005'];
var defenseQuestionOne = new Question
  ('What year did the iPhone come out?',
  defenseQuestionOneAnswerChoices,
  2,
  '...Sorry! You\'re wrong. It was 2007...');
defenseQuestions.append(defenseQuestionOne);

var defenseQuestionTwoAnswerChoices = ['Britney Spears', 'Whitney Houston', 'Susan Sarandon', 'Sigourney Weaver'];
var defenseQuestionTwo = new Question
  ('What is the name of the female lead actress in the movie Alien?',
  defenseQuestionTwoAnswerChoices,
  4,
  '...Oh no! You\'re wrong. It was Sigourney...');
defenseQuestions.append(defenseQuestionOne);

var defenseQuestionThreeAnswerChoices = ['J.K. Rowling', 'H.G. Wells', 'J.R. Tolkien', 'Michael Crichton'];
var defenseQuestionThree = new Question
  ('Which author wrote the books, Jurassic Park, which was adapted to a major motion picture film?',
  defenseQuestionThreeAnswerChoices,
  4,
  '...Really? Come on. We made it easy. It was Michael Crichton.');
defenseQuestions.append(defenseQuestionOne);

//==========LOCATIONS==========

//==========HISTORICAL FIGURES==========

//==========ENEMIES==========
