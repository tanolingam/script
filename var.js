// // let x=("Hello");
// // let y=("Welcome to");
// // let z=("uki");
// // console.log(x,"!"+' '+y, z, ".")

// // adding
// { 
// let x = 5;
// let y = 2;
// let z = x + y;
// console.log(z);
// }
// // Subtracting
// {
// let x = 5;
// let y = 2;
// let z = x - y;
// console.log(z);
// }
// // Multiplying
// {
// let x = 5;
// let y = 2;
// let z = x * y;
// console.log(z);
// }
// // Dividing
// {
//  let x = 5;
// let y = 2;
// let z = x / y;
// console.log(z);
// }
// // Remainder
// {
//   let x = 5;
// let y = 2;
// let z = x % y;
// console.log(z);
// }
// // Incrementing
// {
//   let x = 5;
// x++;
// let z = x;
// console.log(z)
// }
// // Decrementing

// {
//   let x = 5;
// x--;
// let z = x;
// console.log(z);
// }
// // Exponentiation

// {
// let x = 5;
// console.log(x**2);
// }
// {
//   let text="hello world";
//   console.log(text.indexOf("world"));
// }
// {
//   let text="hi mala how are you";
//   console.log(text.lastIndexOf("are"));
// }
// {
//   let text="hello\\world";
//   console.log(text);
// }
// {
//   let text="welcome\nuki";
//   console.log(text);
// }
// {
//   let text="hello\bworld";
//   console.log(text);
// }
// {
//   let text="welcome\tuki";
//   console.log(text);
// }


// // example 2

// // let x = 5;
// // let y = 3;

// // addition
// console.log('x + y = ', x + y); //8 

// // subtraction
// console.log('x - y = ', x - y);//2 

// // multiplication
// console.log('x * y = ', x * y);  // 15

// // division
// console.log('x / y = ', x / y);  // 1.6666666666666667

// // remainder
// console.log('x % y = ', x % y);   // 2

// // increment
// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // prints 6 and then increased to 7
// console.log('x = ', x);     // 7

// // decrement
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // prints 6 and then decreased to 5
// console.log('x = ', x);     // 5

// //exponentiation
// console.log('x ** y =', x ** y);


// block scope error its start to read in first line so reference error in not define scope its only let
let fun=10;
{
    let scope=20;
    let sco=30;
    console.log(fun);
}
let total=scope+sco;
console.log(total);

//  var is a global scope output 50
var funs=10;
{
    var scope=20;
    var sco=30;
    console.log(funs);
}
var totals=scope+sco;
console.log(totals)

// circles area 
const pai=3.14;
var r=7;
var a=pai*r*r;
console.log(a);

// out put Hello! welcome to uki.
let x="Hello";
let y="welcome to";
let z="uki";
console.log(x+"!"+" "+y+" "+z+".");


// output is  Hello "World"
var xy="Hello \"World\"";
console.log(xy);

// output hello one line world next line
var yz="Hello\nWorld";
console.log(yz);

// output hello\world
var qw="Hello\\World";
console.log(qw);

// output hello tab space and world
var we="Hello\tWorld";
console.log(we);




// length is a property length is used to count the charaectors its include space and symbols also 
var text="Hello World";
console.log(text.length);
// charAt used to get a one letter in that word it is started to 0 back side its started to -1
console.log(text.charAt(text.length-3));
console.log(text.charAt(2));

// concat used for connect two words 
var text1="Hello";
var text2="World";
console.log(text1.concat(" ", text2));
var uyt=text1.concat(" ", text2);
console.log(uyt);

// includes is used to true or false if the text on that word output is true othervise output is false.
var text3="Hello Everyone Welcome to Uki Welcome to tech world";
console.log(text3.includes("Welcome"));

// indexof used for identify the letter's  number
console.log(text3.indexOf("e", 9));
// lastIndexOf used to identify the last name
console.log(text3.lastIndexOf("Welcome"));

// match use panna athila mention panra visayam irukka endu parthu display pannum normal a text eluthina oru output a tharum athuve"//g" eluthina global serch panni ethina irukku endu tharum "//gi" use panna capital small ellam edukkum. 
console.log(text3.match(/el/g));

// repeat use panrathu antha word a ethina thadava endalum print pannum
console.log(text1.repeat(4));

// replace use panrathu word a replace panrathukku
console.log(text3.replace("tech", "coding"));
// intha format la replace panna global a ella idamum irukkira word a replace pannum
console.log(text3.replace(/Welcome/g, "Hello"));

// search use panrathu oru word a search panrathukku
console.log(text3.search("Hello"));
// Intha format use panna capital a irunthalum first a irukkiratha accept pannum
console.log(text3.search(/everyone/i));

// Ithu use panrathu 0 la start panni sollura  number varaikkum ulla arrays a display pannnum minus use panna last la irunthu array a check pannum 
var text4=["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(text4.slice(1, 3));

// split la double quation la space illama use panna full senteceaum one one lettera convert panni tharum
console.log(text3.split(""));
// split la double quation la oru space use panna antha sentence a every word a devide panni tharum 
console.log(text3.split(" "));
// ippidi use panna o to 3 varaikkum irukkira words a display pannum ithuve double quates la space vidama iruntha 0 to 3 ila irukkira letters a display pannumippidi use panna o to 3 varaikkum irukkira words a display pannum ithuve double quates la space vidama iruntha 0 to 3 ila irukkira letters a display pannum
console.log(text3.split("", 3));

// ippidi kudutha 0 la irunthu count panni 1 ila irunthu 3 varaikkum ulla letters a display pannum
console.log(text3.substr(1, 3));
// ippidi eluthina number 2 kku piraku irukkira ellathaum display pannum
console.log(text3.substr(2));
// substring use panna last a kudukkira 4 enda value la text la 4 a edukkathu 4kku munnukku irukkira 2 kku piraku ullatha maddum than display pannum
console.log(text3.substring(2, 4));

// its used to convert the sentence in the lowercase
console.log(text3.toLowerCase());
// its used to convert the sentence in the uppercase
console.log(text3.toUpperCase());

// to string used to convert the sentence in the string format
console.log(text3.toString());

// trim used to remove the white spaces both side of the sentence trimStart used to remove the start white space trimEnd used to remove theend white spaces.
var text5="     Hello Everyone     ";
console.log(text5);
console.log(text5.trim());

// it is used to display the value of that variable 
console.log(text3.valueOf());

// floor oda function pinnukku enna than thaanam irunthalum sinna mulu ennukku maddam thaddi tharum
console.log(Math.floor(0.56));
console.log(Math.floor(5.67));
console.log(Math.floor(-6.7));

// normala kiddia mulu ennukku maddam thaddum minus a calculate pannama normala maddam thaddum
console.log(Math.round(2.45));
console.log(Math.round(3.87));
console.log(Math.round(-2.45));
console.log(Math.round(-3.87));

// ceil oda function pinnukku enna than thaanam irunthalum peria mulu ennukku maddam thaddi tharum
console.log(Math.ceil(0.56));
console.log(Math.ceil(5.67));
console.log(Math.ceil(-6.7));

//trunc use panrathu thasaththukku pinnukku enna irunthalum decimala cut pannidu munnukkun irukkira mulu enna maddum tharum
console.log(Math.trunc(0.56));
console.log(Math.trunc(5.67));
console.log(Math.trunc(-6.7));

// pi use panna vendia idatha value a asign pannama math.pi enda property a use pannalam
var R=7;
var A=Math.PI*R*R;
console.log(A);

//sqrt use panrathu square root endathukku than kudukira value da squareroot value a tharum minus a edukkathu because square value minus la varathu
console.log(Math.sqrt(64));
console.log(Math.sqrt(-9));

//max use panrathu kudukkira values la maximum number a display pannum integers minus numbers decimal nuumbers ellathaum edukkum
console.log(Math.max(25, 45, 56, 10));
console.log(Math.max(-5, -6, -10, -1));
console.log(Math.max(1.2, 2.6, 5.4, 1.6));

//min use panrathu kudukkira values la minimum number a display pannum integers minus numbers decimal nuumbers ellathaum edukkum
console.log(Math.min(25, 45, 56, 10));
console.log(Math.min(-5, -6, -10, -1));
console.log(Math.min(1.2, 2.6, 5.4, 1.6));

//pow use panrathu firsta kudukkira value va seconda kudukkira value varaikkum multiply panra mathiri varum athavathu x to the per y enda maathiri
console.log(Math.pow(2, 4));
console.log(Math.pow(0, 3));
console.log(Math.pow(-3, 3));

//  abs means absolute value kudukkira value va minus plus illama value a maddum tharum number kku string a edukkathu null endu kudutha 0 endu tharum because null kkana value 0
console.log(Math.abs(-8.5));
console.log(Math.abs(8.5));
console.log(Math.abs(null));

//post increment la value oda + add aakirathukku muthale value a display pannidum aana pre increment la value oda + add aaki vaara final answer a than dispaly pannum itha maathiri than minus kkum 
var by=4;
console.log(by++); //post increment
console.log(+by); //pre increment

console.log(by--);
console.log(--by);

// date object nnka kudukirapo ena time iruko antha time output aa varum
// const d = new Date();
// console.log(d);

// // nanka kudukira date output aa varum
// const b = new Date("2023-10-03");
// console.log(b);

// const s = new Date("October 13, 2014 11:13:00")
// console.log(s);

// // 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// const c = new Date(2018, 12, 24, 10, 33, 30, 0);
// console.log(c);

// // JavaScript counts months from 0 to 11 . so micha numbers aa count pani neyt year ku edukum. 
// // const d = new Date(2019, 14, 24, 10, 33, 30, 0);
// // console.log(d);

// // // JavaScript counts months from 0 to 11 3 print in apirl
// // const d = new Date(2018, 3, 24, 10, 33, 30, 0);
// // console.log(d);

// // doubt
// const d = new Date(2018, 05, 35, 10, 33, 30, 0);
// console.log(d);

// // get new date
// const d = new Date();
// let day = d.getDate();
// console.log(day);

// Get the day of a specific date
// const da = new Date("July 21, 1983 01:15:00");
// let dayy = da.getDate();
// console.log(dayy);

// // get the day of week
// const d = new Date();
// let day = d.getDay()
// console.log(day);

// Get the day of the week of a specific date
// const d = new Date("July 26, 1983 01:15:00");
// let day = d.getDay()
// console.log(day);

// get full year
// const d = new Date();
// let year = d.getFullYear();
// console.log(year);

// get the specipic year
// const d = new Date("July 21, 1983 01:15:00");
// let year = d.getFullYear();
// console.log(year);

// get hours
// const d = new Date();
// let hour = d.getHours();
// console.log(hour);

// // get specipic hour
// const d = new Date("July 21, 1983 08:15:00");
// let hour = d.getHours();
// console.log(hour);










//new Date option vera vera method la eluthinalum output day month date year time enda format la indian standard time la than varum normala blank a vidda current date month time a tharum bracket la ethachum month date year kudutha athukku athukkana day ellam output aakum bracket la 0 poda 1970 january 1 a outputa tharum.
console.log(new Date());

// toLocaleString use panrathu new Date la vaara output a local time kku change panna indian standerd time illama change pannum.
//output 7/1/2023, 9.15.23PM
const d=new Date();
console.log(d.toLocaleString());

// toDateString use panna intha format la output varum
// output sat Jan 07 2023
console.log(d.toDateString());

// toLocaleDateString use panrathu intha format la locale time a tharum 
// output 7/1/2023
console.log(d.toLocaleDateString());

// ithu use panna year month date enda formatla output varum.
// output 2023-01-07T15:54:56.612Z
console.log(d.toISOString());

// ithu use panna day date month year enda format la varum 
// output Sat, 07 Jan 2023 15:59:26 GMT
console.log(d.toUTCString());

// output "Sat Jan 07 2023 21:32:09 GMT+0530 (India Standard Time)" kidda thadda new date oda functionum ithuvum same than.
console.log(d.toString());

//get date oda function new date la irunthu date a maddum outputa tharum.
console.log(d.getDate());

//getDay function new date la irunthu daya output a tharum 0 to 6 varaikkum outputa tharum 0 sunday 1 monday intha orderla varum
console.log(d.getDay());

// getMonth method use panna new date la irunthu montha eduthu tharum 0 to 11 varaikkum month varum 0 january 1 february intha order la varum
console.log(d.getMonth());

//getFullYear use panrathu new date la irunthu full year a display pannum
console.log(d.getFullYear());

//getMinutes use panrathu newDate la irunthu minutes a display pannanum
console.log(d.getMinutes());

//getMilliseconds use panrathu newDate la irunthu millisecond a outputa tharum
console.log(d.getMilliseconds());

// get time use panna 1970 january 1 la irunthu ippa ulla time varaikkum millisecond la calculate panni output a tharum.
console.log(d.getTime());

// date.now use panrathu 1970 january 1 la irunthu ippa ulla time varaikkum millisecond la calculate panni tharum.
console.log(Date.now());

// parse use panrathu entha date kudukiramo 1970 january 1 la irunthu athuvaraikkum count panni millisecond la tharum
console.log(Date.parse("May 12, 2010"));

// date a set panrathukku ithu use panrathu
d.setDate(15);
console.log(d);
// bracket la 0 use panna irukkira month kku muthal month da last day a calculate panni tharum
console.log(d.setDate(0));

// itha use panni new date la irukkira year a bracket la kudutha year a change panna mudium 
d.setFullYear(2020);
console.log(d);

// itha use panni month a set pannalam
d.setMonth(3);
console.log(d);

// seconds a change panrathukku use pannalam
d.setSeconds(35);
console.log(d);

// hours a change panna use pannalam
d.setHours(8);
console.log(d);

// milliseconds a change panrathukku use aakum
d.setMilliseconds(58);
console.log(d);

// minutes alavila changes seia itha use pannalam
d.setMinutes(45);
console.log(d);

// naanka kudukkira millisecond a 1970 january 1 oda koodi vaara output a tharum 
d.setTime(1332403882588);
console.log(d);

// 1970 january 1 kkum ithila kudutha input kkumana kaalatha milli second la tharum
console.log(Date.UTC(2020, 02, 09));



// w oda max value enna endu check pannum 10 oda max value define panna mudiahtu athala undefine endu out put varum

console.log(Number.MAX_VALUE);
// w oda min value enna endu check pannum 10 oda min value define panna mudiahtu athala undefine endu out put varum
console.log(Number.MIN_VALUE);

// negative infinity 
console.log(Number.NEGATIVE_INFINITY);

// NaN means not a number
let T=NaN;
console.log(T);

// isfinite da function Infinity, -Infinity, NaN intha values vantha false matha padi value true a irukkum
console.log(isFinite(123));

// functionkkana output inteager aakavum data type number aakavum iruntha output true othervise condition false
console.log(Number.isInteger(4-2));

// output not a number a iruntha condition true othervise condition false.
console.log(isNaN('Hello'));

// output safeinteger a irunthu data type um numbera iruntha output true othervise output false  
console.log(Number.isSafeInteger('123'));

// toExponential enda default e value ithila 567.5 endu add panna oru thanathukku pinnala thasam kuthi ethina thaanam thasam thalli irukku endu output la varum ithukku 5.675e+2 endu varum
// ithuve 10030 endu iruntha 1.0030e+4 endu varum 4 thaanam thasam thalli kuthi irukku
let num1=567.5;
console.log(num1.toExponential());

// normala toFixed kuduthiddu bracket la ethuvum kudukkama vidda kudutha numbera mulu ennukku maddam thaddi tharum bracket la numbera kudutha athinayavathu thasamathukku maddam thaddum ippa 2 endu iruntha rendam thaanathukku maddam thaddum.
let num2=52.567;
console.log(num2.toFixed());

// toPrecision bracket la podura number length a kurikkum naanka kudukkira number varaikkumulla numbbers a print pannum ithukku output 52.56 endu varum lenght 1 endu kudutha 5e+1 endu varum athukku maddum ippidi varum earn enda athu thasathila vithiasa padurathala
console.log(num2.toPrecision(4));

// toString use panna value la irukkira string a output a tharum ithila mention panni irukkira rendu formatum same output a than tharum
let text10="Hello Everyone";
console.log(text10.toString());
console.log(text10);

// value of use panrathu function da value a output a tharum
console.log(text10.valueOf());

// ithu ellam some arithmetic logical operators.
x1=3;
x2=4;
x3=5;
console.log(x1+x2+x3);
console.log(x3-x2);
console.log(x1*x2*x3);
console.log(x3/x2);
// ithu x2 oda onda koodi print pannum
x2++;
console.log(x2);
// ithu x1 la irunthu onda kalichu print pannum
x1--;
console.log(x1);

// ippidi iruntha y1 inda amount oda 30 koodi output a tharum.
var y1;
y1=10;
y1+=30;
console.log(y1);

// ippa y1 enda amount 40 a irukkum so athiila irunthu 20 minus aaki 20 outputa varum
y1-=20;
console.log(y1);


var by=4;
by++;
console.log(by); //post increment
++by;
console.log(by); //pre increment

by--;
console.log(by);
--by;
console.log(by);

// double equal use panrathu value a check panna string a eluthina kooda value euala iruntha function true illadi false.
num20=10;
num30=5;
console.log(num20==10);
console.log(num20=="10");

// trible equal use panrathu type a check panrathukku ithila rendum number type so output  true a irukkum
console.log(num20===10);
// ithila type check pannum pothu ondu number type ondu string type so output false a irukkum
console.log(num20==="10");

// != ithu not euala mention pannum athoda value a check pannum so num20 not equal 5 a iruntha output true equala iruntha output false
console.log(num20!=5);

// !== enda not equal type a check pannum 20 number type "10" string type son rendum not equal so function true a irukkum ithuve equala iruntha function false a irukkum.
console.log(num20!=="10");

// functions oda output correcta iruntha true othervise false
console.log(num20>2);
console.log(num20<2);
console.log(num20<=10);
console.log(num20>=10);

//&& use panrathu rendu conditionum true iruntha output true a irukkium illadi output false
console.log(num20 < 20 && num20 < 1);
// || use panrathu or condition ithila oru condition saria irunthalum output true othervise output false
console.log(num20 < 20 || num20 < 1);
// condition saria iruntha output true othervise output false
console.log(!(num20>num30));




