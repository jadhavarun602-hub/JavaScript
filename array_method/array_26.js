// Check if all numbers are positive using every().

let num1 = [2,4,6,8,12,16];

let num2 = num1.every(num => num % 2 == 0);

console.log(num2);
