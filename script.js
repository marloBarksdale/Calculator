
//Try splicing the stack so you will have a stack only containing the 


let buttons = document.querySelector(".buttonsView")
let answer = null;
let num1 = "";
let num2 = "";
const num = 4;
let operatorActive = false;
let stack = [];

let operator = "";



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


  if (key.classList.contains("number")) {

    if(operatorActive === false){
      answer = null;
    }

    stack.push(key.value);
    console.log(stack.toString());
    // num1= stack.slice(0, stack.indexOf(operator));
    // num1 = num1.join("");


    // num2=stack.slice(stack.indexOf(operator)+1);
    // num2=num2.join("");
    // console.log(num1);
    // console.log(num2);

  }

  if (key.classList.contains("operator")) {

    if(operatorActive ===false && answer!=null){

      console.log("here3");
      stack= answer.toString().split("");
    }
   

    if (stack[stack.length-1]!= operator && operatorActive) {
      console.log("here");
      doMath();
      stack = [];
      stack = answer.toString().split("");
      operator = key.value;
      stack.push(operator);
      operatorActive = true;
     

    }
    else {
console.log("here 2");
      operatorActive = true;
      operator = key.value;
      stack.push(operator);
      console.log(stack.toString());
      
    }

  }


}));





function addition() {


  num1 = stack.slice(0, stack.indexOf(operator));
  num1 = num1.join("");


  num2 = stack.slice(stack.indexOf(operator) + 1);
  num2 = num2.join("");




  num1 = parseInt(num1);
  num2 = parseInt(num2);


  return num1 + num2;


}

function multiplication() {

  num1 = stack.slice(0, stack.indexOf(operator));
  num1 = num1.join("");


  num2 = stack.slice(stack.indexOf(operator) + 1);
  num2 = num2.join("");



  num1 = parseInt(num1);
  num2 = parseInt(num2);
  return num1 * num2;
}
function doMath() {


  if (operator === "+") {

    answer = addition();
    console.log(answer);
   

  }


  if (operator === "*") {

    answer = multiplication();
    console.log(answer);
  }

  stack=[];
  operatorActive = false;

}