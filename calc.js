console.log("Hello, World!");

function doesMath( num1, operator, num2){
  switch (operator){
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);
var operator = process.argv[3];
var answer = doesMath(num1,operator,num2);

console.log(answer);
console.log(process.argv);
