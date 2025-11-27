// Check if a number is prime or not (using basic logic).

const num = 29;

let isPrime = true;

if (num <= 1) {
    isPrime = false;
}else{
    for (let i = 2;i < num ; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num+" is a prime number!");  
}else{
    console.log(num+" is NOT a prime number!");  
}
