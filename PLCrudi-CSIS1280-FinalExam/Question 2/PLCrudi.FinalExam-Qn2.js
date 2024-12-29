//JS File for question 2

//Array of health tips
const arrHealthyLivingTips = [
						"Give Your Breakfast a Protein Boost",
						"Consume Protein at Every Meal",
						"Limit High-Glycemic Carbohydrate Foods",
						"Eat Breakfast Like a King, Lunch Like a Prince, and Dinner Like a Pauper",
						"Make a Grocery List and Stick to It",
						"Cut Calories, Not Flavor",
						"Don’t Skip Meals",
						"Eat plenty of fruits and vegetables",
						"Drink plenty of water",
						"Eat high fibre foods",
						"Get more active",
						"Do not stock junk food"
						]
						
//Please write your code below
let bmi = document.getElementById("user_bmi").value;
let category = document.getElementById("bmi_category");
let heighF = document.getElementById("ht_ft").value;
let heighI= document.getElementById("ht_in").value;
let weight = document.getElementById("wt").value;
let totalFeet = 12*heighI;
let meters = totalFeet/39.37;


function calculateBMI(){
	bmi = (weight/(meters*meters)).toFixed(1)
	
	if (bmi<18.5) {
		category.innerHTML = "Underweight";
	}
	else if (bmi<25) {
		category.innerHTML = "Normal weigtht";
	}
	else if (bmi<30) {
		category.innerHTML= "Overweight";
	}
	else {
		category.innerHTML = "Obese";
	}
}

function ClearInputsOutupts (){
	let output = document.getElementById("output");
	document.getElementById(dbtReset).onclick = function() {output.innerHTML="";}
}

//call the Function
document.getElementById(btnSubmit).onclick = function() {calculateBMI();}












