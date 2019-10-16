const IsogramFinder = function (word) {
  this.wordArray = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return this.wordArray.every((letter, index) => {
    return this.wordArray.indexOf(letter) === index;
  })
}

module.exports = IsogramFinder;
