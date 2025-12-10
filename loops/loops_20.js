// Count how many vowels are present in a string.

let count = 0;

let i = 0;

let str = "arun jadhav";

while (i < str.length) {

    let ch = str[i];
    
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        count++;
    }

    i++;
}

console.log(count);
