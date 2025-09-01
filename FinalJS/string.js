// Question 1: Reverse a String
// Problem
// Given a string s, return the string reversed without using the built-in .reverse() method.

// Input
// A single string s consisting of letters, digits, spaces, or symbols.

// Output
// A string that represents the reverse of s.

// Constraints
// 1 <= s.length <= 10^5

// String may contain spaces, digits, or special characters.

// Example 1
// Input: "hello"
// Output: "olleh"

// Example 2
// Input: "Amazon123"
// Output: "321nozamA"


const input = 'hello';

function reverseStr(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result
}

// console.log(reverseStr(input))



// Q2: Palindrome Check  
// Write a function isPalindrome(s) that returns true if s is a palindrome, and false otherwise.  
// Example:  
// isPalindrome("madam") => true  
// isPalindrome("hello") => false  



function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr === str
}

// console.log(isPalindrome('nitin'))




// Q3: Count Vowels  
// Write a function countVowels(s) that returns the number of vowels (a, e, i, o, u) in the string s.  
// Example:  
// countVowels("hello") => 2  
// countVowels("Capgemini") => 4  


function countVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (vowels.includes(str[i])) {
      count++
    }
  }

  return count
}
let input3 = 'abhishek'
// console.log(countVowels('Capgemini'))





// Q4: First Non-Repeating Character  
// Write a function firstNonRepeatingChar(s) that returns the first character in s that does not repeat.  
// If all characters repeat, return -1.  

// Example:  
// firstNonRepeatingChar("amazon") => "m"  
// firstNonRepeatingChar("aabbcc") => -1  


function firstNonRepeatingChar(str) {
  let result = {};
  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }


  for (let char in result) {
    // console.log(char)
    if (result[char] === 1) {
      return char
    }

  }

  return null
}
// console.log(firstNonRepeatingChar('aabcb'))




// Q5: Anagram Check  
// Write a function areAnagrams(s1, s2) that returns true if s1 and s2 are anagrams of each other, and false otherwise.  

// Example:  
// areAnagrams("listen", "silent") => true  
// areAnagrams("hello", "world") => false  

function areAnargans(strOne, strTwo) {
  if (strOne.length !== strTwo.length) return false;
  let count = {};
  for (let char in strOne) {
    count[char] = [count[char] || 0] + 1;
  }

  for (let char in strTwo) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true
}

// console.log(areAnargans('listen', 'silent'))



// Q6: Capitalize Words  
// Write a function capitalizeWords(s) that returns the string with the first letter of each word capitalized.  

// Example:  
// capitalizeWords("hello world") => "Hello World"  
// capitalizeWords("infosys tcs") => "Infosys Tcs"  


function capitalizeWords(str) {
  let capital =
    str.split(' ')
      .filter(words => words.length > 0)
      .map(words => words.charAt(0).toUpperCase() + words.slice(1))
      .join(' ')

  return capital
}

// console.log(capitalizeWords('hello world abhishek this side'))




// Q7: String Compression  
// Write a function compressString(s) that compresses the string by replacing consecutive repeating characters with the character followed by its count.  
// If the compressed string is not shorter, return the original string.  

// Example:  
// compressString("aaabb") => "a3b2"  
// compressString("abc") => "abc"  


function CompressString(str) {
  let result = ''
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1
  }

  for (let key of Object.keys(count)) {
    let value = count[key];

    if (value > 1) {
      result += (key + value)
    } else {
      result += key
    }

  }

  return result
}

// console.log(CompressString('aaabcaabm'))




// Q8: Remove Whitespace  
// Write a function removeWhitespace(s) that returns the string s with all spaces removed.  

// Example:  
// removeWhitespace("a c c e n t u r e") => "accenture"  
// removeWhitespace(" hello world ") => "helloworld"  


function removeWhiteSpace(str) {
  let result = str.replace(/\s/g, '');

  return result;
}

// console.log(removeWhiteSpace('a c c e n t  r e'))



// Q9: Longest Word  
// Write a function longestWord(s) that returns the longest word in the given sentence s.  
// If multiple words have the same length, return the first one.  

// Example:  
// longestWord("Cognizant is hiring developers") => "developers"  
// longestWord("I love JS") => "love"  



function longestWord(str) {

  let wordsArr = str.trim().split(' ');
  let max = wordsArr[0];
  for (let value of wordsArr) {
    if (value.length > max.length) {
      max = value;
    }
  } return max
}

// console.log(longestWord('I love JS'))




// Q10: Most Frequent Character  
// Write a function mostFrequentChar(s) that returns the character that appears most frequently in the string s.  
// If multiple characters have the same frequency, return the first one that appears.  

// Example:  
// mostFrequentChar("amazon") => "a"  
// mostFrequentChar("paytm") => "m"  


function mostFrequentChar(str) {
  let count = {};
  let frequentChar = '';
  for (let key of str) {
    count[key] = (count[key] || 0) + 1;
  }
  for (let key of Object.keys(count)) {
    const value = count[key]
    let max = count.a;

    if (value >= max) {
      frequentChar = key
    }
  }

  return frequentChar
}

// console.log(mostFrequentChar('paytm'))