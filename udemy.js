// Fill method 
var number = [1,25,30,42,18];
// number.fill(5);
// console.log(number);


// index aa podanum munukum pinukum irukiratha 1, 3 athu index
number.fill(10,1,3);
console.log(number);

// Filter method 
const age = [32,33,16,40];
let reasult = age.filter(function(value){
    return value > 18;
}
)
console.log(reasult);

// find 
const ages = [20,32, 33, 16, 40];
 let reasults= ages.find(function (value) {
    return value > 18;
})
 console.log(reasults);

// isArray athavathu arraya ilaya endu check panum
 let text = ["computer"];
 let result = Array.isArray(text);
 console.log(result);

 const actor = ["vijai","ajith","visal","vikram"];
 let results= Array.isArray(actor);
 console.log(results);


// concat enda 2 aayum join pani tharum 
var tree = ["mango","banana"];
var tree1 = ["coconet","cocho"];
console.log(tree.concat(tree1));

let numb = [1,2,3,4,5,6];
let numb1 = [7,8,9,10].concat(numb);
console.log(numb1);
 

// concat enrathuku pathila 3 ... podalum ore answer tha varum 
let num = [1,2,3,4,5,6];
let num1 = [7,8,9,10,...num];
console.log(num1);