// topic 1 task 1

// define angle α = 34.5 **convert from degrees to radians
// define length of side a = 15.5,
// define length of side b = 0

let α = ((34.5*Math.PI)/180);
let a = 15.5;
let b = 0;

// tan α = b/a
// b = a tan α

b = a * Math.tan(α);

// console.log(b to 2dp)

b = b.toFixed(2);
console.log(b);
