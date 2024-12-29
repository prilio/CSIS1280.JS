//JS script for mutually exclusive choices 

//define a Function
function progLangChoice(){
	//define variables
	let progLangChoice = document.getElementsByName("progLanguage")
	let output = document.getElementById("output")
	
	
	//Evaluate the choice selected by the user and display it
	//use the "checked" property of the form input to evaluate which input is selected
	for (let i=0; i<progLangChoice.length;i++) {
		if (progLangChoice[i].checked){
			//dispaly the selected choice		
			
			output.innerHTML = "Your selected Programming language is " + progLangChoice[i].value;
			//console.log(progLangChoice[i].value)
		}
	}
	
}

//call the function
document.getElementById("btnSubmit").onclick = function(){progLangChoice()}

//clear output
document.getElementById("btnReset").onclick = function() {
	output.innerHTML = "";}
	
	
	
	
	



