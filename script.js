let bought = document.querySelector("#inp-buying");
let noOfStocks = document.querySelector("#inp-number");
let currentVal = document.querySelector("#inp-current");
const result = document.querySelector(".output");
const btn = document.querySelector("button");

btn.addEventListener("click", Calculate);
function Calculate(){
  b = parseInt(bought.value); n = parseInt(noOfStocks.value); c = parseInt(currentVal.value);
  b=50;n=5;c=60; //test case
  total = (c-b)*n;
  percentage = (total/b)*100;

  if (total<0){
    result.innerText =`Sorry but you are in a loss of: ${Math.abs(total)}\na total percentage of: ${Math.abs(percentage)}%`
  }
  else result.innerText = `Yay! you are in a profit of: ${total}\na total percentage of: ${percentage}%`
  
}
