import {
  create,
  fillable,
  clickable,
  text,
  isVisible

} from 'ember-cli-page-object';

export default create({
  gameStartText : text('h1:eq(0)'),
  fillLetterField: fillable('input'),
  isButtonCheck: isVisible('button'),
  submitGuess: clickable('button'),
  guessedLetters: text('h3'),
  guessesCount: text('h4:eq(0)'),
  guessCorrectCount: text('h4:eq(1)'),
  noValueGuessLetterFieldInput: text('.emptyValue'),
  isCorrectLetter: text('h2'),
  isGameWonNotification: text('h1:eq(0)'),
  isGameOverNotification: text('h1:eq(0)'),
  isbuttonNewGameVisible : isVisible('button'),
  buttonNewGame: clickable('button'),
  makeGuess: function(letter) {
    this.fillLetterField(letter);
    this.submitGuess();
  }
});

