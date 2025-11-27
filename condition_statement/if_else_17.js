// Check whether three sides form a valid triangle.

let a = 5;
let b = 19;
let c = 5;

if (a + b > c && a + c > b && b + c > a) {
    console.log("this is the valid triangle");  
} else {
    console.log("this is NOT a valid triangle");  
}