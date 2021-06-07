let buttons = document.querySelector(".buttonsView") 

let num = 4;
buttons.style.display = "grid";

  buttons.style.gridTemplateColumns = `repeat(${num},1fr) `;
  buttons.style.gridTemplateRows = `repeat(${num+1},1fr) `;

buttons.style.gridGap = "5px";

let clearButton = document.querySelector("#clear");
let deleteButton = document.querySelector("#delete")

clearButton.style.gridColumn = " 1/3";
clearButton.style.backgroundColor = " red";

deleteButton.style.gridColumn = " 3/5";
deleteButton.style.backgroundColor = " blue";


