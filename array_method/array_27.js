// Check if any numbers are negative using some().

let num1 = [4,6,8,5,12,2];

// let num2 = num1.some(function(element){
//     return element % 2 == 0;
// });

// console.log(num2);

let num2 = num1.some(element => element > 20);

console.log(num2);

