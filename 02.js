var User;
// intalization optional , global scope
console.log(User);

let age;
// intalization optional , block scope

const city = "Banglore";
const PI = 3.14;
// PI = 5.23 // not possible
// block scoped read only
// we can not create cont without iniatazliation

const $jay = "jay";

// x = 12 // undeclare global var

// destrcurting ?
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);

let names = ["jay", "kishan"];
let [name1, name2] = names;
console.log(`name1 = ${name1}  name2 = ${name2}`);
// `` string interpolation

// hoisting
console.log(baz); // undefined

// Throws 'TypeError: baz is not a function'
baz();
/* Function expression */
var baz = function () {
  console.log("bar2");
};
// function baz() {
//     console.log('bar2');
// };





// Notes :
/*
-> javascript is case sensitive and uses unicode
-> instructions are called statements seprated by ;
-> idendifer can start with _ , a to z ,$
// single line comment
/* multi line commant
-> hashbang commants
-> with out assign value to var and let it will set to undefind
-> we can only destrccture same typeof data
*/
