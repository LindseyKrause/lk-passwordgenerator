
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var characterSet = "";
var randomPassword = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  //Choose Password Length between 8-128 characters
  var promptPlength = parseInt(prompt("Choose password length between 8-128 characters"));
  // Continues once user input is validated
  // Start user input prompts
  promptLowercase = confirm("Will this contain Lowercase letters?");
  promptUppercase = confirm("Will this contain Uppercase letters?");
  promptNumeric = confirm("Will this contain numbers?");
  promptSpecial = confirm("Will this contain special characters?");
  //input validated to include at least one of the criteria
  // if (!enter) {
  //   alert("This needs a value");
  //   generatePassword();
  // }

  // else if (promptPlength < 8 || promptPlength > 128) {
  //   enter = parseInt((prompt("You must choose between 8 and 128")));
  //   generatePassword();
  // }

  // else {
  if (promptLowercase && promptUppercase && promptNumeric && promptSpecial === false) {
    alert("You must choose at least one password criteria");
    generatePassword();
    // }
  }
  passwordContent();

  for (var [i] = 0; i < characterSet.length; i++) {
    var value = Math.floor(Math.random() * characterSet.length);
    value = randomPassword;
  }
}

function passwordContent() {
  if (promptPlength => 8 && promptPlength <= 128) {
    if (promptLowercase === true) {
      randomPassword = characterSet.concat.lower;
      console.log;
    }
    if (promptUppercase === true) {
      randomPassword = characterSet.concat.upper;
      console.log;

    }
    if (promptNumeric === true) {
      randomPassword = characterSet.concat.numbers;
      console.log;

    }
    if (promptSpecial === true) {
      randomPassword = characterSet.concat.special;
      console.log;
    }
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    // First if statement for user validation

