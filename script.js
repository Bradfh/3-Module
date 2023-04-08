/* let textUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let textLower = "abcdefghijklmnopqrstuvwxyz".split('');
let textNum = "1234567890".split('');
let textChar = '!@#$%^&*?'.split('');
let newPassword = [];
let megaArray = []; */



// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






function generatePassword() {
let textUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let textLower = "abcdefghijklmnopqrstuvwxyz".split('');
let textNum = "1234567890".split('');
let textChar = '!@#$%^&*?'.split('');
let newPassword = [];
let megaArray = [];
/* let upper = false;
let lower = false;
let number = false;
let char = false; */
let passwordLength = "";
passwordLength = prompt("How long would you like your password to be?  Please enter a number between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid length for your password.  Choose a number between 8 and 128");
    generatePassword();
  } else {
    upper = confirm("Would you like to include upper case letters?");
    if (upper) {
      megaArray = megaArray.concat(textUpper);
    }
    lower = confirm("Would you like to include lower case letters?");
    if (lower) {
      megaArray = megaArray.concat(textLower);
    }
    number = confirm("Would you like to include numbers?");
    if (number) {
      megaArray = megaArray.concat(textNum);
    }
    char = confirm("Would you like to include special characters?");
    if (char) {
      megaArray = megaArray.concat(textChar);
    }
    for (let i = 0; i < passwordLength; i++) {
      newPassword += megaArray[Math.floor(Math.random(i) * (megaArray.length))];
      } 
  } return newPassword
  }




// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}







  //Need the following variables:
  // selected length of the password
  //array of lowercase letters
  //array of uppercase letters
  //array of numbers
  //array of special characters
  //Use .split('') to create arrays?
  //to hold the password we're building
  // may need a variable to hold the mega-array

  //prompt for password length --> store in variable
  //validate the user input --> if user chooses < 8 or >128, alert that they need to choose a valid password length, they're going to need to restart OR call the function prompts of length again (recursion).  Calling multiple functions is generally cleaner
  // prompt -->  do they want uppercase letters?
  // prompt -->  do they want lowercase letters?
  // prompt -->  do they want numbers ?
  // prompt -->  do they want special characters ?
  // Validate that the user has chosen at least one character set --> if not, either have them start over OR recursively call the function that prompts for the character sets
  //witch each of these prompts, you need an array of those character types.  (instructor says using a mega-array is easier)
  // There needs to be at least one of each selected character type included in the password
  // Randomly generate a character from character set as it's chosen and add it to the end of the password that you are building ( .push() for an array or .concat() for a string)
  // for loop: 
  //for (var i = password.length -1; i < passwordLength; i++)
  // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
  //IF keepingthe character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will be array[number])
  // IF pushing to a mega-array randomly generate a a number to pull a character from the array
  // IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
  // return the generate password







/* ## User Story

  ```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

  ```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */