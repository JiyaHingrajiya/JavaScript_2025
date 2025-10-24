//let var const 

// ES5 and ES6

// let and var are added in es6
//var is in es5 also

// var is function scoped and let is block/braces  scoped
// var can be redeclared and let cannot be redeclared

// example
// function abcd(){
//     for(var i=1;i<5;i++){
//         console.log(i);
//     }
//     console.log(i); // 5 for var and for let it will be error
// }

//window object - js m jo features nhi h but hm use kr pate h with the help of window which is box of features given by browser
//var is a property of window object
//let,const    is not a property of window object


//browser contest api - brower jo bhi 3 feature deta h usr yeh bolte h
// 1.window 2.stack 3 heap memory

//jitne bhi variables ya data hum bante hai unhe store krna pdta h woh heap memory m store hota h

 //lexical enviournment - it tell ki hm function k indar kya axcess kr skte h aur kya nhi

 //execution context - is a container where the function code is executed
 //and its created wheather a function is called and it contains 3 things variables, function, and lexical enviournment.

 //spread operator - it is used to unpack the elements of an array or object
// it is used to copy the elements of an array or object
// it is used to merge two arrays or objects

//truthy and falsy values - falsy values are those which are considered false when encountered in a boolean context.

// falsy values are: 0 false NAN "" undefined null
// all other values are truthy values

// if(-1){
//     console.log("true"); // true
// }this will work as -1 is not falsy value


//foreach loop

// it is used to iterate over the elements of an array
// var a= [1,2,3,4,5,6,7,8,9,10];
// a.forEach(function(val){
//     console.log(val); // 1 2 3 4 5 6 7 8 9 10
// }) foreach loop is not a function in js it is a method of array object


//objects p loop krne k liye **forin** loop use hota h
// it is used to iterate over the properties of an object
// var obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// for(var key in obj){
//     console.log(key + ": " + obj[key]); // name: John age: 30 city: New York
// }

//callback function - it is a function passed as an argument to another function
// it is used to execute a function after another function has completed its execution
// it is used to execute a function after a certain time interval

//example 

// setTimeout(function(){
//     console.log("Hello world"); // Hello world
// },2000); // it will execute after 2 seconds


//first class function
// it is a function that can be treated as a variable
// it can be passed as an argument to another function


// var a = {
//     name:"john",
//     age: 30
// }

// delete a.name; // it will delete the name property of the object
// console.log(a); // { age: 30 }


