export default function () {
  this.timing = 500; // default
  this.get('/words', {"errors": [{"status": "400", "title": "No words", "source": {"pointer": null}}]}, 400);

  this.get('/words2', function (schema) {
    var words = schema.words.where({});
    var random = Math.floor((Math.random() * words.length) + 1);
    return words.models[random - 1];
  });
}
