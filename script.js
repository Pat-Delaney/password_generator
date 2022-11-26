// Assignment Code
var generateBtn = document.querySelector("#generate");

var library = {
  1 : "1234567890",
  2 :" \"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  3 : "abcdefghijklmnopqrstuvwxyz",
  4 : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
  function generatePassword(){

    var desiredLength = prompt("How long would you like your password?");
    desiredLength = parseInt(desiredLength);  
    var pool = "";
    var result = "";

  if (desiredLength < 8 || desiredLength > 128){
   alert("Please choose a number between 8 and 128.");
   return "";
  }
  else{
    //Stores user choices as booleans in an object
    var choice = {
      1 : confirm("Would you like numbers in your password?"),
      2: confirm("Would you like symbols in your password?"),
      3: confirm("Would you like lowercase letters in your password?"),
      4: confirm("Would you like to have capital letters in your password?")      
    }
    if (!choice[0]&&!choice[1]&&!choice[2]&&!choice[3]){
            alert("Unable to generate password based on criteria!");
            return "";
          }
    else{
      //using variable i to reference both choice and library properties
      for (var i=0 ;i <= Object.keys(choice).length;i++){
        if (choice[i]){
        pool += library[i];
        }
      }
        
      for (var index = 0;index <= desiredLength; index++){
          result += pool[Math.floor(Math.random()*pool.length)];
          }
        console.log(pool);
        console.log(choice);
      return result;
    }
  }
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 


