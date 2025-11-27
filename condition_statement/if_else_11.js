// Input temperature and print:
// "Hot" if > 30
// "Warm" if 20–30
// "Cold" if < 20

const temp = 100;

if (temp > 30) {
    console.log("Temperature is Hot!"); 
} else if(30 >= temp && temp >= 20) {
    console.log("Temperature is Warm!");  
}else{
    console.log("Temperature is Cold!");  
}