import {test} from 'qunit';
import moduleForAcceptance from 'ember-hangman/tests/helpers/module-for-acceptance';
//import game from '../pages/hangman';
import home from '../pages/home';
moduleForAcceptance('Acceptance | application');

// test('visiting /application', function (assert) {
//   server.create('word', {title: "as"});
//   home.visit();
//
//   andThen(function () {
//     assert.equal(currentURL(), '/');
//     // game.makeGuess("L");
//   // }).andThen(function () {
//   //   assert.equal(game.guessedLetters, "Spėtos raidės: L");
//   //   assert.equal(game.gameStartText, "Žaidimas vyksta");
//     assert.equal(home.errorNotification , "Klaidutė");
//   });
// });

test('if no data given', function (assert) {
  server.get('/words', {"errors": [{"status": "400", "title": "Invalid country", "source": {"pointer": null}}]}, 400);
  home.visit();
  andThen(() => {
    assert.equal(home.errorNotification, "Klaidutė");
  });

  //

});
