// Find the factorial of a given number.

let num = 8;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    
    factorial *= i;
}

console.log("factorial of a given "+num+" number: "+factorial);
