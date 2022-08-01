/*
=> 8 data types
=> 7 primitiv :
    1. boolean
    2. null
    3. undefind
    4. Number (int or floating)
    5. Bigint
    6. String
    7. Symbol : A data type whose instances are unique and immutable.

    The 'object' is a non-primitive data type in JavaScript.
*/

let name = 12;
let userName = "jay" + 12;
console.log(userName);

let a = "12";
let b = 6;
console.log(a + b);

let c = 12;
let d = "6";
console.log(c + d);

console.log("37" - 7);

// convert string into number
//parseInt()
//parseFloat()
let n1 = "25";
console.log(parseInt(n1));

// literals
// 1. array literals

let langs = ["js", "java", "python", "php", "go"];
console.log(typeof langs);

langs.map((lang) => {
  console.log(lang);
});

let fish = ["Lion", , "Angel"];
console.log(fish);

// 2. boolean litrels : true and false

console.log("John's cat".length);

// String interpolation
const namee = "jay",
  time = "today";
console.log(`Hello ${namee}, how are you ${time}?`);
