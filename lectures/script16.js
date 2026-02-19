async function sendData() {
    const response = await fetch("https://dummyjson.com/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  },
        body: JSON.stringify({
            title: "new product ",
            price: 549,
            description: "this is some new product ", 
            discountedPercentage: 10,
            rating: 4.5,
            stock: 100,
            brand : "abc ",
            category: "elecronics ",
            
        })
    })
    const data = await response.json();
    console.log(data);
}
localStorage.setItem ("Name ", "Alex ")
localStorage.setItem("Age ", 23);

console.log(localStorage.getItem("Name "));
console.log(localStorage.getItem("Age "));

localStorage.removeItem("Name ");
console.log(localStorage.getItem("Name "));
 
localStorage.setItem("Name ", "John");