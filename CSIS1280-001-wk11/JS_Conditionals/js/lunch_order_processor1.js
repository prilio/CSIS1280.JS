//Lunch Processor JS Script

//create function and reference form elements
 function processLunchOrder(){
 	let output = document.getElementById("output");
 	let chicken = document.getElementById('chicken');
 	let halibut = document.getElementById('halibut');
 	//let hamburger = document.getElementById('hamburger');
 	let salmon = document.getElementById('salmon');
 	let salad = document.getElementById('salad');
 	
 	//cost accumulator (shoudl be initialized)
 	let lunchCost = 0;
 	
 	
 	//Note: make sure to convert retrieved form input (considered as text) to numeric for comuptations
 	//use parseInt() for integer values or parseFloat() for floating values
 	
 	//evaluate user choices
	 (chicken.checked)?lunchCost += parseFloat(chicken.value):lunchCost +=0;
 	
 	
	 (halibut.checked)?lunchCost += parseFloat(halibut.value):lunchCost +=0;
	 
	 
	 (salmon.checked)?lunchCost += parseFloat(salmon.value):lunchCost +=0;
	 
	 
	 (salad.checked)?lunchCost += parseFloat(salad.value):lunchCost +=0;
	 
	 
	//display total lunch cost
	output.innerHTML = "The total cost of your lunch order is $" +lunchCost.toFixed(2);
	 
 	
 }
 
 //call the Function
 //call the function
 document.getElementById("btnSubmit").onclick = function() {processLunchOrder()}

 //clear output
 document.getElementById("btnReset").onclick = function() {
	 output.innerHTML = "";}

 
 
 
 