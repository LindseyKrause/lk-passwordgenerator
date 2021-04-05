var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var characterSet = [];
var randomPassword = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Choose Password Length between 8-128 characters
var promptPlength = parseInt(prompt("Choose password length between 8-128 characters"));
// Continues once user input is validated
// Start user input prompts
var promptLowercase = confirm("Will this contain Lowercase letters?");
var promptUppercase = confirm("Will this contain Uppercase letters?");
var promptNumeric = confirm("Will this contain numbers?");
var promptSpecial = confirm("Will this contain special characters?");
console.log(promptLowercase);
if (!generateBtn) {
  alert("This needs a value");
  generatePassword();
}
//input validated to include at least one of the criteria
if (promptLowercase && promptUppercase && promptNumeric && promptSpecial === false) {
  alert("You must choose at least one password criteria");
  generatePassword();
}
else
  calculatePassword();

function calculatePassword() {
  console.log("calculatePassword begins running")

  if (promptPlength >= 8 && promptPlength <= 128) {
    if (promptLowercase === true) {
      randomPassword = [characterSet.concat(lower)];
      console.log(randomPassword);
    }
    if (promptUppercase === true) {
      randomPassword = [characterSet.concat((upper), (lower))];
      console.log(randomPassword);

    }
    if (promptNumeric === true) {
      randomPassword = [characterSet.concat((numbers), (upper), (lower))];
      console.log(randomPassword);

    }
    if (promptSpecial === true) {
      randomPassword = [characterSet.concat((special), (numbers), (upper), (lower))];
      console.log(randomPassword);
    }
    console.log(characterSet);
    console.log(randomPassword.length);
    console.log(typeof characterSet);
// This is where it breaks, for loop is not referring to the arrays 
    for (var i = 0; i < promptPlength.length; i++) {
      console.log("for loop");
      var value = Math.floor(Math.random() * promptPlength.length(""));
      return value;
    }
  }
}
function generatePassword() {
  return randomPassword;
}
console.log("generatePassword");
// Write password to the #password input
function writePassword() {
  console.log("starting write password function");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

