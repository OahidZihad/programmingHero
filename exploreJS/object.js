// type one
var student = {id:121, phone:17456, name:"Prapti" };
var student2 = {id:112, phone:14524, name:"Habiba"};

var phoneNo = student.phone;

console.log(student);
console.log(student2);
console.log(phoneNo);



//type two

var student = {id:121, phone:17456, name:"Prapti" };
var student2 = {id:112, phone:14524, name:"Habiba"};

var phoneNo = student["phone"];

console.log(student);
console.log(student2);
console.log(phoneNo);



//type three

var student = {id:121, phone:17456, name:"Prapti" };
var student2 = {id:112, phone:14524, name:"Habiba"};

var phonePropName = "phone";
var phoneNo = student[phonePropName];

console.log(student);
console.log(student2);
console.log(phoneNo);



//update phone number
var student = {id:121, phone:17456, name:"Prapti" };
var student2 = {id:112, phone:14524, name:"Habiba"};

student.phone = 17456745;

//add a property in student2
student2.namaz = "5 times";

console.log(student);
console.log(student2);