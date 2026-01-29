
let num = 121;
let digit = 0;
let originalNum = num;

while(num > 0){
    let temp = num % 10;
    digit = digit * 10 + temp;
    num = Math.floor( num / 10);
}

if(originalNum == digit){
    console.log("This is palindrome number");
    
}else{
    console.log("this is not a palindrome number");
    
}
