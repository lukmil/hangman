import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hangman', function() {
    this.route('letter');
    this.route('guess');
  });
});

export default Router;
