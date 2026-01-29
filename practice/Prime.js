let n = 100;
let sum = 0;
let isPrime = true;

for (let i = 2; i <= n; i++) {

    for(let j = i  ;j < n; j++){
        if(j % i == 0){
            console.log(i);
            // isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
        
    }
}

// console.log("sum of 100 prime :" +sum);


