
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/
var hasDoubleLetters = function(string) {
  var doubleLetter = false;
  for(var i = 0; i < string.length; i++){
    if(string[i] === string[i-1])
    doubleLetter = true;
  }
  return doubleLetter;
}

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
