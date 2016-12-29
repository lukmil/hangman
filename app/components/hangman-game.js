import Ember from 'ember';

export default Ember.Component.extend({
  word: 'zodelis',
  uniqueWordLetters : Ember.computed.uniq('wordLetters'),
  wordLength: Ember.computed('word', function(){
    return this.get('word').length; }),
  guessedLetters: Ember.A(),
  wordLetters: Ember.computed('word', function() {
    return this.get('word').split('');
  }),
  totalGuesses: Ember.computed('guessedLetters.[]', function() {
    return this.get('guessedLetters');  }),
  totalGuessesLength: Ember.computed('guessedLetters.[]', function(){
    return this.get('guessedLetters').length;  }),
  countCorrectGuesses: Ember.computed('totalGuesses',function(){
    var differentLettersInWord = this.get('uniqueWordLetters');
    var guessedLetters = this.get('guessedLetters');
    var total = 0;
    for(var i =0; i<differentLettersInWord.length; i++){
      for(var j =0; j<guessedLetters.length;j++) {
        if (differentLettersInWord[i] === guessedLetters[j]) {
        total+= 1;
        }
      }
    }
    return total;
  }),
  isGameWon: Ember.computed('totalGuesses',function(){
    var differentLettersInWord = this.get('uniqueWordLetters');
    var sumCorrectGuesses = this.get('countCorrectGuesses');
    if(differentLettersInWord.length === sumCorrectGuesses){
      return true;}
  }),
  isGameOver: Ember.computed('totalGuesses',function(){
    var totalGuessesLength = this.get('totalGuessesLength');
    var sumCorrectGuesses = this.get('countCorrectGuesses');
    if(8 === totalGuessesLength-sumCorrectGuesses){
      return true;}
  }),
  showLetters: Ember.computed('guessedLetters.[]', function(){
var wordLetters = this.get('wordLetters');
var guessedLetters = this.get('guessedLetters');
    var m =[];
    for (var i =0;i<wordLetters.length;i++){
      m.push("_");
    }
    for( i=0;i<wordLetters.length; i++){
      for(var j=0; j<guessedLetters.length;j++){
        if (wordLetters[i] === guessedLetters[j]){
          m[i] = guessedLetters[j];
        }
      }
    }
    return m;
  }),
  showPictures: Ember.computed('totalGuesses', function(){
    var guessTotal = this.get('totalGuessesLength');
    var correctTotal = this.get('countCorrectGuesses');
    var falseGuesses = guessTotal - correctTotal;
    if ( falseGuesses === 0 ){
      return "http://lukmil.stud.if.ktu.lt/hangman/stage1.png"; }
    else if (falseGuesses === 1) {
      return "http://lukmil.stud.if.ktu.lt/hangman/stage2.png"; }
    else if (falseGuesses === 2) {
      return "http://lukmil.stud.if.ktu.lt/hangman/stage3.png"; }
    else if (falseGuesses === 3) {
      return "http://lukmil.stud.if.ktu.lt/hangman/stage4.png"; }
    else if (falseGuesses === 4) {
      return "http://lukmil.stud.if.ktu.lt/hangman/stage5.png"; }
    else if (falseGuesses === 5) {
      return "http://lukmil.stud.if.ktu.lt/hangman/stage6.png"; }
    else if (falseGuesses === 6) {
      return "http://lukmil.stud.if.ktu.lt/hangman/stage7.png"; }
    else if (falseGuesses === 7) {
      return "http://lukmil.stud.if.ktu.lt/hangman/stage8.png"; }
    else {
      return "http://lukmil.stud.if.ktu.lt/hangman/stage9.png"; }
  }),
  actions: {
    addLetter: function(){
      var letter = this.get('letter');
      this.get('guessedLetters').addObject(letter);
    },
    newGame: function(){
       this.set('guessedLetters', []);
       this.set('word', "labas");
    }
}
});
