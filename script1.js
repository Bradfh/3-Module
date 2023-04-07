let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
let numBers = "1234567890".split('');
let charSpecial = "!@#$%^&*()-+?".split('');
let megaArray = [];
let upperChoice = false;
let lowerChoice = false;
let numChoice = false;
let specChoice = false;
let newPassword = '';


let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
    passwordCharacters();
    let newPassword = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

function passwordCharacters() {
  let passwordLength = prompt("How many characters long would you like your password to be? Please choose a number between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128 || isNaN) {
        alert("Please select a valid number between 8-128");
            passwordCharacters();
    } else {
        generateUpper();
    }
}

function generateUpper() {
    let upperChoice = confirm("Would you like to include upper case letters?");
        if (upperChoice) {
            megaArray = megaArray.concat(upperCase);
            generateLower();
        } else {
            generateLower();
        }
}

function generateLower() {
    let lowerChoice = confirm("Would you like to include lower case letters?");
        if (lowerChoice) {
            megaArray = megaArray.concat(lowerCase);
            generateNumber();
        } else {
            generateNumber();
        }
}

function generateNumber() {
    let numChoice = confirm("Would you like to include numbers?");
        if (numChoice) {
            megaArray = megaArray.concat(numBers);
            generateSpecial();
        } else { 
            generateSpecial();
        }
}

function generateSpecial() {
    let specChoice = confirm("Would you like to include special characters?");
        if (specChoice) {
            megaArray = megaArray.concat(charSpecial);
            generatePassword();
        } else {
            generatePassword();
        }
}

function generatePassword() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;
    for (let i = 0; i < passwordLength; i++) {
        newPassword += megaArray[Math.floor(math.random() * megaArray.length)];
    } 
        if (upperChoice) {
            for (let i=0; i < passwordLength; i++) {
                if (upperCase.indexOf(newPassword[i]) > -1) {
                    hasUpper = true;
                }
            }
        } else {
            hasUpper = true;
        }
        
        if (lowerChoice) {
            for (let i=0; i < passwordLength; i++) {
                if (lowerCase.indexOf(newPassword[i]) > -1) {
                    hasLower = true;
                }
            }
        } else {
            hasLower = true;
        }

        if (numChoice) {
            for (let i=0; i < passwordLength; i++) {
                if (numBers.indexOf(newPassword[i]) > -1) {
                    hasNumber = true;
                }
            }
        } else {
            hasNumber = true;
        }
    
        if (specChoice) {
            for (let i=0; i < passwordLength; i++) {
                if (charSpecial.indexOf(newPassword[i]) > -1) {
                    hasSpecial = true;
                }
            }
        } else {
            hasSpecial = true;
        }

    if (hasUpper && hasLower && hasNumber && hasSpeical) {
        return newPassword;
    }
}



















/* ## Acceptance Criteria

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