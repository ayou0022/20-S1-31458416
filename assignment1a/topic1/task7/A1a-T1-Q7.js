// topic 1 task 7

// assuming function is ax^2 + bx + c
// define a = 5, b = 25, c = 20
// define root1 and root2

let a = 5;
let b = 25;
let c = 20;

let root1 = "";
let root2 = "";


// perform calculations for both 'positive' and 'negative' versions of quadratic formula provided
// assign results to root1 and root2

root1 = (-b + Math.sqrt(Math.pow(b,2) - 4*a*c)) / (2*a);
root2 = (-b - Math.sqrt(Math.pow(b,2) - 4*a*c)) / (2*a);

console.log(root1 + "\n" + root2);
