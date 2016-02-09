var pigLatin = new Object();

pigLatin.translate = function (string) {

  var vowels = ['a','e','i','o','u'];

  //If string begins with a vowel
  for (var i = 0; i < string.length; i++) {
    if (string[0] === vowels[i])
      return string + "ay";
  }

  var sentence = "";

  //If string is a sentence (has spaces)
  for (var i = 0; i < string.length; i++) {

    if (string[i] === ' ') {
      var array = string.split(" ");
      for (var j = 0; j < array.length; j++)
        sentence = sentence + pigLatin.translate(array[j]) + " ";

      return sentence.trim();
    }
  }

  //If string begins with a consonant preceding qu
  if (string.substring(1,3) === 'qu')
    return string.substring(3) + string[0] + string.substring(1,3)  + "ay";

  var firstTwo = string.substring(0,2);

  //If first two letters are 'ch'
  if (firstTwo === 'ch') {
    return string.substring(2) + firstTwo + "ay";
  }
  //If first three letters are 'thr'
  else if (string.substring(0,3) === 'thr') {
    return string.substring(3) + string.substring(0,3) + 'ay';
  }
  //If first three letters are 'sch'
  else if (string.substring(0,3) === 'sch') {
    return string.substring(3) + string.substring(0,3) + "ay";
   }
  //If first two letters are 'qu' or 'th'
  else if (firstTwo === 'qu' || firstTwo === 'th') {
    return string.substring(2) + firstTwo + "ay";
  }
  //Handles non-exception cases
  else {
    var newString = string.substring(1);
    return newString + string[0] + "ay";
  }

};


module.exports = pigLatin;