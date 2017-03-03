'use strict';

// The lists of instances of each object type.
var attackQuestions = [];
var defenseQuestions = [];
var scenes = [];
var enemies = [];
var historicalFigures = [];

//==========ATTACK QUESTIONS==========

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
var attackQuestionSixAnswerChoices = ['Packed data sets can not be processed differently.', 'Code Code Code Code Code Code', 'It returns a selection mask with API vectors', 'Typed arrays split implementation into buffers and views'];
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
  0,
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
var japan = new Scene (
  'Japan',
  'images/levels300sq/levels-sq-med-japan-temple.jpg');
scenes.push(japan);

var volcano = new Scene (
  'Volcano',
  'images/levels300sq/levels-sq-med-volcano.jpg');
scenes.push(volcano);

var spaceStation = new Scene (
  'Space Station',
  'images/levels300sq/levels-sq-med-space-station.jpg');
scenes.push(spaceStation);

var mtRainier = new Scene (
  'Mt. Rainier',
  'images/levels300sq/levels-sq-med-mt-rainier-sunset.jpg');
scenes.push(mtRainier);

var desert = new Scene (
  'Desert',
  'images/levels300sq/levels-sq-med-desert-orange.jpg');
scenes.push(desert);

var castle = new Scene (
  'Castle',
  'images/levels300sq/levels-sq-med-castle.jpg');
scenes.push(castle);

// TEMPLATE EXAMPLE
// parameters: (name, image)
// types: string, string
// var japan = new Scene (
//   'Japan Year 1185',
//   'images/japansmall.jpg');
// console.log(japan);
// scenes.push(japan);

// RELATIVE FILE PATHS
// images/levels300sq/levels-sq-med-astronaut.jpg
// images/levels300sq/levels-sq-med-castle.jpg
// images/levels300sq/levels-sq-med-desert-orange.jpg
// images/levels300sq/levels-sq-med-desert-yellow.jpg
// images/levels300sq/levels-sq-med-field-tree.jpg
// images/levels300sq/levels-sq-med-field.jpg
// images/levels300sq/levels-sq-med-mountain.jpg
// images/levels300sq/levels-sq-med-mt-rainier-day.jpg
// images/levels300sq/levels-sq-med-mt-rainier-distance.jpg
// images/levels300sq/levels-sq-med-mt-rainier-sunset.jpg
// images/levels300sq/levels-sq-med-night-stars.jpg
// images/levels300sq/levels-sq-med-spaceship.jpg

// images/levels150sq/levels-sq-sm-astronaut.jpg
// images/levels150sq/levels-sq-sm-castle.jpg
// images/levels150sq/levels-sq-sm-desert-orange.jpg
// images/levels150sq/levels-sq-sm-desert-yellow.jpg
// images/levels150sq/levels-sq-sm-field-tree.jpg
// images/levels150sq/levels-sq-sm-field.jpg
// images/levels150sq/levels-sq-sm-japan-temple.jpg
// images/levels150sq/levels-sq-sm-mountain.jpg
// images/levels150sq/levels-sq-sm-mt-rainier-day.jpg
// images/levels150sq/levels-sq-sm-mt-rainier-distance.jpg
// images/levels150sq/levels-sq-sm-mt-rainier-sunset.jpg
// images/levels150sq/levels-sq-sm-night-stars.jpg
// images/levels150sq/levels-sq-sm-space-station.jpg
// images/levels150sq/levels-sq-sm-spaceship.jpg
// images/levels150sq/levels-sq-sm-volcano.jpg

//==========HISTORICAL FIGURES==========

// This object defines the historical figure.
var einstein = new HistoricalFigure ('Albert MF Einstein', ['Advice from a genius, use GOOGLE!'], 'Hello friend my name is Albert and I\’m here to assist you. Please click on a portal below to begin your journey to fix time. Yell E=MC\xB2 as you jump into the portal!', ['images/albert.jpg']);
historicalFigures.push(einstein);

var bigfoot = new HistoricalFigure ('Bigfoot', 'Crush puny enemy!', 'Me Bigfoot. I help you.', ['images/figures300sq/figures-sq-med-bigfoot.jpg']);
historicalFigures.push(bigfoot);

var darwin = new HistoricalFigure ('Charles Darwin', 'Darwin Award for this enemy.', 'Good day, my name is Darwin and I\’m here to assist you.', ['images/figures300sq/figures-sq-med-darwin-front.jpg']);
historicalFigures.push(darwin);

var elizabeth = new HistoricalFigure ('Queen Elizabeth', 'You\'ve got me mad!', 'Hello pleb, I am the Queen, but I\'ll help you anyway.', ['images/figures300sq/figures-sq-med-queen-hat.jpg']);
historicalFigures.push(elizabeth);

var elvis = new HistoricalFigure ('Elvis', 'You ain\'t nothing but a hounddog. Chew \'em up!', 'I\'m back from the dead. I will help you with my musical ways.', ['images/elvis-1999737.png']);
historicalFigures.push(elvis);

//==========ENEMIES==========

var jarJarBinks = new Enemy ('Jar Jar Binks', 'images/Jar_Jar_aotc.jpg', 'Me\'s truly best character!');
enemies.push(jarJarBinks);

var unicorn = new Enemy('(Real) Unicorn', 'images/unicorn.jpg', 'Hi ther-- I MEAN...NEIGHHH');
enemies.push(unicorn);

var adam = new Enemy('The Adam', 'images/monsters300sq/monsters-sq-med-adam.png', 'Fundamentally...');
enemies.push(adam);

var darth = new Enemy ('Darth Vader', 'images/darth-vader-1282288.jpg', 'The Empire will defeat you!');
enemies.push(darth);

var trex = new Enemy ('T-rex', 'images/trex.jpg', 'RAWWWRRRRR!!!');
enemies.push(trex);

var plesiosaur = new Enemy ('Nessie Plesiosaur', 'images/monsters300sq/monsters-sq-med-dinosaur.jpg', 'RAWWWRRRRR!!!');
enemies.push(plesiosaur);

var hitler = new Enemy ('Adolf Hitler', 'images/monsters300sq/monsters-sq-med-hitler.jpg', 'Narp!');
enemies.push(hitler);

var kim = new Enemy ('Kim Jong-un', 'images/monsters300sq/monsters-sq-med-kim.jpg', 'Launch!');
enemies.push(kim);

var robotLady = new Enemy ('Robot Lady', 'images/monsters300sq/monsters-sq-med-robot-lady.jpg', 'Wat?');
enemies.push(robotLady);

// Final question boss. Won't be put into normal enemy array.
var dalek = new Enemy ('Dalek', 'images/monsters300sq/monsters-sq-med-dalek.jpg', 'Exterminate!');
