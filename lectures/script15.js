// // function orderFood(){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             console.log("Food ordered");
// //             const data = " Food has been ordered";
// //             resolve(data);
// //         }, 2000);
// //     });
// // }
// // function prepareFood(){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             console.log("Food prepared");
// //             resolve();
// //         }, 2000);
// //     });
// // }
// // function deliverFood(){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             console.log("Food delivered");
// //             resolve();
// //         }, 2000);
// //     });
// // }

// // async function order()
// // {
// //     const data =await orderFood();
// //     console.log(data);
// //     await prepareFood();
// //     await deliverFood();
     
// // }

// // order();

// // orderFood()
// // .then((data) => {
// //     console.log(data);
// //     return prepareFood();
// // })
// // .then(() => deliverFood())
// // .catch((err) => console.log("Someting went wrong try again ."));

// console.log("first line ");

// try {
//     // let a = 23456;
//     console.log(a);
     
// }catch (err) {
//     console.log( err);
// }
// console.log("last line");

// try {
//     age =12;
//     if (age < 18) {
//         throw new Error("You are not eligible to vote");
//     }
// }
// catch (err) {
//     console.warn(err);
// }

async function getdataa()

{ try {
const res = await fetch ("https://dummyjson.com/products");
console.log(res.status);
if (res.ok == false)
{
    throw new Error("Something went wrong ");
}
const data = await res.json();
// console.log(data);  
data.products .forEach((product) => {
    console.log(product.title); 
});
} catch (err) {
    console.log(err);
}finally {
    console.log("finally block executed");    }
}
getdataa();