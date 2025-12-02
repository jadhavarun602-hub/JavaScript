// Use reduce() to find the sum of all numbers in an array.

let num = [44,2,10,33,78,98,1,22,43,65];

let sum = num.reduce(function(add,item){
    return add += item;
});

console.log("sum of : ",sum);
