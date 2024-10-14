// console.log("Welcome to JS");



// we have var, let and cons for variables and the difference between them is on the basis of their scope
// var has global scope and not limited to a block only, let has block scope only 
// var a=12;
// console.log(a);
// if(a>10){
//    let b=23;
//     console.log("a inside condition: "+a);
// }
// console.log("b outside condition: "+b);



//const value cannot be changed and remains same as it was initialised
// const a=12;
// console.log(a);
// if(a>10){
//    let b=23;
//    a=13;
//     console.log("a inside condition: "+a);
// }
// console.log("b outside condition: "+a);



// let a=12;
// let b="12";
// console.log(typeof a);
// console.log(typeof b);
// let today=Date();
// console.log(today);
// console.log(typeof today);

//double == works on value only where as triple === works on type as well


// let myname="Amit";
// let college = "ABES EC"
// let result = `Hi my name is ${myname} and I am doing engineering from ${college}`;
// console.log(result);


//Objects in JS
// let key="sname";
// const student={
//  sname: "Amit",
//  course: "B.Tech",
//  college: "ABES EC"
// }

// console.log("Name:"+student.sname+" Course:"+student.course);
// const {sname}=student;
// console.log(sname);
//key ki value change kr di from amit to rahul
// student[key]="Rahul";
// console.log(student);

//Array of Object
// const student=[{
//     sname: "Amit",
//     course: "B.Tech",
//     college: "ABES EC"
//    },
//    {
//    sname: "Rahul",
//    course: "B.Tech",
//    college: "ABES EC"
//   }
// ]
// console.log(student[1]);
// console.log(student[1].sname);



//Functions in JavaScript
function greeting(msg="Welcome"){
    console.log("Good Morning (^-^) "+msg);
}
greeting();
greeting("Greetings");

// function sum(a,b){
//     return a+b;
// }
// let data = sum(7,13);
// console.log(data);

//in this c will be automatically discarded
// function sum(a,b,c){
//     return a+b;
// }
// let data = sum(7,13);
// console.log(data);

// function sum(a,b,c=9){
//     return a+b+c;
// }
// let data = sum(7,13);
// console.log(data);


//Now we will discuss about CallBack functions

// function cCompiler(){
//     return "CCOMPILER SELECTED";
// }

// function javaCompiler(){
//     return "JAVACOMPILER SELECTED";
// }

// function selectLanguage(clbk){
//     console.log("You Have: "+clbk());
// }

// selectLanguage(javaCompiler); //we called an another function in a different function i.e we passed a function as a parameter in another function


//now this is another type of callback function in which a function returns another function in its body
function selectLanguage(language){
    let data;
    if(language=="c"){
        function cCompiler(){
            return "CCOMPILER SELECTED";
        }
        data=cCompiler();
    }

    if(language=="java"){
        function javaCompiler(){
            return "JAVACOMPILER SELECTED";
        }
        data=javaCompiler();
    }
    return data;
}

let result=selectLanguage("c");
console.log(result);



