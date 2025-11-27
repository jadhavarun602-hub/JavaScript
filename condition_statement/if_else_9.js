// Check whether a student passed or failed (marks ≥ 35).

const mark = 23;

if(100 >= mark && mark >= 85){
    console.log("GRADE : A");
}else if(84 >= mark && mark >= 70){
    console.log("GRADE : B"); 
}else if(69 >= mark && mark >= 55){
    console.log("GRADE : C");  
}else if(54 >= mark && mark >= 35){
    console.log("GRADE : D"); 
}else{
    console.log("GRADE : F");  
}