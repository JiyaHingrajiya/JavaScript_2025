/*
Types of datatypes -> 1. primitive  2.non-primitive

7 :  Primitive Datatypes : String, Number, Boolean, symbol, null, undefined, bigint
3 : Non-Primitive Datatypes(refrence) : Object, Array, Function


is javascript statically typed or dynamically typed?
-> javascript is dynamically typed language 

let name = "jiya";
const age = 22;


*/
let id = Symbol('123');
let anotherid = Symbol('123');

console.log(id === anotherid);

const arr = ["joy","jack","jill"];

let obj = {
    name : "hitesh",
    age: 23
}

const func = function(){
    console.log("this is a function");
}

console.log(typeof func);
console.log(typeof arr);
console.log(typeof obj);

func();



//memory allocation of datatypes
//heap memory -> non-primitive datatype
//stack memory ->>primitve datatype

let marks = 56;
let newmarks = marks;

newmarks = 9;
console.log(marks);
console.log(newmarks);

//so here we see that the marks in both variables are diff as they are passed by value
let file = {
    name :"ganesh",
    age:34,
};

let newfile = file;


newfile.name = "shiva";
console.log(file);
console.log(newfile);

//so here we see that the name is changed in both the cases as it is passed by reference

