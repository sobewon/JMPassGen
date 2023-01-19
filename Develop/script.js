// Assignment code here
var charsL = "abcdefghijklmnopqrstuvwxyz"
var charsU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var charsS = "!@#$%^&*()"

function generatePassword() {
  var charsAll = ""
  var pass = ""
  var passLength = prompt("How many characters would you like your password to be? \n(Must be at least 8 and less than 128 characters)\nDefault is  set to 8");
  var lower = confirm("Include lower case letters?")
  var upper = confirm("Include UPPER CASE letters?")
  var numb = confirm("Include numbers?")
  var special = confirm("Include special characters? \nExample; !@#$%^&*()")

  // if statement to set default pass to 8 even when no input is selected
  if (passLength === "") {
    passLength = 8
  }
  // if statements to combine all wanted characters into a single string
  if (lower === true) {
    charsAll = charsL
    console.log("lowers")
  }
  if (upper === true) {
    charsAll = charsAll + charsU
    console.log("uppers")
  }
  if (numb === true) {
    charsAll = charsAll + numbers
    console.log("numbers")
  }
  if (special === true) {
    charsAll = charsAll + charsS
    console.log("spec")
  }

  for (var i=0; i < passLength; i++) {
    pass = pass + charsAll[Math.floor(Math.random() * charsAll.length)]
  }
  console.log(pass)
  return pass
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
