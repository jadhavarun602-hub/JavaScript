
let str = "AnIl KapOOr BomBAy PuNe";

let str1 = str.split(" ");

let result = str1.map(word => {
    let first = word.charAt(0).toLowerCase();   
    let temp = word.slice(1);                   
    return first + temp;
});

console.log(result.join(" "));