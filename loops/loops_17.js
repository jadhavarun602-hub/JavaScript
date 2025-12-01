// Generate a reverse pyramid pattern:


let num = 5;

for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = num; j >= i; j--) {
       str += "*";
       
    }

    console.log(str);
    
    
}
