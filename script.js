// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberEl = document.getElementById("#numericCharacters");
var lowerEl = document.getElementById("#lowerCasedCharacters");
var upperEl = document.getElementById("#upperCasedCharacters");
var symbolEl = document.getElementById("#specialCharacters");

// Array of special characters to be included in password
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Array of numeric characters to be included in password
var numericCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//Placeholder for the choices the user makes
var selections

function getPassword() {
  // Variable to store length of password from user input
  var passLength = prompt('How many characters would you like? (8-128)');
  console.log(passLength)
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(passLength) === true) {
    alert('Password length must be provided as a number');
    return true;
  } else if (passLength < 8 || passLength > 128) {
    alert('Password must be at least 8-128 characters');
  }
  else {
  // Variable to store boolean regarding the inclusion of special characters
  var specialCharactersConfirm = confirm('do you want special characters?');

  // Variable to store boolean regarding the inclusion of numeric characters
  var numericCharactersConfirm = confirm('do you want to use numbers?');

  // Variable to store boolean regarding the inclusion of lowercase characters
  var lowerCasedCharactersConfirm = confirm('do you want to use lower cased letters?');

  // Variable to store boolean regarding the inclusion of uppercase characters
  var upperCasedCharactersConfirm = confirm('do you want to use upper cased letters?');
  };
//   // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (specialCharactersConfirm === false && numericCharactersConfirm === false && lowerCasedCharactersConfirm === false && upperCasedCharactersConfirm === false) {
    alert('Must select at least one character type');
    return;
  }
  // Object to store user input variables
  var passwordOptions = [numericCharacters, specialCharacters, upperCasedCharacters, lowerCasedCharacters];

  // Return the options object as the exported value of this function
  return passwordOptions;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // Runs the function that will generate the password
  var password = getPassword();
  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);