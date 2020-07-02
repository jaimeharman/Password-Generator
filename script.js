// Generate a password
var generateBtn = document.querySelector("#generate");
// Created arrays to include numbers, lowercase letters and special characters
var numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharactersArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
]
//Created prompts for user to select how many characters for password
function promptLength() {
  var length = prompt("How many characters would you like for your password?");
//User must choose between 8 and 128 characters for password. No more or less. User can confirm or deny use of any of the array choices. 
  if (parseInt(length) >= 8 && parseInt(length) <= 128) {
    var userChoices = {};
    var lowerCase = confirm("Will you be using lower case letters?");
    var upperCase = confirm("Will you be using upper case letters?");
    var numeric = confirm("Will you be using numbers?");
    var specialCharacters = confirm("Will you be using special characters?");
    userChoices.lowerCase = lowerCase;
    userChoices.upperCase = upperCase;
    userChoices.numeric = numeric;
    userChoices.specialCharacters = specialCharacters;
//If user goes outside of parameter choices, prompt returns to original question with an alert for user
    generatePassword(length, userChoices);
    return;
  }
  alert("Please select a value between 8 and 128");
  promptLength();
}
function generatePassword(length, userChoices) {
  var randomArr = []
  var i = 0
//If user selects a condition/expression and it it's true, the 
  while ( i < length) {
    if (userChoices.lowerCase) {
      var selectedLowercase = lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];
      randomArr.push(selectedLowercase)
      i++
    }

    if (userChoices.upperCase) {
      var selectedUpperCase = lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];
      var cappedSelectedupperCase = selectedUpperCase.toUpperCase()
      randomArr.push(cappedSelectedupperCase)
      i++
    }

    if (userChoices.numeric) {
      var selectedNumeric = numericArr[Math.floor(Math.random() * numericArr.length)];
      randomArr.push(selectedNumeric)
      i++
    }

    if (userChoices.specialCharacters) {
      var selectedSpecialCharacters = specialCharactersArr[Math.floor(Math.random() * specialCharactersArr.length)];
      randomArr.push(selectedSpecialCharacters)
      i++
    }
  }
  var password = randomArr.join("")
  writePassword(password)
}

// Write password to the #password input
function writePassword(password) {
  document.querySelector("#password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", promptLength);
