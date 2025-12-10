// prime number's array from the given array. -> prime number

let arr = [13, 11, 17, 19, 31, 23, 34, 65, 98, 98, 61, 33];

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            return false;

        }
    }
    return true;
}

let num = arr.filter(isPrime)
console.log(num);

