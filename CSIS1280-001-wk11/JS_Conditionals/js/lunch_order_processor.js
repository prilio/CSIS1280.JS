//Lunch Processor JS Script

//create function and reference form elements
 function processLunchOrder(){
 	let output = document.getElementById("output");
 	let lunchItems = document.getElementsByName("lunchItems")
 	
 	//cost accumulator (shoudl be initialized)
 	let lunchCost = 0;
 	
 	
 	//Note: make sure to convert retrieved form input (considered as text) to numeric for comuptations
 	//use parseInt() for integer values or parseFloat() for floating values
 	
 	//evaluate user choices
	 for (let j=0; j<lunchItems.length; j++){
		 if(lunchItems[j].checked)
		 {
		 	//explicitly convert form input to floating number
	 	lunchCost += parseFloat(lunchItems[j].value)
	//display total lunch cost
	output.innerHTML = "The total cost of your lunch order is $" +lunchCost.toFixed(2);
	}
	}
 }
 
 //call the Function
 //call the function
 document.getElementById("btnSubmit").onclick = function() {processLunchOrder()}

 //clear output
 document.getElementById("btnReset").onclick = function() {
	 output.innerHTML = "";}

 
 
 
 