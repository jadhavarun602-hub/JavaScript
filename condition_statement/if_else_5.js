// Take two numbers and print the greater number.

const num1 = 15;
const num2 = 24;

if (num1 > num2) {
    console.log(num1+" this is the greatest number");
    console.log(num2+" this is the lowest number");
} else if(num1 < num2) {
    console.log(num2+" this is the greatest number");
    console.log(num1+" this is the lowest number");
}else{
    console.log(num1+" and "+num2+" is same number");
}