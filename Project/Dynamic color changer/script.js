//!Select the elements
const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const titleEl = document.querySelector(".title");
const resetBtn = document.querySelector(".resetBtn");
const bodyEl = document.querySelector("body")

//Add event listeners
btn1El.addEventListener('click',function(){
    bodyEl.style.backgroundColor= "yellow";
});

btn2El.addEventListener("click", () =>{
    titleEl.style.fontSize = "90px";
});

resetBtn.addEventListener("click", function(){
    bodyEl.style.backgroundColor = "";
    titleEl.style.fontSize = "30px";

});