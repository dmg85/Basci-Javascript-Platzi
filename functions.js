// Declaration

 /*function myFunction() {
    return 3;
 }

// Expression

var myFunction = function(a,b) {
    return a + b;
}*/
 //Function with templalte string (Backticks)
/*function greetingStudents(students) {
    console.log(`Hi ${students}`);
}
greetingStudents("John");*/

// Function with return statement
/*function adding2Par(a,b) {
    let result = a + b;
    let print = result;
    console.log(print);
}

adding2Par(99,2);*/

// Scope

let nameUser = "Diego"

function funScope () {
    let lastName = " Medina";
    return nameUser + "" + lastName;
}

console.log(funScope());
 