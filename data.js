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

// 2 ATTACK
var attackQuestionTwoAnswerChoices = ['False', 'True', 'Maybe', 'I don\’t know'];
var attackQuestionTwo = new Question
  ('What does the following expression return? !false',
  attackQuestionTwoAnswerChoices,
  1,
  'Sorry! The correct answer is true.');
attackQuestions.push(attackQuestionTwo);

// 3 ATTACK
var attackQuestionThreeAnswerChoices = ['rm branch pudding', 'rm -rf', 'git branch -d pudding', 'git checkout -b pudding'];
var attackQuestionThree = new Question
  ('How do you delete a branch called pudding?',
  attackQuestionThreeAnswerChoices,
  2,
  'The correct answer is git branch -d pudding.');
attackQuestions.push(attackQuestionThree);

// 4 ATTACK
var attackQuestionFourAnswerChoices = ['expletives', 'variable', 'location', 'var'];
var attackQuestionFour = new Question
('What variable name should NOT be used in Javascript?',
attackQuestionFourAnswerChoices,
2,
'The correct answer is location.');
attackQuestions.push(attackQuestionFour);

// 5 ATTACK
var attackQuestionFiveAnswerChoices = ['You look like a lonely variable, I\'d like to assign you as mine!', 'If I call your function name, will you return me your phone number?', 'Are you an Object constuctor? Because I want to build a relationship with you!', 'ALL OF THE ABOVE'];
var attackQuestionFive = new Question
('Which of the following is the cheesiest Javascript line?',
attackQuestionFiveAnswerChoices,
3,
'The correct answer is ALL OF THE ABOVE.');
attackQuestions.push(attackQuestionFive);

//6 ATTACK
var attackQuestionSixAnswerChoices = ['Packed data sets can not be processed differently.', 'Shared memory or thread level parallelism allow different parallel paths on multiple data', 'It returns a selection mask with API vectors', 'Typed arrays split implementation into buffers and views'];
var attackQuestionSix = new Question
('What is the downside of Single Instruction/Multiple data methods?',
attackQuestionSixAnswerChoices,
0,
'The correct answer is packed data sets can not be processed differently');
attackQuestions.push(attackQuestionSix);

//7 ATTACK
var attackQuestionSevenAnswerChoices = ['In the body section at the bottom', 'In your meta tag section', 'In the body section at the top','In your head section'];
var attackQuestionSeven = new Question
('Where is it best to put a CDN JavaScript reference in your HTML file?',
attackQuestionSevenAnswerChoices,
3,
'The correct answer is in your head section');
attackQuestions.push(attackQuestionSeven);

//8 ATTACK
var attackQuestionEightAnswerChoices = ['meow.txt touch', 'mkdir meow.txt', 'touch meow.txt', 'meow meow meow meow'];
var attackQuestionEight = new Question
('In Bash, how do you make new text file named meow?',
attackQuestionEightAnswerChoices,
2,
'The correct answer is touch meow.txt');
attackQuestions.push(attackQuestionEight);

//9 ATTACK
var attackQuestionNineAnswerChoices = ['style this.list', 'list-style-type', 'type-style-list','list-decoration'];
var attackQuestionNine = new Question
('How do you change the style of an unordered list in CSS?',
attackQuestionNineAnswerChoices,
1,
'The correct answer is list-style-type');
attackQuestions.push(attackQuestionNine);

console.log(attackQuestions);
//==========DEFENSE QUESTIONS==========

// 1 DEFENSE
var defenseQuestionOneAnswerChoices = ['2001', '2007', '2015', '2005'];
var defenseQuestionOne = new Question
  ('What year did the iPhone come out?',
  defenseQuestionOneAnswerChoices,
  1,
  '...Sorry! You\'re wrong. It was 2007...');
defenseQuestions.push(defenseQuestionOne);

// 2 DEFENSE
var defenseQuestionTwoAnswerChoices = ['Britney Spears', 'Whitney Houston', 'Susan Sarandon', 'Sigourney Weaver'];
var defenseQuestionTwo = new Question
  ('What is the name of the female lead actress in the movie Alien?',
  defenseQuestionTwoAnswerChoices,
  3,
  '...Oh no! You\'re wrong. It was Sigourney...');
defenseQuestions.push(defenseQuestionOne);

// 3 DEFENSE
var defenseQuestionThreeAnswerChoices = ['J.K. Rowling', 'H.G. Wells', 'J.R. Tolkien', 'Michael Crichton'];
var defenseQuestionThree = new Question
  ('Which author wrote the books, Jurassic Park, which was adapted to a major motion picture film?',
  defenseQuestionThreeAnswerChoices,
  3,
  '...Really? Come on. We made it easy. It was Michael Crichton.');
defenseQuestions.push(defenseQuestionOne);

//==========FINAL_QUESTION==========

var finalQuestionAnswerChoices = ['Earth', 'Skaro', 'Mondas', 'Gallifrey'];
var finalQuestion = new Question
('In Doctor Who, what is the home planet of the Daleks?',
finalQuestionAnswerChoices,
1,
'Turn on BBC right now...because that\'s wrong. It\'s Skaro');

//==========SCENES==========
var japan = new Scene ('Japan Year 1185', 'images/japansmall.jpg');
console.log(japan);
locations.push(japan);

//==========HISTORICAL FIGURES==========

// This object defines the historical figure.
var einstein = new HistoricalFigure ('Albert MF Einstein', ['You do not really understand something unless you can explain it to your grandmother.', 'It is a miracle that curiosity survives formal education.'], 'Hello friend, my name is Albert and I’m here to assist you. Please click on a portal below to begin your journey to fix time. Yell E=MC2 as you jump into the portal!', ['images/albert.jpg', 'images/einstein2.jpg']);
console.log(einstein);
historicalFigures.push(einstein);

//==========ENEMIES==========

var trex = new Enemy ('T-rex', 'images/trex.jpg', 'RAWWWRRRRR!!!');
console.log(trex);
enemies.push(trex);
