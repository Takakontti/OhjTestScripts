import { divide } from '../src/calculator.js';

// one positive and 4 negative test cases for divide function
let test1 = divide(10, 2);
console.log(test1);

let test2 = divide(10, 0);
console.log(test2);

let test3 = divide("five", 5);
console.log(test3);

const number = "text";
let test4 = divide(5, number);
console.log(test4);

typeof 42n === "bigint";
let test5 = divide(42n, 2);
console.log(test5);
