//topic 2 task 2

// declare arrays for holding all numbers and prime numbers

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
			21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
			41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
			61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
			81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

let primeNumbers = [];

// start loop to check whether all numbers are either equal to, or not divisibe by, 2 3 5 7 or 11

for (let i = 0; i < numbers.length; i++)

{
	// these statements check if the number is one of the five prime we'll be checking divisibility by later

	if (numbers[i] == 2 ||
		numbers[i] == 3 ||
		numbers[i] == 5 ||
		numbers[i] == 7 ||
		numbers[i] == 11 )

		{
			primeNumbers.push(numbers[i]);
		}

	else
	{

		// then these statements check if the number is 	divisible by any of those numbers, and eliminate 		them if so (as well as dealing with 1)

		if (
		numbers[i] == 1 ||
		numbers[i] % 2 == 0 ||
		numbers[i] % 3 == 0 ||
		numbers[i] % 5 == 0 ||
		numbers[i] % 7 == 0 ||
		numbers[i] % 11 == 0 )

		{}

		else
		{
			primeNumbers.push(numbers[i]);
		}

	}

}

console.log(primeNumbers);

// expected result:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97
