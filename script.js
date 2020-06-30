// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create a generated password
// Store selections for password generations
  // Create one master array of choices
// Password matches selection
// Password is generated - function
  // Loop is how many characters user selected
    // Math.random to get character
// Password is displayed in alert or presented in box

// Length of password - 8 characters, no more than 128 characters
// Lowercase
// Uppercase
// Numbers
// Special characters
var numericArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharactersArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
]

var userChoices = []
// Create series of prompts with password criteria
//var length = prompt("How many characters would you like for your password?");
  //Alert if selection is not within parameters
  promptLength()
  
function promptLength() {
  var length = prompt("How many characters would you like for your password?");
 
  if (parseInt(length) >= 8 && parseInt(length) <= 128) {
    var lowerCase = confirm("Will you be using lower case letters?");
    var upperCase = confirm("Will you be using upper case letters?");
    var numeric = confirm("Will you be using numbers?");
    var specialCharacters = confirm("Will you be using special characters?");  
    userChoices.push(lowerCase, upperCase, numeric, specialCharacters)
generatePassword()
    return
  }  
    alert("Please select a value between 8 and 128")
    promptLength() 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
