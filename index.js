function isPalindrome(word) {
  // Write your algorithm here
  let reversedString = "";
  for (let i = word.length - 1; i >= 0; i--){
    reversedString += word[i];
  }
  console.log(reversedString)

  if (reversedString === word){
    return true;
  }
  else{
    return false;
  }
}

/* 
  Add your pseudocode here

  iterate through string to make a new revesed string
  test if reversed string equals original sting
*/

/*
  Add written explanation of your solution here

  a new reversed string is made by iterating through the given string
  the new sting is then tested against the original
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
}

module.exports = isPalindrome;
