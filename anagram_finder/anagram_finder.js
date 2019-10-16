const AnagramFinder = function (word) {
  this.comparisonWord = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

  const prepWord = function(wordToSort){
    const wordToArray = wordToSort.toLowerCase().split('').sort();
    const wordToString = wordToArray.toString().replace(/,+/g, '')
    return wordToString;
  }

  const comparisonWordSorted = prepWord(this.comparisonWord);

  return otherWords.filter((word) => {
    if (word === this.comparisonWord) {
      return false;
    } else
    { const otherWordSorted = prepWord(word);
      return otherWordSorted === comparisonWordSorted;
    }
  })
};


module.exports = AnagramFinder;
