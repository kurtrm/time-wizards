'use strict';

// This object defines the player.
function Player (name, image, score) {
  this.name = name || ''; // Sets default values if necessary.
  this.image = image || '';
  this.score = score || 0;
  this.win = false;
  this.speech = '';
}

// This object defines the historical figure.
function HistoricalFigure (name, comments, intro, image) {
  this.name = name;
  this.comments = comments || ''; // Sets default values if necessary.
  this.intro = intro;
  this.image = image;
}
// This object defines the enemy.
function Enemy (name, image, speech) {
  this.name = name || ''; // Sets default values if necessary.
  this.image = image || '';
  this.speech = speech || '';
};

// This object defines the location (level).
function Scene (name, image) {
  this.name = name || ''; // Sets default values if necessary.
  this.image = image || '';
}

// This object defines the questions and answers.
function Question (question, answerChoices, correctAnswer, incorrectAnswerResponse) {
  this.question = question || ''; // Sets default values if necessary.
  this.answerChoices = answerChoices || [];
  this.correctAnswer = correctAnswer || 0;
  this.incorrectAnswerResponse = incorrectAnswerResponse || '';
}
