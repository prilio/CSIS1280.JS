//Flying butterfly script
//reference starting point
var leftPos = -100;
var topPos = 250;

	//use setInterval function to animate the butterfly
	//"hoysting" makes this possible
	
	//assign interval ID
	var intID = setInterval(flyButterfly,100);

//define flying butterfly function
function flyButterfly(){
	//reference butterfly Image
	var butterfly = document.getElementById("butterfly");
	
	//reference position of the butterfly
	butterfly.style.left = leftPos+"px";
	butterfly.style.top = topPos+"px";
	
	//change the butterfly to visible
	butterfly.style.visibility = "visible";
	
	
	//increace x-value by 10 and reduce y-value by 2.
	leftPos +=10;
	topPos -=2;
	
	//reference the coordinates of the flower
	//Is the butterfly there? If so, clearInterval
	//get screen width and divide it by 2
	//then substract the width of the image up to flowr
	//console.log(screen.availLeft)
	console.log(screen.availWidth)
	//if(leftPos==590||topPos==125){
		if (leftPos>=((screen.availWidth)/2-100)||topPos==128) {
		//clear the interval set
		clearInterval(intID);
	}
	//check to see whether butterfloy has flown off-screen
	//if so go back to initial position
	else{if(leftPos >screen.availWidth||topPos>screen.availHeight){
		leftPos = -100;
		topPos=250;
		
	}}
	
}

