// Reverse a string using a loop.

let str = "Arun jadhav";

let rev = "";

for (let i = str.length-1; i >= 0; i--) {
    rev = rev + str[i];
    
}

console.log("Original String: "+str+"\nReverse String: "+rev);
