//topic 2 task 4

let numArray = [-40,23,-15,4,7,18,-29,35,58,95,-167,678];
let positiveOddNumbers = [];
let negativeEvenNumbers = [];

for (let i = 0; i < numArray.length; i++)

	if (numArray[i] > 0)
	{
		if (numArray[i] % 2 == 1)
		{
			positiveOddNumbers.push(numArray[i]);
		}

		else
		{}
	}

	else
	{
		if (numArray[i] % 2 == 0)
		{
			negativeEvenNumbers.push(numArray[i]);
		}

		else
		{}
	}

console.log(positiveOddNumbers);
console.log(negativeEvenNumbers);
