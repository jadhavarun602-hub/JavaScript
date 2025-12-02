// Use map() to convert an array of lowercase strings to uppercase.

let std = ["arun","ganesh","kajal","raju","sneha"];

let uppercase = std.map(function(name){

    return name.toUpperCase();
});

console.log(uppercase);
