const name = 'jiya';
const gpa = 9.1;

//this is string concatenation
console.log(`hello my name is ${name} and my gpa is ${gpa}`);

//string follows stack memory allocation

const mymsg = new String('hello world');

console.log(typeof mymsg);//treats as obj

console.log(mymsg.length);
console.log(mymsg[4]);
console.log(mymsg.toUpperCase());
console.log(mymsg.indexOf("l"));
console.log(mymsg.charAt(0));


const mystring = mymsg.substring(0,5);// will count from 0 to 4
console.log(mystring);

// slice(startIndex, endIndex): If startIndex is greater than endIndex, 
// slice() returns an empty string. It does not swap the arguments. 

const mystring2 = mystring.slice(0,5);// will count from 0 to 4 but can also take negative indexing
console.log(mystring2);

const mystring3 = mystring2.slice(-3);// will take last 3 characters
console.log(mystring3);

const mystr4 = mystring.slice(-6,4);
console.log(mystr4);

const newmsg = "  hello world     ";
console.log(newmsg.trim());

const url = "https://www.jiya.com/about.html%20newurl";
console.log(url.replace('%20','-'));
console.log(url.includes('mean'));

//provide me in the form of array
const family = new String('jiya-hitesh-jagu');
console.log(family.split('-'));

console.log(mymsg.bold());
