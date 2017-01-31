export default function () {
  this.get('/words', function (schema) {
     var words = schema.words.where({});
     var random = Math.floor((Math.random() * words.length)+1);
     return words.models[random-1];
  });
 }
