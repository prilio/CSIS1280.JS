//Loan Prequalifier JS Script

//create function and reference form inputs
/*assumption (conditions): 
1) must have at least 50K annual salary
2) must have at least 4 years of work experience
3) debt-to-income ratio <=0.35
*/

function loanPrequalify(){
	//constants
	const DTIR = 0.35;
	const SALARY = 50000;
	const TENURE = 4;
	
	let salary = document.getElementById("salary").value;
	let workYears = document.getElementById("work_exp").value;
	let curLoan = document.getElementById("cur_loan").value;
	let dtir = curLoan/salary;
	let output = document.getElementById("output");
	
	//amount prequalified 
	//amt = (DTIR-dtir)*salary
	let amtQualified = (DTIR-dtir)*parseFloat(salary)
	
	if(salary>=SALARY){
		if(workYears>=TENURE){
			if (dtir<=DTIR) {
				output.innerHTML ="Congratulations! You qualify for a loan. The maximum you can borrow is $" +amtQualified.toFixed(2);
			}
			else {
				output.innerHTML = "Sorry you don't qualify for a loan at the moment because your debt-to-income ratio is over 0.35."
			} //end of inner most if part
		}
		else {
			output.innerHTML = "Sorry you don't qualify for a loan at the moment because your number of years of work is less than the required 4."	
		}//end of middle if part
	}
	else {
		output.innerHTML = "Sorry you don't qualify for a loan at the moment because your annual income is less that the required $50,000."
	}
	
}


//call the function
document.getElementById("btnSubmit").onclick = function() {loanPrequalify()}

//clear output
document.getElementById("btnReset").onclick = function() {
	output.innerHTML = "";}

