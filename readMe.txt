find max length of palindrome substring in a string

Solution:

1. find all (unique) substrings, by pushing into array of strings
2. check if palindrome, if yes, return length, otherwise return 0
3. return the max length

Note: let's ignore one letter words, e.g. "a" is not a palindrome, but "aa" is.

thank you,
sam klok


Output:

C:\Repos\palindrome>tsc

C:\Repos\palindrome>node js/findPalindromes.js
Input string: abatest
3
Input string: alph
0
Input string: bb
2
Input string: z
0
