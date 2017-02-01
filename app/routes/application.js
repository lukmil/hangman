import Ember from 'ember';
import {task} from 'ember-concurrency';
const {RSVP} = Ember;

export default Ember.Route.extend({
  level: 1,

  model() {
    const level = this.get('level');
    let task = this.get('myTask');
    task.perform(level);
    return RSVP.hash({
      word: task,
      level: level
    });
  },

  myTask: task(function*(level) {
    return this.get('store').queryRecord('word', {level: level});

  }),//.restartable(),

  actions: {
    reloadLevel: function (level) {
      this.set('level', level);
      this.refresh();
    },
    chosenLevel(level){
      this.set('level', level);
      this.refresh();
    }
  }
});

