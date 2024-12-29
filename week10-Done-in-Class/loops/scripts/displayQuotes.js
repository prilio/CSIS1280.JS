//do...while loop
//define array
var arrMotivation = new Array("The Way Get Started Is To Quit Talking And Begin Doing. - Walt Disney",
"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.- Winston Churchill",
"Don't Let Yesterday Take Up Too Much Of Today. - Will Rogers",
"You Learn More From Failure Than From Success. Don't Let It Stop You. Failure Builds Character. - Unknown",
"It's Not Whether You Get Knocked Down, It's Whether You Get Up. - Vince Lombardi",
"If You Are Working On Something That You Really Care About, You Don't Have To Be Pushed. The Vision Pulls You. - Steve Jobs",
"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. - Rob Siltanen",
"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. - Og Mandino",
"Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That's The Classic Entrepreneur. - Mohnish Pabrai",
"We May Encounter Many Defeats But We Must Not Be Defeated. - Maya Angelou");


//Add your own 	quote to the Array
function addQuote(val) {
	//add the new value to last position of the Array
	//use push() method
	arrMotivation.push(val);
	
	//view the modified array
	console.log(arrMotivation);
	
}

//call function
let myQuote = document.getElementById("myQuote")
document.getElementById("btn3").onclick = function(){
	addQuote(myQuote.value)
}

//helper function to generate indices at Random
//use the Math.random() function: generates values between 0 an 1.
//use the Math.floor() to round them to integers

function genRandInt(min, max){
	//retun the result to be used in a do..while loop
	return Math.floor((Math.random()*(max-min)+min));
}

//define min and max values
let min=0;
let max = arrMotivation.length;

//define do...while loop
//generates the unique indices
let indx1, indx2, indx3;
do {
	indx1 = genRandInt(min,max);
	indx2 = genRandInt(min,max);
	indx3 = genRandInt(min,max);
}
while(indx1==indx2||indx1==indx3||indx2==indx3)
	
//display the randomly selected indices
let subQuotes = document.getElementById("mQuotes");

//function to display the selected quotes
function displayQuotes(){
	subQuotes.innerHTML = arrMotivation[indx1] +"<br><br>";
	subQuotes.innerHTML += arrMotivation[indx2] +"<br><br>";
	subQuotes.innerHTML += arrMotivation[indx3] +"<br><br>";
}

//call the Function
let submit = document.getElementById("btn1");
submit.onclick = function(){
	displayQuotes();
}





















