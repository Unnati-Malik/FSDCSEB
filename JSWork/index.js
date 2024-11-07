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
// function greeting(msg="Welcome"){
//     console.log("Good Morning (^-^) "+msg);
// }
// greeting();
// greeting("Greetings");

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
// function selectLanguage(language){
//     let data;
//     if(language=="c"){
//         function cCompiler(){
//             return "CCOMPILER SELECTED";
//         }
//         data=cCompiler();
//     }

//     if(language=="java"){
//         function javaCompiler(){
//             return "JAVACOMPILER SELECTED";
//         }
//         data=javaCompiler();
//     }
//     return data;
// }

// let result=selectLanguage("c");
// console.log(result);



// console.log("hello world");
// let parent = document.getElementsByClassName("parent");
// console.log(parent); //check krne ke liye ki browser access kr pa rha hai ya nhi
// // parent[0].innerText="Data has changed"; // without applying html, just displaying text
// // parent[0].innerHTML="<h2>Data has changed</h2>"; //with applying html, applying html to text
// const h1=document.createElement("h1");
// console.log(h1);
// h1.innerText="ABES ENGINEERING COLLEGE";
// h1.style.backgroundColor="cyan";
// h1.style.color="purple";
// h1.style.padding="20px";
// h1.style.marginLeft="100px";
// parent[0].appendChild(h1); // now h1 is a part of dom and humne isko apne parent ke saath daal diya


// const img = document.createElement("img");
// img.src="./1.jpg";
// console.log(img);
// img.setAttribute("height","300");
// img.setAttribute("width","300");
// parent[0].appendChild(img);
// parent[0].removeChild(img);

// //yha pr humne onclick wala use kiya hai
// function getData(){
//     console.log("Hello Ji");
//     parent[0].innerHTML="<h2>Hello, Event Handeled</h2>";
// }

// // ab onclick use nhi kr rhe direct js se handle kr rhe hai
// const button=document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click",getData);//yha pr onclick ki jagah click hi likhte hai bs(same for onfocus, onmouseover)




// const promise=new Promise((resolve,reject)=>{
//     let a=7;
//     if(a>10){
//         resolve("Accepted");
//     }
//     else{
//         reject("Rejected");
//     }
// })
// //consuming the promise, here then means successfully done
// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{console.log(error)})
// .finally(()=>console.log("ALL RESOURCES HAVE CLOSED"));



// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"Unnati Malik", Stack:"MERN Stack"});
// });
// // promise2.then((data)=>{console.log(data)})
// // .catch(x=>{console.log(x)})

// promise2.then((data)=>{console.log("Hi "+data.name)})
// .catch(x=>{console.log(x)})




//Fetch api use krna 
const response = fetch("https://dummyjson.com/products");
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res);
    })
})