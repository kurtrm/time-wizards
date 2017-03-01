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

//==========ATTACK EXAMPLE==========
// 1
// var attackQuestionOneAnswerChoices = ['Blue', 'Red', 'Green', 'Purple'];
// var attackQuestionOne = new Question
//   ('What is my favorite color?',
//   attackQuestionOneAnswerChoices,
//   2,
//   'Nope! It\'s Green!');
// attackQuestions.append(attackQuestionOne);

// 1 ATTACK
var attackQuestionOneAnswerChoices = ['Number', 'String', 'NaN', 'undefined'];
var attackQuestionOne = new Question
  ('What does the following expression return? typeof(NaN);',
  attackQuestionOneAnswerChoices,
  0,
  'Number is the correct answer.');
attackQuestions.push(attackQuestionOne);

// 4. What does the following expression return?
// typeof(NaN);
//
// Number *
// String
// NaN
// undefined

// 2 ATTACK
var attackQuestionTwoAnswerChoices = ['False', 'True', 'Maybe', 'I don\’t know'];
var attackQuestionTwo = new Question
  ('What does the following expression return? !false',
  attackQuestionTwoAnswerChoices,
  1,
  'Sorry! The correct answer is true.');
attackQuestions.push(attackQuestionTwo);

// 2. What does the following expression return?
// !false
//
// False
// True *
// Maybe
// I don’t know.

// 3 ATTACK
var attackQuestionThreeAnswerChoices = ['rm branch pudding', 'rm -rf', 'git branch -d pudding', 'git checkout -b pudding'];
var attackQuestionThree = new Question
  ('How do you delete a branch called pudding?',
  attackQuestionThreeAnswerChoices,
  2,
  'The correct answer is git branch -d pudding.');
attackQuestions.push(attackQuestionThree);

// 5. How do you delete a branch called pudding?
//
// rm branch pudding
// rm -rf
// git branch -d pudding *
// git checkout -b pudding

//==========DEFENSE QUESTIONS==========

// 1 DEFENSE
var defenseQuestionOneAnswerChoices = ['2001', '2007', '2015', '2005'];
var defenseQuestionOne = new Question
  ('What year did the iPhone come out?',
  defenseQuestionOneAnswerChoices,
  1,
  '...Sorry! You\'re wrong. It was 2007...');
defenseQuestions.push(defenseQuestionOne);

// 2. What year did the iPhone come out?
//
// 2001
// 2007*
// 2015
// 2005

// 2 DEFENSE
var defenseQuestionTwoAnswerChoices = ['Britney Spears', 'Whitney Houston', 'Susan Sarandon', 'Sigourney Weaver'];
var defenseQuestionTwo = new Question
  ('What is the name of the female lead actress in the movie Alien?',
  defenseQuestionTwoAnswerChoices,
  3,
  '...Oh no! You\'re wrong. It was Sigourney...');
defenseQuestions.push(defenseQuestionOne);

// 4. What is the name of the female lead actress in the movie Alien?
//
// Britney Spears
// Whitney Houston
// Susan Sarandon
// Sigourney Weaver *

// 3 DEFENSE
var defenseQuestionThreeAnswerChoices = ['J.K. Rowling', 'H.G. Wells', 'J.R. Tolkien', 'Michael Crichton'];
var defenseQuestionThree = new Question
  ('Which author wrote the books, Jurassic Park, which was adapted to a major motion picture film?',
  defenseQuestionThreeAnswerChoices,
  3,
  '...Really? Come on. We made it easy. It was Michael Crichton.');
defenseQuestions.push(defenseQuestionOne);

// 6.  Which author wrote the books, Jurassic Park, which was adapted to a major motion picture film?
// J.K. Rowling
// H.G. Wells
// J.R. Tolkien
// Michael Crichton *

//==========FINAL_QUESTION==========

var finalQuestionAnswerChoices = ['Earth', 'Skaro', 'Mondas', 'Gallifrey'];
var finalQuestion = new Question
('In Doctor Who, what is the home planet of the Daleks?',
finalQuestionAnswerChoices,
1,
'Turn on BBC right now...because that\'s wrong. It\'s Skaro');

//==========LOCATIONS==========
var japan = new Location ('Japan Year 1185', 'images/japansmall.jpg');
console.log(japan);
locations.push(japan);

//==========HISTORICAL FIGURES==========

// This object defines the historical figure.
var einstein = new HistoricalFigure ('Albert MF Einstein', ['You do not really understand something unless you can explain it to your grandmother.', 'It is a miracle that curiosity survives formal education.'], 'Yell E=MC2 as you jump into the portal!', ['images/albert.jpg', 'images/einstein2.jpg']);
console.log(einstein);
historicalFigures.push(einstein);

//==========ENEMIES==========

var trex = new Enemy ('T-rex', 'images/trex.jpg', 'RAWWWRRRRR!!!');
console.log(trex);
enemies.push(trex);
