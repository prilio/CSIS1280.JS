//Loop control JS Script

//1) break statement

//function
function demoBreakStatement(){
	//ref display para

	let display = document.getElementById("display")
	
	//display odd numbers between 1 and 50 inclusive
	//if the number is 25; break
	for (let i=1; i<=50; i+=2) {

		display.innerHTML += i +"<br>"
		//break the loop if i==25
		if (i==25){
			break;
		}	
	}
}
//call function
demoBreakStatement()

//) continue statement

//function
function demoContinueStatement()
{
	//ref display para

	let display1 = document.getElementById("display1")

	//display odd numbers between 1 and 50 inclusive
	//if the number is between 25 and 35; continue
	//i/e. exclude values between 25 and 35
	for (let j=1; j<=50; j+=2) {

		
		//continue the loop if j is between 25 and 35
		if (j>25 && j<35) {
			continue;
		}
		display1.innerHTML += j +"<br>"
	}
}
//call function
demoContinueStatement()