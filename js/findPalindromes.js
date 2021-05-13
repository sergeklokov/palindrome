"use strict";
function findAllPalindromes(input) {
    console.log("Input string: " + input);
    console.log(findMaxLengthOfPalindrome(findAllSubstrings(input)));
}
function findMaxLengthOfPalindrome(substr) {
    var maxLength = 0;
    substr.forEach(function (s) {
        if (maxLength < isPalindrome(s)) {
            maxLength = isPalindrome(s);
            //console.log(s + " " + maxLength);
        }
    });
    return maxLength;
}
// if palindrome will return length > 0
// based on: https://basarat.gitbook.io/algorithms/quiz/palindrome
function isPalindrome(str) {
    if (str.length < 2)
        return 0; // let's ignore 1-letter words
    if (str.split('').reverse().join('') === str)
        return str.length;
    else
        return 0;
}
function findAllSubstrings(input) {
    // Note: curent compiler option do not allow empty strings
    var substr = [];
    for (var i = 0; i < input.length; i++) {
        for (var j = i + 1; j < input.length + 1; j++) {
            //console.log(input.slice(i, j));
            substr.push(input.slice(i, j));
        }
    }
    //substr.forEach(s => {  console.log(s);   });  //print for test
    var uniqSubstr = substr.filter(function (val, index) { return substr.indexOf(val) === index; }); // dedup by filtering could be other ways
    //uniqSubstr.forEach(s => {  console.log(s);   });  //print for test
    return uniqSubstr; // we will have duplicates
}
var input = "abatest"; // shoudl be 3 (aba)
findAllPalindromes(input);
// other unit tests:
findAllPalindromes("alph"); // not palindrome should be 0
findAllPalindromes("bb"); // should be 2
findAllPalindromes("z"); // shoudl be 0
