const score = 400
console.log(score);
console.log(score.toFixed(2));
const newnum = new Number(500);// creates a Number object
console.log(newnum);

const num1 = 98
console.log(num1.toString().length);
console.log(num1.toFixed(2));

const num2 = 98.5678
console.log(num2.toPrecision(2));// total number of digits 

const hundred = 1000000000
console.log(hundred.toLocaleString("en-IN"));// 1,00,00,00,000



//--------------------------math ----------------------------

console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(3.6));
console.log(Math.min(2,5,6,1,9));
console.log(Math.max(3,6,9,1));
console.log(Math.random());// 0 to less than 1

