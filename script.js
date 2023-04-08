let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
let textUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
let textLower = "abcdefghijklmnopqrstuvwxyz".split('');
let textNum = "1234567890".split('');
let textChar = '!@#$%^&*?'.split('');
let newPassword = [];
let megaArray = [];
let x = [];
let passwordLength = "";
passwordLength = prompt("How long would you like your password to be?  Please enter a number between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid length for your password.  Choose a number between 8 and 128");
    generatePassword();
  } else {
    upper = confirm("Would you like to include upper case letters?");
    if (upper) {
      megaArray = megaArray.concat(textUpper);
      let y = textUpper[Math.floor(Math.random() * textUpper.length)];
      x.push(y);
    }
    lower = confirm("Would you like to include lower case letters?");
    if (lower) {
      megaArray = megaArray.concat(textLower);
      let y = textLower[Math.floor(Math.random() * textLower.length)];
      x.push(y);
    }
    number = confirm("Would you like to include numbers?");
    if (number) {
      megaArray = megaArray.concat(textNum);
      let y = textNum[Math.floor(Math.random() * textNum.length)];
      x.push(y);
    }
    char = confirm("Would you like to include special characters?");
    if (char) {
      megaArray = megaArray.concat(textChar);
      let y = textChar[Math.floor(Math.random() * textChar.length)];
      x.push(y);
    }
    for (let i = x.length; i < passwordLength; i++) {
      newPassword += (megaArray[Math.floor(Math.random(i) * (megaArray.length))]);
      }  
    } 
    
    for (let i = 0; i < x.length; i++) {
      newPassword += x[i];
    }
    
    return newPassword
  }


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
