import {test} from "qunit";
import moduleForAcceptance from "ember-hangman/tests/helpers/module-for-acceptance";
import home from "../pages/home";
moduleForAcceptance('Acceptance | application');
test('show error if no data given', function (assert) {
  let adapterException = Ember.Test.adapter.exception;
  Ember.Test.adapter.exception = (error) => server.get('/words', {"errors": ["there was an error"]}, 400);

  //   assert.ok(dom.hasOne('error-message'), 'has error message');
  //   Ember.Test.adapter.exception = adapterException;

  server.get('/words', {"errors": ["there was an error"]}, 400);
  home.visit();
  andThen(() => {
    assert.ok(home.errorNotification, "there is error");
    return Ember.Test.adapter.exception = adapterException;
  });
});
