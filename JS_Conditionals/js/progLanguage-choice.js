//JS script for mutually exclusive choices 

//define a Function
function progLangChoice(){
	//define variables
	var cSharp = document.getElementById("csharp");
	var java = document.getElementById("java");
	var php = document.getElementById("php");
	var javascript = document.getElementById("javascript");
	var python = document.getElementById("python");
	var output = document.getElementById("output");
	var txt = "Your favorite programming language is ";
	
	//Evaluate the choice selected by the user and display it
	//use the "checked" property of the form input to evaluate which input is selected
	if (cSharp.checked) {
		output.innerHTML = txt +cSharp.value;
	}
	else if (java.checked) {
		output.innerHTML = txt +java.value;
	}
	else if (php.checked) {
		output.innerHTML = txt +php.value;
	}
	
	else if (javascript.checked) {
		output.innerHTML = txt +javascript.value;
	}
	else {
		output.innerHTML = txt +python.value;
	}
	
}

//call the function
document.getElementById("btnSubmit").onclick = function(){progLangChoice()}

//clear output
document.getElementById("btnReset").onclick = function() {
	output.innerHTML = "";}
	
	
	
	
	



