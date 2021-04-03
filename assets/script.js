
var promptUppercase;
var promptNumeric;
var promptPlength;
var promptSpecial;
var promptPlength;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatePw = ({
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
      promptNumeric = confirm("Will this contain numbers?");
      promptSpecial = confirm("Will this contain special characters?");
      promptUppercase = confirm("Will this contain Uppercase letters?");
      PromptLowercase = confirm("Will this contain Lowercase letters?");
      //input validated to include at least one of the criteria
      if (promptLowercase && promptUppercase && promptNumeric && promptSpecial === false) {
        alert("You must choose at least one password criteria");
        promptCriteria();
      }
      //only letters 
      if (promptNumeric === true && (promptSpecial, promptUppercase, promptLowercase) === false) {
        var numericPassword = document.getElementById("password").value; 
        for (var i = 0; i < (numericPassword * 10); i++) {
          // Generate a random number between 1 and 10
          // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
          var num = Math.floor(Math.random() * 10) + 1;
      }
    }
  }
}
    // Write password to the #password input
    //function writePassword() {
    //var password = generatePassword();
    //var passwordText = document.querySelector("#password");
    //Prompts for password criteria


    //Password Generated to match Criteria
    //Password displayed in alert or written to the page

    //passwordText.value = password;


    // Add event listener to generate button
    generateBtn.addEventListener("click", generatePw),
  //writePassword();