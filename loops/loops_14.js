// Check if a number is prime using a loop.

let num = 18;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("this is prime number");
    
}else{
    console.log("this is not a prime number");
    
}