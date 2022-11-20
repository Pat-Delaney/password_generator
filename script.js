// Assignment Code
var generateBtn = document.querySelector("#generate");
// var wantNumbers = null;
// var wantLower = null;
// var wantCap = null;
// var wantSymbols = null;
// var lower = "abcdefghijklmnopqrstuvwxyz";
// var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var symbols = ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
// var numbers = "1234567890";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// function generatePassword(){
  // var desiredLength = prompt("How long would you like your password?");
  // desiredLength = parseInt(desiredLength);
  // var pool = null;
  // if (desiredLength < 8 || desiredLength > 128){
  //  alert("Please choose a number between 8 and 128.");
  
  // }
  // else{
    // wantSymbols = confirm("Would you like symbols in your password?");
    // wantCap = confirm("Would you like to have capital letters in your password?");
    // wantLower = confirm("Would you like lowercase letters in your password?");
    // wantNumbers = confirm("Would you like numbers in your password?");
  //   if (wantSymbols){
  //   pool += symbols;
  //   }
  //   if (wantCap){
  //   pool += cap;
  //   }
  //   if (wantLower){
  //     pool += lower;
  //   }
  //   if (wantNumbers){
  //    pool += numbers;
  //   }
  //   if (!wantNumbers&&!wantCap&&!wantSymbols&&!wantLower){
  //     alert("Unable to generate password based on criteria!")
  //   }
  // }
  //   var result = "‎" ;
  // for (var i = 0; i < desiredLength; i++){
  //     result += pool[Math.floor(Math.random() * pool.length)];
  //  }
  
  // console.log(pool);
  // console.log(pool.length)
  // console.log(desiredLength);
  // console.log(result);
  // return result;
// }


var library = {
  1 : "1234567890",
  2 : ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`,
  3 : "abcdefghijklmnopqrstuvwxyz",
  4 : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  function generatePassword(){
    var desiredLength = prompt("How long would you like your password?");
    desiredLength = parseInt(desiredLength);
    var choice = {
      1: confirm("Would you like numbers in your password?"),
      2: confirm("Would you like symbols in your password?"),
      3: confirm("Would you like lowercase letters in your password?"),
      4: confirm("Would you like to have capital letters in your password?")
          
  }
  var pool = function(){
    for (var i = 1;i < Object.keys(choice).length;i++){
    if (choice[i]){
      x += library[i];
    }
  }
    return x;
  }
    var result = function(){
      for (i = 0;i <desiredLength.length,i++;){
        result += pool[Math.floor(Math.random()*pool.length)];
        }
    }
  }

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
