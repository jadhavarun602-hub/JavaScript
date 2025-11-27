// Print the Fibonacci series (first 10 numbers).

let num = 10;

let a = 0;
let b = 1;

for (let i = 0; i < num; i++) {

    console.log(a);
    
    let next = a + b;
    a = b;
    b = next;

    
}


