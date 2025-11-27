// Take three numbers and print the largest number.

let num1 = 8;
let num2 = 9;
let num3 = 8;

if(num1 > num2 && num1 > num3){
    console.log(num1+" this is the largest number");
}else if(num2 > num1 && num2 > num3){
    console.log(num2+" this is the largest number");
}else if(num3 > num1 && num3 > num2){
    console.log(num3+" this is the largest number");
}else if(num1 == num2 && num1 == num3 && num2 == num3 ){
    console.log("All is the same number");
}else{
    console.log("this is the not number");
}