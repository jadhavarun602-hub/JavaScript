// Print all Armstrong numbers between 1 and 500

for (let i = 1; i <= 500; i++) {

    let temp = i;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit;
       temp = Math.floor(temp/10);
    }

    if(i === sum){
        console.log(i);
        
    }
}