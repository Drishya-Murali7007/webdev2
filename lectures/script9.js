// setTimeout(()=>{
//     alert("3 sec up");
// }, 3000);

//  const timerId = setInterval(()=>{
//     alert("5 sec passed");
// }, 5000);   
// setTimeout(()=>{
// clearInterval( timerId );
// }, 10*1000);
// let i =1;
// const varble = setInterval(()=>{

//     console.log(i);
//     i++;
// },1000);
// setTimeout(()=>{
// clearInterval( varble );
// }, 10*1000);

const btn = document.querySelector(".btn");
const list = document.querySelector(".list");   
const name = document.querySelector("#name"); 

btn.addEventListener("click", ()=>{
    if (name.value === "")return;
    //creating element 
    const li = document.createElement("li");
    const dlt= document.createElement("button");
// providing text 
    dlt.innerText = "delete";
    li.innerText = name.value;

    dlt.addEventListener("click", ()=>{
        list.removeChild(li);
    })
//appending elemtbt
    list.appendChild(li);
    li.appendChild(dlt);
//clearing
    name.value = "";
})
     