// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength=parseInt(prompt("input password length"));
var isUpper=confirm("uppercase?");
var isLower=confirm("lowercase?");
var isNum=confirm("numbers?");
var isSymbol=confirm("symbols?");
var str="";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function getRandomLowercase(){
  var lowercase="qwertyuiopasdfghjklzxcvbnm";
  return lowercase[Math.floor(Math.random()*lowercase.length)];  
}
function getRandomUppercase(){
  var uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
  return uppercase[Math.floor(Math.random()*uppercase.length)];
}
function getRandomNum(){
  var nums="1234567890";
  return nums[Math.floor(Math.random()*nums.length)];
}
function getRandomSymbol(){
  var symbols="~!@#$%^&*()_+-={}[]<>?"
  return symbols[Math.floor(Math.random()*symbols.length)];
}
function generatePassword(){
  while (str.length<passLength){
    if(passLength-1<8||passLength-1>128){
      passLength=parseInt(prompt("Please input a password length between 8 and 128 "))+1;
    }
    else{
      if(isUpper&&str.length<passLength){
        str += getRandomUppercase();
      }
      if(isLower&&str.length<passLength){
        str+=getRandomLowercase();
      }
      if(isNum&&str.length<passLength){
        str+=getRandomNum();
      }
      if(isSymbol&&str.length<passLength){
        str+=getRandomSymbol();
      }
    }
  }
return str;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
