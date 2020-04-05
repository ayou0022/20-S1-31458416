// topic 2 task 5


// define income = 60000, taxBracket = "", taxDue = 0

let income = 60000;
let taxDue = 0;


// calculate the tax due for the income and print

if (income <= 18200)
{
	taxDue = 0;
}
	else if (income > 18200 && income <= 37000)
{
	taxDue = ((income - 18200) * 0.39);
}
	else if (income > 37000 && income <= 90000)
{
	taxDue = (3572 + ((income - 37000) * 0.325));
}
	else if (income > 90000 && income <= 180000)
{
	taxDue = (20797 + ((income - 90000) * 0.37));
}
	else
{
	taxDue = (54097 + ((income - 180000) * 0.45));
}

console.log("Tax due: " + taxDue);
