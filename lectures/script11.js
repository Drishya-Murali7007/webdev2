function doHomework(){
    const p = new Promise((resolve, reject) => {
        let done = true;
        setTimeout(() => {
            if (done) {
                resolve("Homework is done");
            } else {
                reject("Homework is not done");
            }
        }, 2000);
}) 
return p;
}
function eatdinner(){
    const p = new Promise((resolve, reject) => {
        let done = true;
        setTimeout(() => {
            if (done) {
                resolve("Dinner is eaten");
            } else {
                reject("Dinner is not eaten");
            }
        }, 2000);
}) 
return p;
}
 function gotoplay(){
    const p = new Promise((resolve, reject) => {
        let done = true;
        setTimeout(() => {
            if (done) {
                console.log("going to play .......");
                resolve("allowed to go to playground");
            } else {
                reject("permission denied ");
            }
        }, 2000);
}) 
return p;
}
     

doHomework()
.then((msg) => {
    console.log(msg);
    return eatdinner();
}).then((msg) => {
    console.log(msg);
    return gotoplay();
} ) .catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("go to sleep");
})

