/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
var removeApostrophe = function(assertionText){
  var foundApost = false;
  for(var j = 0; j < assertionText.length; j = j +1){
    if(assertionText[j] === "'") {
      foundApost = true;
    }
  }
  return foundApost;
}
 var findLongestWord = function(stringOfWords) {
    var longestWord = ''
    var wordLength = 0
    var assertionArray = stringOfWords.split(' ');
    for(var i = 0; i < assertionArray.length; i++){
      if (assertionArray[i].length > wordLength && removeApostrophe(assertionArray[i]) === false){
        wordLength = assertionArray[i].length;
        longestWord = assertionArray[i];
      }
 }
   return longestWord
 }







console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
