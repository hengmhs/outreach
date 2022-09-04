let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

document.getElementById('start').value = today;

let test = new Date();
// Gets the current day name:  Sunday - Saturday : returns 0 - 6
console.log(test.getDay())

// increments date by 1 
test.setDate(test.getDate() + 1)

console.log(test.getDay())

// Write a function that takes in a date and returns an array of 7 dates

startDate = new Date();
outreachDates = [startDate];

let nextDate = startDate

console.log(nextDate);

for (let step = 0; step < 6; step++) {
	// Runs 6 times
	nextDate.setDate(nextDate.getDate() + 2)
	// if sat, add 2 days to get monday
	if(nextDate.getDay() === 6){
		nextDate.setDate(nextDate.getDate() + 2)
	}
	// if sun, add 1 day to get monday
	if(nextDate.getDay() === 0){
		nextDate.setDate(nextDate.getDate() + 1)
	}
	outreachDates.push(nextDate);
  }

  console.log(outreachDates);