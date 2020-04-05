//topic 2 task 7

let dataArray = [2,2,3,3,3,4,5,5,7,8,8,34,45,45,67,67,95,96,567,578];

// mean

let total = 0;
for (let i = 0; i < dataArray.length; i++)

{
	total += dataArray[i];
}

let mean = total / dataArray.length;

console.log("mean: " + mean);


// median

let median = dataArray[dataArray.length / 2];

console.log("median: " + median);


// standard deviation

let stdDev = 0;
let sum = 0;

for (let j = 0; j < dataArray.length; j++)
{
	sum += Math.pow((dataArray[j] - mean),2);
}

stdDev = Math.sqrt(sum/dataArray.length);

console.log("standard deviation: " + stdDev.toFixed(2));
