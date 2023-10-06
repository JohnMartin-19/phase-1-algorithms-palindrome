function isPalindrome(word) {    
  var l = word.length;
  for (var i = 0; i < l / 2; i++) {
      if (word.charAt(i) !== word.charAt(l - 1 - i)) {
          return false;
      }
  }
  return true;
}

if (isPalindrome("1122332211")) {
  console.log("The word is a palindrome");
} else {
  console.log("The word is NOT a palindrome");
}

/* 
  Add your pseudocode here
  declare a function that takes a string as its arguements,check if the input arg is Palindrome, console the result.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
/*
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}
isPalindrome('racecar')
*/

