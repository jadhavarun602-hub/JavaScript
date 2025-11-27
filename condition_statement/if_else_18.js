// Check the grade based on marks:
// ≥90 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// <60 → F

let mark = 90;

if (mark >= 90) {
    console.log("Grade : A");  
} else if(mark <= 89 && mark >= 80) {
    console.log("Grade : B");
}else if(mark <= 79 && mark >= 70){
    console.log("Grade : C");
}else if(mark <= 69 && mark >= 60){
    console.log("Grade : D");
}else{
    console.log("Grade : F");
    
}