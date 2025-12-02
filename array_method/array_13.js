// Use filter() to return only even numbers from an array.

let number = [2,55,44,42,77,87,48,26,15,62];

let evenNum = number.filter(function(num){

    return num % 2 == 0;
});

console.log(evenNum);
