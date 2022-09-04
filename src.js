function convertDateFormat(date){
	let dd = String(date.getDate()).padStart(2, '0');
	let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0
	let yyyy = date.getFullYear();
	date = yyyy + '-' + mm + '-' + dd;
	return date
}

function convertDisplayDateFormat(date){
	let dd = String(date.getDate()).padStart(2, '0');
	let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0
	let yyyy = date.getFullYear();
	date = dd + '/' + mm + '/' + yyyy;
	return date
}

function createOutreachDates(date) {
	// converts string to data object
	date = new Date(date);
	outreachDates = [date];
	for (let step = 0; step < 6; step++) {
		currentDate = outreachDates[outreachDates.length-1];
		console.log(step + " currentDate: " + currentDate);
		// Runs 6 times
		nextDate = new Date();
		nextDate.setDate(currentDate.getDate() + 2);
		console.log(step + " nextDate: " + nextDate);
		// if sat, add 2 days to get monday
		// Gets the current day name:  Sunday - Saturday : returns 0 - 6
		if(nextDate.getDay() === 6){ 
			nextDate.setDate(nextDate.getDate() + 2) // increments date by 2
			console.log(step + " Sat nextDate: " + nextDate);
		}
		// if sun, add 1 day to get monday
		if(nextDate.getDay() === 0){
			nextDate.setDate(nextDate.getDate() + 1)
			console.log(step + " Sun nextDate: " + nextDate);
		}
		outreachDates.push(nextDate);
	}
	return outreachDates; 
}

function convertAllDates(outreachDates){
	dates = outreachDates.map(convertDisplayDateFormat);
	return dates;
}

function updateDateTable(outreachDates){
	console.log(outreachDates);
	for (let step = 0; step < 7; step++){
		document.getElementById("o"+step.toString()).innerHTML = outreachDates[step]
	}
}

function dateChange(){
	date = document.getElementById('start').value;
	outreachDates = createOutreachDates(date);
	outreachDates = convertAllDates(outreachDates); // convert dates to dd/mm/yyyy format
	updateDateTable(outreachDates);
}

function copyClipboard(){
	let copyDates = "";
	for (const date of outreachDates){
		copyDates += date + "	"; //this blank is a tab so that excel will split it as a delimiter
	}
	navigator.clipboard.writeText(copyDates);
}

// initial setup

let today = new Date();
today = convertDateFormat(today);
document.getElementById('start').value = today;
dateChange();

// change dates when start date is modified
document.getElementById('start').addEventListener("change", dateChange);

