var answer;
var input1 = document.querySelector("input1");
var input2 = document.querySelector("input2");
var addButton = document.querySelector("addButton");
var subButton = document.querySelector("subButton");
var multButton = document.querySelector("multButton");
var divButton = document.querySelector("divButton");


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(input1,input2) {
  answer = input1 * input2;;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function addition(input1,input2) {
  answer = input1 + input2;
 }


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtraction(input1,input2) {
  answer = input1 - input2;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function division(input1,input2) {
  answer = input1 / input2;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function operation(input1,input2,oper) {
  var answer = input1, input2;
  return answer;
}
