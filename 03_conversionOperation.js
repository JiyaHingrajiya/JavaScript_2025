let score = "13";

// console.log(typeof (score));

let convertedScore = Number(score);
// console.log(typeof (convertedScore));

let age = 19;
let convertage = String(age);
console.log(typeof(convertage));
console.log(convertage)


// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// null => 0
// undefined => NaN


//for boolean conversion
let loggedin=1;
let booleanvalue = Boolean(loggedin);
console.log(booleanvalue);

//1 => true
//0 => false
//"" => false
//"name" => true 

let val = 3
let neg = -val
console.log(neg);

//concatenation

let str1 ="hello"
let str2 ="world"
console.log(str1 + " " + str2);


//agr string phle h toh sbko string man lenge , 
// par agr number phle h toh number ki trh usko treat krenge aur fir string ko jod denge
console.log("1" + 2); // "12"
console.log(1 + "2");
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2");//32


let num1 , num2 , num3;
num1=num2=num3=5;

console.log(num1,num2,num3);

let counter = 100;
console.log(counter++); // will increment the value after printing so in memory it is 101 and now i ma adding the pre ++ so that 101 +1 = 102 as the below outpur

console.log(++counter);
console.log(++counter);


//other operations we can do

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**3); //2^3

