function first() {
    second();
}
function second() {
    third();
}   
function third() {
    console.trace();
}
first();