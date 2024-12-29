//Input Validation

//get form inputs
let startMiles = document.getElementsByTagName("input")[0];
let endMiles = document.getElementsByTagName("input")[1];
let gallonsUsed = document.getElementsByTagName("input")[2];
let mpg = document.getElementsByTagName("input")[3];

//error message para
paraErr = document.getElementById("err");

//define function to check for numbers
function validateInputs(){
	//custom erro messages
	//starting mileage input is not empty
	if(startMiles.value == ""){
		throw "Starting mileage input is empty. Please enter a value."
	}
	
	//check if the value is numeric
	if (isNaN(startMiles.value)){
		throw "Invalid input. Please enter a numeric value for starting mileage."
	}
	
	//ending mileage input is not empty
	if (endMiles.value == "") {
		throw "Ending mileage input is empty. Please enter a value."
	}

	//check if the value is numeric
	if (isNaN(endMiles.value)) {
		throw "Invalid input. Please enter a numeric value for ending mileage."
	}	
	
	//gallons used input is not empty
	if (gallonsUsed.value == "") {
		throw "Gallons used input is empty. Please enter a value."
	}

	//check if the value is numeric
	if (isNaN(gallonsUsed.value)) {
		throw "Invalid input. Please enter a numeric value for gallons used."
	}	
	
}

//define function to compute miles per gallon
function computeMPG(){
	//try to compute miles per gallon
	try{
		//call input validation Function
		validateInputs()
		let milesPerGal = (endMiles.value-startMiles.value)/(gallonsUsed.value)
		//clear error messages
		paraErr.innerHTML = "";
		
		//display miles per gallon computed value (formatted to 2 dec. pcs.)
		mpg.value = milesPerGal.toFixed(2)
		
		
	}
	//catch Block
	catch(e){
		//ref para to report Error
		//paraErr = document.getElementById("err");
		
		//display the error Message
		paraErr.innerHTML = e;
	}
	
	//finally block 
	finally{
		//alert("Whew!! That took a while!")
		
	}
	
}

//call function
let btnSubmit = document.getElementsByTagName("input")[5];
btnSubmit.onclick = function(){ computeMPG()}
//clear function
let btnReset = document.getElementsByTagName("reset");
document.getElementById("btnReset").onclick = function() {computeMPG();}

//Note: onblur event is triggered when an input loses focus (i.e., when you try to move away from it)
//e.g., startMiles.onblur = function (){...}







