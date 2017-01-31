import {
  create,
  fillable,
  clickable,
  text,
  isVisible

} from 'ember-cli-page-object';

export default create({
  gameStartText : text('[data-test-id="game-start-notification"]'),
  fillLetterField: fillable('[data-test-id="fill-letter-input"]'),
  isButtonCheckVisible: isVisible('[data-test-id="button-check"]'),
  submitGuess: clickable('[data-test-id="button-check"]'),
  guessedLetters: text('[data-test-id="guessed-letters"]'),
  guessesCount: text('[data-test-id="guesses-count"]'),
  guessCorrectCount: text('[data-test-id="guesses-correct-count"]'),
  noValueGuessLetterFieldInput: text(('[data-test-id="no-value-notification"]')),
  isCorrectLetter: text('[data-test-id="correct-letters"]'),
  isGameWonNotification: text('[data-test-id="game-won-notification"]'),
  isGameOverNotification: text('[data-test-id="game-lost-notification"]'),
  isbuttonNewGameVisible : isVisible('[data-test-id="new-game-button"]'),
  buttonNewGame: clickable('[data-test-id="new-game-button"]'),
  isDifficultyButtonVisible: text('[data-test-id="difficulty-button"]'),
  buttonChooseDifficultyLevel: clickable('[data-test-id="difficulty-button"]'),
  isButtonEasierWordsVisible: text('[data-test-id="easier-words"]'),
  buttonEasierWords: clickable('[data-test-id="easier-words"]'),
  buttonHarderWords: clickable('[data-test-id="harder-words"]'),
  makeGuess: function(letter) {
    this.fillLetterField(letter);
    this.submitGuess();
  },
  startGame: function () {
    this.buttonChooseDifficultyLevel();
    this.buttonEasierWords();
  }
});

