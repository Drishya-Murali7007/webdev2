const para =document.getElementById("para");
console.log(para);

const para2 = document.querySelectorAll(".para");
console.log(para2);

let arr=[21,3,2,43,54,65,65,8]
arr.forEach((ele)=>console.log(ele));

const container = document.querySelector(".container");
container.innerHTML="<h1>This is a new heading</h1> ";
console.log(container);

const btn = document.querySelector("button");
btn.classList.add("btn");