// Use reduce() to find the largest number in an array.

let num = [33,55,22,88,73,89,76,32,54];

let find = num.reduce(function(num1 ,num2){
    return num1 > num2 ? num1 : num2;
});

console.log(find);
