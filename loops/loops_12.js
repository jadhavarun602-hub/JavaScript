// Reverse a number using a loop.
// Example: 123 → 321

let num = 123456;
let rev  = 0;

while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10)
}

console.log("Reverse num: "+rev);



