// Count how many digits are in a number. 

// simple code 

// let num = 5893578;

// let count = num.toString().length;

// console.log("count of how many digit: "+count);

//  using while loop

let num = 3484368888;
let  count = 0;

while (num > 0) {
    num = Math.floor(num/10);
    count++
}

console.log("Total num count: "+count);
