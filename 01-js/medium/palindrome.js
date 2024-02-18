/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
  let start=0;
  let end=str.length-1;
  console.log(str);
  while(start<end){
    if(str.charAt(start)!=str.charAt(end))
      return false;
    else{
    start++;
    end--;
    }
  }
  return true;
}
//console.log(isPalindrome("Eva, can I see bees in a cave?"))
module.exports = isPalindrome;
