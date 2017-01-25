import Ember from 'ember';

export default Ember.Component.extend({
  word: 'zodelis',
  showEmptyValue: false,
  uniqueWordLetters : Ember.computed.uniq('wordLetters'),
  wordLength: Ember.computed('word', function(){
    return this.get('word').length; }),
  guessedLetters: Ember.A(),
  init: function() {
    this._super(...arguments);
    this.set('guessedLetters', Ember.A())
  },
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
    var page = "http://lukmil.stud.if.ktu.lt/hangman/stage";
    var falseGuesses = guessTotal - correctTotal;
    for (var i =0; i<7; i++ ){
      if ( falseGuesses === i ){
        return page + (i+1) +".png" ;
      }}
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
