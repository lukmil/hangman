import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import level from '../../pages/level';
moduleForComponent('hangman-level', 'Integration | Component | hangman level', {
  integration: true,
  beforeEach() {
    level.setContext(this);
    this.set('xx',function () {
    });
    this.render(hbs`{{hangman-level chosenLevel=(action xx)}}`);
  },
  afterEach(){
    level.removeContext();
  }
});

test('Check if button *harder words* action is working ', function (assert) {
  assert.expect(3);
  assert.ok(level.isDifficultyButtonVisible, "Matomi mygtukai sunkumo pasirinkimui");
  level.buttonChooseDifficultyLevel();
  assert.ok(level.isButtonEasierWordsVisible, "Matomas mygtukas *lengvesni zodziai*");
  this.set('xx', (actual) => {
    let expected = 2 ;
    assert.equal(actual, expected);
  });
  level.buttonHarderWords();

});

