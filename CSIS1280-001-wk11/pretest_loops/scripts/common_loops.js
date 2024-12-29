//JS File
//count down to new year
//while loop

//reference display paragraph
let display = document.getElementById('display');

//1) initialize counter
let secsLeft=10;

//while and counter update
//condition: testing the number seconds left
function displayNewYearMessage(){
while(secsLeft>0){
//display the number of seconds left
	display.innerHTML += `There are ${secsLeft}	seconds left to new year <br>`;
	//update the counter
	//secsLeft = secsLeft -1
	//secsLeft -=1
	//secsLeft--
	secsLeft--;
}
display.innerHTML += "Happy New Year!";
}

//call the function
displayNewYearMessage()

//display even numbetrs between 1 and 50 inclusive
//count up loop

let display1 = document.getElementById("display1")
//initialize counter
let counter=1;
function displayEvenNumbers(){
while(counter<=50){
	//display even numbers, one per line
	//check whether a given number is even; if so, display it
	if(counter%2==0)
		display1.innerHTML += counter +"<br>"
	//update counter
	//counter = counter +1
	//counter += 1
	//counter++
	counter++;
	
}
}

//call the function
displayEvenNumbers()


//display numbers between 6 and 50 that are multiples of 6
let display2 = document.getElementById("display2")
//initialize counter
let counter1=6;
function displaySixMultiples()
{
	while (counter1<=50) {
		//display multiples of 6, one per line
		//check whether a given number is a multiple of 6; if so, display it
		display2.innerHTML += counter1 +"<br>"
		//update counter
		//counter = counter +6
		//counter += 6
		
		counter1 += 6;

	}
}

//call the function
displaySixMultiples()
