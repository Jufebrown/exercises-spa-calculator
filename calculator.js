var output = document.querySelector(".outputBox");
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(input1,input2) {
  var answer = input1 * input2;
  output.value = answer;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function addition(input1,input2) {
  var answer = +input1 + +input2;
  output.value = answer;
 }


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtraction(input1,input2) {
  var answer = input1 - input2;
  output.value = answer;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function division(input1,input2) {
  if (+input2 === 0){
    alert("Zero Divide!!!!");
  } else {
    answer = (+input1/+input2);
    output.value = answer;
  }
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */


document.querySelector("body").addEventListener("click", function(event) {
  // Handle the click event on any button
  if (event.target.tagName.toLowerCase() === "button") {
    event.preventDefault();
    var input1 = document.querySelector(".input1").value;
    var input2 = document.querySelector(".input2").value;
    if (event.target.className === "addButton") {
      addition(input1,input2);
    } else if (event.target.className === "subButton") {
      subtraction(input1,input2);
    } else if (event.target.className === "multButton") {
      multiply(input1,input2);
    } else if (event.target.className === "divButton") {
      division(input1,input2);
    }
  }
});
