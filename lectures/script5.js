// const btn= document.querySelector("#btn");
// btn.classList.add("btn");
// const btn2= document.querySelector("#btn2");
// btn2.classList.add("btn2");

// function print (){
//     alert("Button was clicked!");
// }

// function print2 (){
//     alert(" button was stopped !")
// }

// btn.addEventListener("click", print);
// btn2.addEventListener("click",()=>{
//     alert(" stop button was clicked!");
//     btn.removeEventListener("click",print);
// });

// const click = document.querySelector("#clickMe");

// function message (){
//     alert ("You clicked the click me button!");
// }
// click.addEventListener("keyup",message);


const div1= document.querySelector(".outer");
const div2= document.querySelector(".inner");
const btn= document.querySelector("button");

div1.addEventListener('click',()=>{console.log("Clicked outer div"),false})
div2.addEventListener('click',()=>{console.log("Clicked inner div"),false})
btn.addEventListener('click',()=>{console.log("Clicked button"),false})