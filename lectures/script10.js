// // // function greet(callback){// higher order fxn 
// // //     setTimeout(() => {

// // //     console.log("Hello students");
// // //     callback (45);
// // //     }, 2000);
    
// // //     }  
// // // function print ( num){ // callback fxn
// // //     console.log("total students are :",num);
// // // }
// // // greet(print);

// // console.log("Starting homeowrk ......");

// // setTimeout(() => {
// //     console.log("homework completed");
// //     console.log("Starting dinner ........");
// //     setTimeout(() => {
// //         console.log("dinner completed");
// //         console.log("getting ready to go out...");
// //         setTimeout(() => {
// //             console.log("ready to go out");
// //         },1000);
// //     },1500);
// // },2000);

// function finishHomework(callback){
//     console.log("Starting homework .......");
//     setTimeout(() => {
//         console.log("Homework finished");
//         callback();
//     },2000);
// }
// function eatdinner(callback){
//     console.log("Starting dinner .......");
//     setTimeout(() => {
//         console.log("dinner finished");
//         callback();
//     },1500);
// }
// function gotoplay(){
//     console.log("going to play .......");
// }

// finishHomework(()=>{
//     eatdinner(()=>{
//         gotoplay();
//     }); }
// );  

const p = new Promise((resolve, reject)=>{
    let done = true ;
    setTimeout (()=>{
    if (done){
        resolve (" task has been fulflled ");
    } else {
        reject (" task has not been fulfilled");
    }
},5000);
});
console.log(p);
p.then((msg)=>
{ console.log(msg);
}).catch((err)=>
{
    console.log(err);
}).finally(() => {
    console.log("finally block ");
});