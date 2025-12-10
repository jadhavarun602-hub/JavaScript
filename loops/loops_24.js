// Find the largest number in an array using a loop.

let arr = [55,4,56,78,13,555,85,34];

let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    
    if(arr[i] > largest){
        largest = arr[i];
    }
    
}

console.log("Largest Number: ",largest);
