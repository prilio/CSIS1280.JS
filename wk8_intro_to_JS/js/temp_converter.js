// JS File for Temp Converter

//Reference html elements
//ref textboxes
let txtC = document.getElementById("tempC");
let txtF = document.getElementById("tempF");

//ref the buttons
let btnConv2F = document.getElementById("btnConvToF");
let btnConv2C = document.getElementById("btnConvToC");

//get user inputs
//let txtCVal = txtC.value;
//console.log(txtCVal);
//let txtFVal = txtF.value;
//console.log(txtFVal);
const TEMP32 = 32;
TEMP32 = 30;

//build temp converter functions
var fTemp;
var fTemp;
function convertCToF(c_temp){
	let fTemp = (1.0*c_temp*9/5)+TEMP32;
	console.log(fTemp);
	
	//display the value in F textbox
	//use toFixed() function to format output to the desired number of decimal places.
	txtF.value = fTemp.toFixed(2);
}
//console.log(fTemp);

function convertFToC(f_temp)
{
	let cTemp = (1.0*f_temp-TEMP32)*5/9;
    console.log(cTemp);
    
	//display the value in F textbox
	//use toFixed() function to format output to the desired number of decimal places.
	txtC.value = cTemp.toFixed(2);
}

//process the button click events
//calling the functions
//1) using the onclick event handler
btnConv2F.onclick = function() {convertCToF(txtC.value);}

//2) using the addEventListener() method
//btnConv2F.addEventListener("click", convertCToF());

btnConv2C.onclick = function() {convertFToC(txtF.value);}
