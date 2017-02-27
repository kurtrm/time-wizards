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
var defenseQuestionOneAnswerChoices = ['Of course!', 'Maybe', 'Probably not...', 'OH MY GOD KILL IT WITH FIRE!!!'];
var defenseQuestionOne = new Question
  ('Is Jar Jar a good character?',
  defenseQuestionOneAnswerChoices,
  3,
  '...you\'re totally wrong...');
defenseQuestions.append(defenseQuestionOne);

//==========LOCATIONS==========

//==========HISTORICAL FIGURES==========

//==========ENEMIES==========
