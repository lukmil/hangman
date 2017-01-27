import { test } from 'qunit';
import moduleForAcceptance from 'ember-hangman/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /application', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

/*test('test is game working well', function(assert) {
  visit('/');
  //feed same fake data. /word -> return "Lietuva"
  andThen(function() {
    makeGes("L");
    makeGes("i");
    makeGes("e");
    makeGes("t");
    asset
  });
});*/
