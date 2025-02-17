//Count value
let count = 0;


// select elements
const counterEl = document.getElementById("counter");

//counterEl.innerHTML = "100";

//Event Listeners

//Increase by 1 
document.getElementById("increaseBtn")
.addEventListener('click',function(){
count ++;
counterEl.textContent  = count;
});

//Decrease by 1 
document.getElementById("decreaseBtn")
.addEventListener('click',function(){
count --;
counterEl.textContent  = count;
});

//Decrease by 10
document.getElementById("increaseByTenBtn")
.addEventListener('click',function(){
count = count + 10;
counterEl.textContent  = count;
});

//RESET
document.getElementById("resetBtn")
.addEventListener('click',function(){
count = 0;
counterEl.textContent  = count;
});