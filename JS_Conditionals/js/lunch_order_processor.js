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
 	if(chicken.checked){
 		//add the cost of chicken to lunch order cost
 		lunchCost += parseFloat(chicken.value);
 	}
 	
	 if (halibut.checked) {
		 //add the cost of halibut to lunch order cost
		 lunchCost += parseFloat(halibut.value);
	 }
	 
	 if (salmon.checked) {
		 //add the cost of salmon to lunch order cost
		 //lunchCost = lunchCost +salmon cost
		 lunchCost += parseFloat(salmon.value);
	 }
	 
	 if (salad.checked) {
		 //add the cost of salad to lunch order cost
		 lunchCost += parseFloat(salad.value);
	 }
	 
	//display total lunch cost
	output.innerHTML = "The total cost of your lunch order is $" +lunchCost.toFixed(2);
	 
 	
 }
 
 //call the Function
 //call the function
 document.getElementById("btnSubmit").onclick = function() {processLunchOrder()}

 //clear output
 document.getElementById("btnReset").onclick = function() {
	 output.innerHTML = "";}

 
 
 
 