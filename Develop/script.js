// Assignment code here
function generatePassword() {
  let validSymbols =""

  const passwordLength=window.prompt("How long should the password be ? Choose between 8-128 characters.")
console.log (passwordLength)

const upperCase=window.confirm("Do you want an upper case letter?")
console.log (upperCase)

const lowerCase=window.confirm("Do you want lower case letter?")

const numbers=window.confirm("Do you want numbers in password?")

const specialCharacters=window.confirm("Do you want special characters?")
// possible solution
 // if (passwordLength === "" || passwordLength === null) {
  //  window.alert ("You need to provide a valid answer! Please choose betwwen 8 -128 characters.");
  

  //return passwordLength();
//}

if (passwordLength >= 8 && passwordLength <= 128){
  //continue with password
} else {
  window.alert ("You need to provide a valid answer! Please choose betwwen 8 -128 characters.");
}


 if (upperCase) {
  validSymbols += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
 }

 if (lowerCase) {
  validSymbols += "abcdefghijklmnopqrstuvwxyz"
 }

 if (numbers) {
  validSymbols += "1234567890"
 }

 if (specialCharacters){
  validSymbols += "!@#$%^&*()-+~"
 }
 console.log (validSymbols)

 let password=""

 for (let index = 0; index < passwordLength; index++) {
  const randomNumber=Math.floor(Math.random () * validSymbols.length)
  password  += validSymbols[randomNumber]
  console.log (password)
 }
 return password
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