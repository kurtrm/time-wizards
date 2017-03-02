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
  'How did you seriously get the wrong!? Guess you should test them out.');
attackQuestions.push(attackQuestionFive);

//6 ATTACK
var attackQuestionSixAnswerChoices = ['Packed data sets can not be processed differently.', 'Shared memory or thread level parallelism allow different parallel paths on multiple data', 'It returns a selection mask with API vectors', 'Typed arrays split implementation into buffers and views'];
var attackQuestionSix = new Question
  ('What is the downside of Single Instruction/Multiple data methods?',
  attackQuestionSixAnswerChoices,
  0,
  'The correct answer is packed data sets can not be processed differently. Use google!');
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
defenseQuestions.push(defenseQuestionTwo);

// 3 DEFENSE
var defenseQuestionThreeAnswerChoices = ['J.K. Rowling', 'H.G. Wells', 'J.R. Tolkien', 'Michael Crichton'];
var defenseQuestionThree = new Question
  ('Which author wrote the books, Jurassic Park, which was adapted to a major motion picture film?',
  defenseQuestionThreeAnswerChoices,
  3,
  '...Really? Come on. We made it easy. It was Michael Crichton.');
defenseQuestions.push(defenseQuestionThree);

// 4 DEFENSE
var defenseQuestionFourAnswerChoices = ['1812', '600', '1933', '1776'];
var defenseQuestionFour = new Question
  ('In what year was modern worldwide interest sparked by a sighting of the Loch Ness Monster?',
  defenseQuestionFourAnswerChoices,
  2,
  '1812 is the correct answer! Study your history!');
defenseQuestions.push(defenseQuestionFour);

// 5 DEFENSE
var defenseQuestionFiveAnswerChoices = ['Frog', 'Goat', 'Lizard', 'Horse'];
var defenseQuestionFive = new Question
  ('What animal did the scientists splice dinosaur DNA with, in Jurassic Park?',
  defenseQuestionFiveAnswerChoices,
  0,
  'The answer is Frog! Watch the movie again');
defenseQuestions.push(defenseQuestionFive);

// 6 DEFENSE
var defenseQuestionSixAnswerChoices = ['J.K Rowling', 'H.G Wells', 'J.R Tolkien', 'Michael Crichton'];
var defenseQuestionSix = new Question
  ('Which author wrote the books, Jurassic Park, which was adapted to a major motion picture film?',
  defenseQuestionSixAnswerChoices,
  3,
  'Wrong! The answer is Michael Crichton.');
defenseQuestions.push(defenseQuestionSix);

// 7 DEFENSE
var defenseQuestionSevenAnswerChoices = ['Of course not!', 'Yes they did!', 'I don\'t know?', 'wat?'];
var defenseQuestionSeven = new Question
  ('Historically, did T-Rex ever live in the same time period as the Triceratops?',
  defenseQuestionSevenAnswerChoices,
  1,
  'You got it wrong! They did live together!');
defenseQuestions.push(defenseQuestionSeven);

// 8 DEFENSE
var defenseQuestionEightAnswerChoices = ['Dalmatian', 'English Bulldog', 'Corgi', 'Cavalier King Charles Spaniel'];
var defenseQuestionEight = new Question
('What breed of dogs does Queen Elizabeth II have?',
defenseQuestionEightAnswerChoices,
2,
'Sorry that\'s not correct! Google is your friend!');
defenseQuestions.push(defenseQuestionEight);

// 9 DEFENSE
var defenseQuestionNineAnswerChoices = ['Hawaii', 'San Juan', 'French Polynesia', 'Galápagos'];
var defenseQuestionNine = new Question
('What famous islands, off the coast of South America, did Darwin explore?',
defenseQuestionNineAnswerChoices,
3,
'Sorry that is incorrect. Use google!');
defenseQuestions.push(defenseQuestionNine);

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
var einstein = new HistoricalFigure ('Albert MF Einstein', ['You do not really understand something unless you can explain it to your grandmother.', 'It is a miracle that curiosity survives formal education.'], 'Hello friend my name is Albert and I’m here to assist you. Please click on a portal below to begin your journey to fix time. Yell E=MC\xB2 as you jump into the portal!', ['images/albert.jpg', 'images/einstein2.jpg']);
console.log(einstein);
historicalFigures.push(einstein);

//==========ENEMIES==========

var trex = new Enemy ('T-rex', 'images/trex.jpg', 'RAWWWRRRRR!!!');
console.log(trex);
enemies.push(trex);

console.log(defenseQuestions);
