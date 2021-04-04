
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var characterSet = "";
var randomPassword = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePassword = ({
  //Choose Password Length between 8-128 characters
  promptPlength = function () {
    parseInt(prompt("Choose password length between 8-128 characters"));
    // First if statement for user validation 
    if (!enter) {
      alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt((prompt("You must choose between 8 and 128")));
    } else {
      // Continues once user input is validated
      PromptLowercase = confirm("Will this contain Lowercase letters?");
      promptUppercase = confirm("Will this contain Uppercase letters?");
      promptNumeric = confirm("Will this contain numbers?");
      promptSpecial = confirm("Will this contain special characters?");
      //input validated to include at least one of the criteria
      if (promptLowercase && promptUppercase && promptNumeric && promptSpecial === false) {
        alert("You must choose at least one password criteria");
        promptCriteria();
      }
      //only Lowerletters 
      if (promptLowercase === true) {
        randomPassword = characterSet + lower;
        console.log;
      }
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
generatePassword();
