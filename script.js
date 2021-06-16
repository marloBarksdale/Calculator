

let buttons = document.querySelector(".buttonsView")
let answer = 0;
let num1 = "";
let num2 = "";
const num = 4;
let operatorActive = false;
let stack=[];
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

    if(key.classList.contains("number")){

        pushIt(key);
    }
  
    if(key.classList.contains("operator")){
    
      operatorActive = true;
         operator = key.value;
            //add();
            stack.push(operator);
          }

    }));


const viewport = document.querySelector('h3');
viewport.textContent = answer;

const inputView = document.querySelector("#inputView")

function add() {

  
  
 //if last index is not a number or maybe erase last and replace 
 
  
  num1 = parseInt(num1);
  num2= parseInt(num2);

  console.log(num1 + num2);
  
}



 



function substract(a, b) {
  return a - b;
}


function divide(a, b) {
  return a / b;
}

function multiply() {

  
  num1 = parseInt(num1);
  num2= parseInt(num2);

  console.log(num1 * num2);
}



function pushIt(e) {

  stack.push(e.value);

  console.log(stack.join(""));

if(operatorActive){
   num2 = num2 + e.value;
}
else{
  num1 = num1+ e.value;
}




}



function doMath(){

 

   if(operator === "+"){
      add();
  }


  if(operator === '*'){
    multiply();
  }


}

