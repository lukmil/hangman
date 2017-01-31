import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import game from '../../pages/hangman';
moduleForComponent('hangman-game', 'Integration | Component | hangman game', {
  integration: true,
  beforeEach() {
    game.setContext(this);
    this.set('xx',function () {

    });
    this.render(hbs`{{hangman-game chosenLevel=(action xx) word="abc"  }}`);
  },
  afterEach(){
    game.removeContext();
  }
});
test('game starts', function (assert) {
  game.startGame();
  assert.equal(game.gameStartText, "Žaidimas vyksta");
  assert.ok(game.fillLetterField, "has input field");
  assert.ok(game.isButtonCheckVisible, "has button 'tikrinti'");
});
test('Check if guess submit input works', function (assert) {

  game.startGame();
  //a - is a guessed Letter
  game.makeGuess("a");
  assert.equal(game.guessedLetters, "Spėtos raidės: a");
  assert.equal(game.guessesCount, "Spėta kartų: 1");
});

test('Check if letter input field is not empty', function (assert) {
  game.startGame();
  game.makeGuess("");
  assert.equal(game.noValueGuessLetterFieldInput, "Empty Value");
});

test('Check if there is wrong letter', function (assert) {
  this.set('word', "abc");
  game.startGame();
  game.makeGuess("d");
  assert.equal(game.isCorrectLetter, "_ _ _ (3)");
});

test('Check if uppercase is given', function (assert) {
  this.set('word', "Abc");
  game.startGame();
  game.makeGuess("A");
  assert.equal(game.isCorrectLetter, "A _ _ (3)");
});


test('Check if there is correct letter', function (assert) {
  this.set('word', "abc");
  game.startGame();
  game.makeGuess("a");
  assert.equal(game.isCorrectLetter, "A _ _ (3)");
});
test('Check if there is Game Win ', function (assert) {
  this.set('word', "abc");
  game.startGame();
  game.makeGuess("a");
  assert.equal(game.isCorrectLetter, "A _ _ (3)");
  game.makeGuess("b");
  assert.equal(game.isCorrectLetter, "A B _ (3)");
  game.makeGuess("c");
  assert.equal(game.isCorrectLetter, "A B C (3)");
  assert.equal(game.isGameWonNotification, "Žaidimas Laimėtas!!!!");
});
test('Check if there is Game Over', function (assert) {
  this.set('word', "abc");
  game.startGame();
  game.makeGuess("q");
  game.makeGuess("w");
  game.makeGuess("r");
  game.makeGuess("t");
  game.makeGuess("y");
  game.makeGuess("u");
  game.makeGuess("o");
  game.makeGuess("p");
  assert.equal(game.isGameOverNotification, "Žaidimas pralaimėtas");
  assert.ok(game.isbuttonNewGameVisible, "Matomas buttonas New Game");
  game.buttonNewGame();
  assert.equal(game.gameStartText, "Žaidimas vyksta");
});

test('Check if button *harder words* action is working ', function (assert) {
  assert.expect(3);
  assert.ok(game.isDifficultyButtonVisible, "Matomi mygtukai sunkumo pasirinkimui");
  game.buttonChooseDifficultyLevel();
  assert.ok(game.isButtonEasierWordsVisible, "Matomas mygtukas *lengvesni zodziai*");
  this.set('xx', (actual) => {
    let expected = 2 ;
    assert.equal(actual, expected);
  });
  game.buttonHarderWords();

});
