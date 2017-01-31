import Ember from 'ember';
const {RSVP} = Ember;

export default Ember.Route.extend({
  level: 1,

  model() {
    const level = this.get('level');
    return RSVP.hash({
      word: this.get('store').queryRecord('word', {level: level}).catch(function (error) {
      })
    });
  },

  afterModel(model) {
    if (!model.word) {
      model.error = "Klaidutė";
    }
  },

  actions: {
    reloadLevel: function (level) {
      this.set('level', level);
      this.refresh();
    },
    chosenLevel(level){
      this.send("reloadLevel", level);
      alert(level);
    }
  }
});
