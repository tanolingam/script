// block scope
let fun=10;
{
    let scope=20;
    let sco=40;
    console.log(fun);
}
let total=scope+sco;
console.log(total);

// global scope
var funs=10;
{
    var scope=10;
    var sco=50;
    console.log(funs);
}
var totals=scope+sco;
console.log(totals)

//  circle 
const pai=3.14;
var r=7;
var a=pai*r*r;
console.log(a);

//  out put Hello! welcome to uki.
let x="Hello";
let y="welcome to";
let z="uki";
console.log(x+"!"+" "+y+" "+z+".");

// output is coming Hello "World"
var xy="Hello \"World\"";
console.log(xy);

var xy="hello \"friends\"";
console.log(xy);

// output hello one line uki  new line
var yz="Hello\nuki";
console.log(yz);

var ab="hi\nmala\nhow\nare\nyou";
console.log(ab);

// output hello\world
var ac="Hello\\World";
console.log(ac);

// output hello tab space and world t means tab 
var ac="Hello\tWorld";
console.log(ac);


// text="Hello world" is use for all the consoles 
// length  
var text="Hello World";
console.log(text.length);

// charAt 
console.log(text.charAt(text.length-4));
console.log(text.charAt(2));

// concat 
var text1="Hello";
var text2="frinds";
console.log(text1.concat(" ", text2));

// includes 
var text3="Hello world welcome to the srilanka HELLO! Hello";
console.log(text3.includes("welcome"));
console.log(text3.includes("Welcome"));

// indexof 
console.log(text3.indexOf("e", 15));

// lastIndexOf 
console.log(text3.lastIndexOf("the"));

// match  
console.log(text3.match(/ll/g));
console.log(text3.match(/ll/gi));

// repeat 
console.log(text1.repeat(4));

// replace 
console.log(text3.replace("world", "coding"));

// replace 2 
console.log(text3.replace(/Hello/g, "Hi"));

// search 
console.log(text3.search("world"));

// Intha format use panna capital a irunthalum first a irukkiratha accept pannum
console.log(text3.search(/HELLO/i));

// Slice
var text4=["Tharma", "Sharomy", "Ano", "Nanthini", "Nirmal"];
console.log(text4.slice(1, 3));

// split 
console.log(text3.split(""));
console.log(text3.split(" "));
console.log(text3.split("", 3));
console.log(text3.split(" ",3));

// substr
console.log(text3.substr(1, 3));
console.log(text3.substr(2, 4));
console.log(text3.substr(2));

// substring 
console.log(text3.substring(2, 4));

// lowercase
console.log(text3.toLowerCase());

// uppercase
console.log(text3.toLocaleUpperCase());

//  string format
console.log(text3.toString());

// trim 
var text5="     Hi uki student    ";
console.log(text5);
console.log(text5.trim());

// valueof 
console.log(text3.valueOf());

// floor
console.log(Math.floor(0.46));
console.log(Math.floor(4.57));
console.log(Math.floor(-7.7));

// round
console.log(Math.round(2.46));
console.log(Math.round(3.77));
console.log(Math.round(-2.85));
console.log(Math.round(-3.97));

// ceil 
console.log(Math.ceil(0.56));
console.log(Math.ceil(5.67));
console.log(Math.ceil(-6.7));

//trunc 
console.log(Math.trunc(0.56));
console.log(Math.trunc(5.67));
console.log(Math.trunc(-6.7));

// pi 
var R=7;
var A=Math.PI*R*R;
console.log(A);

//sqrt 
console.log(Math.sqrt(49));
console.log(Math.sqrt(-4));

//max 
console.log(Math.max(27, 48, 76, 50));
console.log(Math.max(-9, -5, -30, -1));
console.log(Math.max(1.2, 2.9, 4.4, 1.6));

//min 
console.log(Math.min(25, 64, 7, 10));
console.log(Math.min(-5, -6, -7, -1));
console.log(Math.min(1.2, 2.7, 9.4, 1.4));

//pow 
console.log(Math.pow(2, 3));
console.log(Math.pow(0, 3));
console.log(Math.pow(-2, 3));

//  abs 
console.log(Math.abs(-5.5));
console.log(Math.abs(5.5));
console.log(Math.abs(null));

// new date
console.log(new Date());

// toLocaleString
const d=new Date();
console.log(d.toLocaleString());

// toDateString
console.log(d.toDateString());

// toLocaleDateString
console.log(d.toLocaleDateString());

// 2023-01-08T17:24:40.002Z out put  year month date
console.log(d.toISOString());

// day date month year
console.log(d.toUTCString());

// same as new date
console.log(d.toString());

// get date
console.log(d.getDate());

// get day
console.log(d.getDay());

// get month
console.log(d.getMonth());

// get full year
console.log(d.getFullYear());

// get minutes
console.log(d.getMinutes());

// getMilliseconds
console.log(d.getMilliseconds());

// get time
console.log(d.getTime());

// date now
console.log(Date.now());

// parse
console.log(Date.parse("june 12, 2011"));

// set date
d.setDate(17);
console.log(d);

// bracket 0 
console.log(d.setDate(0));

// set fullyear
d.setFullYear(2010);
console.log(d);

//  set month
d.setMonth(7);
console.log(d);

//  set seconds 
d.setSeconds(55);
console.log(d);

// set hours 
d.setHours(7);
console.log(d);

// set milliseconds 
d.setMilliseconds(58);
console.log(d);

// set minutes 
d.setMinutes(45);
console.log(d);

// set millisecond 
d.setTime(1332403882588);
console.log(d);

// utc
console.log(Date.UTC(2020, 02, 09));



// numbers
// max
let c = 100; 
console.log(c.MAX_VALUE);
// min
console.log(Number.MIN_VALUE);

// negative infinity 
console.log(Number.NEGATIVE_INFINITY);

// NaN 
let e=NaN;
console.log(e);

// isfinite 
console.log(isFinite(145));

// isInteger
console.log(Number.isInteger(4-2));

// isSafeInteger 
console.log(Number.isSafeInteger('123'));

// isNaN
console.log(isNaN('uki'));
// let x = 5;
// let y = 3;


// Arithmatic operator
// addition
console.log('x + y = ', x + y); //8 

// subtraction
console.log('x - y = ', x - y);//2 

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);



// double equal 
num20=10;
num30=5;
console.log(num20==10);
console.log(num20=="10");

// trible equal 
console.log(num20===10);


// != 
console.log(num20!=5);

// !== 
console.log(num20!=="10");

console.log(num20>2);
console.log(num20<2);
console.log(num20<=10);
console.log(num20>=10);

//&& 
console.log(num20 < 20 && num20 < 1);
// ||
console.log(num20 < 20 || num20 < 1);
// !
console.log(!(num20>num30));




