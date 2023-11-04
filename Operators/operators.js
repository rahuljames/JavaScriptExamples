//Assignmant Operators : =
let test = 10;
console.log(test);

//Arithematical Operators : + ,- and * / %

let num1 = 10;
let num2 = 20;

console.log(`sum : ${num1 + num2}`); //30
console.log(`sub : ${num1 - num2}`); //-10
console.log(`mul : ${num1 * num2}`); // 200
console.log(`div : ${num1 / num2}`); //0.5

// %

let num = 12;
if (num % 2 == 0) {
  console.log("is Even");
} else {
  console.log("is Odd");
}

// Short hand Math Operators

let a = 20;
let b = 30;
let add = 10;
add = add + (a + b);
add += a + b;
console.log(add);

//Conditional Operators : <, >, <=, >=, !=

let marks = 35;
if (marks <= 35) {
  console.log("You Failed the Exam");
} else {
  console.log("You Cleared the Exam");
}

//Unary Operators : ++ , --

let x = 10;
x -= 1;
x = x - 1;
x--;
console.log(x);

//logical Operators :  && , || , ^

// And => T && T -> T
// OR => F && F -> F
// ^ => T ^ F,  F ^ T -> T;

let inrelation = true;
let ParentAgreed = false;

if (inrelation && ParentAgreed) {
  console.log("Get Marry Soon");
} else {
  console.log("Wait until the Parents Agreed");
}

//Ternary Operators: ? :

/*
Syntax:(consdition) ? true : false;
*/

marks = 95;
let message = "";
marks <= 35 ? (message = "Failed") : (message = "Passed");
console.log(message);

//Equality Operator: ==,  ===

a = 10;
b = "10";
if (a === b) {
  console.log("both are equal");
} else {
  console.log("Both are not equal");
}
