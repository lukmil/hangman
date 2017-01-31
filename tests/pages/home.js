import {
  visitable,
  create,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  errorNotification: text('[data-test-id="error-notification"]')
});

