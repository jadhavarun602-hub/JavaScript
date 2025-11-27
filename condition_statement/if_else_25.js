// Check if a number is Armstrong number (3-digit simple logic).

let num = 153;  
let originalNum = num;

let digit1 = num % 10;          
num = parseInt(num / 10);

let digit2 = num % 10;          
num = parseInt(num / 10);

let digit3 = num % 10;          
let sum = (digit1 ** 3) + (digit2 ** 3) + (digit3 ** 3);

if (sum === originalNum) {
    console.log(originalNum + " is an Armstrong number");
} else {
    console.log(originalNum + " is NOT an Armstrong number");
}
