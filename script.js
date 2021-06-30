
//Try splicing the stack so you will have a stack only containing the 


let buttons = document.querySelector(".buttonsView")
let answer = null;
let num1 = "";
let num2 = "";
const num = 4;
let operatorActive = false;
let stack = [];

let operator = "";
const answerView = document.querySelector("h3");
answerView.textContent = "0";


const expressionView = document.querySelector("#inputView");
expressionView.value = "";




buttons.style.display = "grid";

buttons.style.gridTemplateColumns = `repeat(${num},1fr) `;
buttons.style.gridTemplateRows = `repeat(${num + 1},1fr) `;

buttons.style.gridGap = "5px";

let clearButton = document.querySelector("#clear");
let deleteButton = document.querySelector("#delete")

clearButton.style.gridColumn = " 1/3";
clearButton.style.backgroundColor = " red";

deleteButton.style.gridColumn = " 3/5";
deleteButton.style.backgroundColor = " blue";


const keys = document.querySelectorAll('button');
keys.forEach(key => key.addEventListener('click', function () {

  if (stack.length > 20) {
    return;
  }

  if (key.classList.contains("number")) {

    if (operatorActive === false) {
      answer = null;
    }

    stack.push(key.value);
    console.log(stack.toString());

    expressionView.value = stack.join(" ").toString();
    // num1= stack.slice(0, stack.indexOf(operator));
    // num1 = num1.join("");


    // num2=stack.slice(stack.indexOf(operator)+1);
    // num2=num2.join("");
    // console.log(num1);
    // console.log(num2);

  }

  if (key.classList.contains("operator")) {



    if (operatorActive && stack[stack.length - 1] === operator) {

      stack[stack.indexOf(operator)] = key.value;
      operator = key.value;
      expressionView.value = stack.join(" ").toString();
      console.log(stack.toString());
      return;
    }


    if (stack.length === 0 && answer === null) {
      return;
    }
    if (operatorActive === false && answer != null) {

      console.log("here3");
      stack = answer.toString().split("");
      expressionView.value = stack.join(" ").toString();


    }


    if (stack[stack.length - 1] != operator && operatorActive) {
      console.log("here");
      doMath();
      stack = [];
      stack = answer.toString().split("");
      operator = key.value;
      stack.push(operator);
      operatorActive = true;
      expressionView.value = stack.join(" ").toString();


    }
    else {
      console.log("here 2");
      operatorActive = true;
      operator = key.value;
      stack.push(operator);
      console.log(stack.toString());
      expressionView.value = stack.join(" ").toString();

    }

  }


}));





function addition() {


  num1 = stack.slice(0, stack.indexOf(operator));
  num1 = num1.join("");


  num2 = stack.slice(stack.indexOf(operator) + 1);
  num2 = num2.join("");




  num1 = parseFloat(num1);
  num2 = parseFloat(num2);


  return num1 + num2;


}

function multiplication() {

  num1 = stack.slice(0, stack.indexOf(operator));
  num1 = num1.join("");


  num2 = stack.slice(stack.indexOf(operator) + 1);
  num2 = num2.join("");



  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return num1 * num2;
}

function division() {
  num1 = stack.slice(0, stack.indexOf(operator));
  num1 = num1.join("");


  num2 = stack.slice(stack.indexOf(operator) + 1);
  num2 = num2.join("");



  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  return (num1 / num2)


}


function subtraction() {


  num1 = stack.slice(0, stack.lastIndexOf(operator));
  num1 = num1.join("");


  num2 = stack.slice(stack.lastIndexOf(operator) + 1);
  num2 = num2.join("");



  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  console.log(num1);
  console.log(num2);
  console.log(operator);
  console.log(num1 - num2);

  return (num1 - num2);


}


function addPeriod() {


  if (stack.slice(0, stack.lastIndexOf(operator)).includes(".")) {


    if (stack.slice(stack.lastIndexOf(operator) + 1).includes(".")) {
      expressionView.value = stack.join(" ").toString();
      return;

    }


    stack.push(".");
    expressionView.value = stack.join(" ").toString();
    return;
  }

  stack.push(".");
  expressionView.value = stack.join(" ").toString();







}


function doMath() {


  if (stack[stack.length - 1] === operator) {
    return;
  }

  if (stack.length === 0) {
    return;
  }


  if (operator === "-") {
    answer = subtraction();
    console.log(answer);
  }



  if (operator === "/") {


    answer = division();

    console.log(answer);

  }
  if (operator === "+") {

    answer = addition();
    console.log(answer);


  }


  if (operator === "*") {

    answer = multiplication();
    console.log(answer);
  }

  stack = [];
  operatorActive = false;

  if (Number.isInteger(answer)) {
    answerView.textContent = answer.toString();

  }
  else {
    if (answer.toString().length > 20) {
      answer = answer.toFixed(15);
    }
    answerView.textContent = answer.toString();

  }


}

function clears(){
  console.log("clear");
  stack = [];
  num1 = "";
  num2 = "";
  answer = null;
  operatorActive = false;
  operator = "";
  expressionView.value = stack.join(" ").toString();
  answerView.textContent = "0";
}