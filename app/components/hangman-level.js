import Ember from 'ember';

export default Ember.Component.extend({
  isShowingDifficultyLevel: false,
  actions: {
    selectDifficultyLevel: function () {
      this.set('isShowingDifficultyLevel', true);
    },
    toggleDifficultyLevel(level){
      this.set('isGameOn', true);
      this.set('isShowingDifficultyLevel', false);
      this.attrs.chosenLevel(level);
    }
  }
});
