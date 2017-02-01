import {
  create,
  fillable,
  clickable,
  text,
  isVisible

} from 'ember-cli-page-object';

export default create({
  isDifficultyButtonVisible: text('[data-test-id="difficulty-button"]'),
  buttonChooseDifficultyLevel: clickable('[data-test-id="difficulty-button"]'),
  isButtonEasierWordsVisible: text('[data-test-id="easier-words"]'),
  buttonEasierWords: clickable('[data-test-id="easier-words"]'),
  buttonHarderWords: clickable('[data-test-id="harder-words"]'),
  startGame: function () {
    this.buttonChooseDifficultyLevel();
    this.buttonEasierWords();
  }
});

