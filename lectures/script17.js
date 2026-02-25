document.cookie="name= Alex ; expires= Wed, 25 Feb, 2026 23:59:59 GMT";
document.cookie="age = 54; expires= Wed, 25 Feb, 2026 23:59:59 GMT";
console.log(document.cookie);

function* generate() {
     
let index = 1234567;
while (true) {
    yield index;
    
    index++;
}
}
const gen = generate();
console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);  

function add(a)
{
    return function (b) {
        return function (c) {   
        return a + b + c;
    }
}
}
//currying
const first = add(5);
console.log(first);
const second = first(10);
console.log(second);
console.log( second(15));
console.log(add(5)(10)(15));   