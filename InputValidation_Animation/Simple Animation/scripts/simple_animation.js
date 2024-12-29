//Simple animation JS File

//create an array of puppies
const puppiesArr = new Array(6);

//current puppy
let curPuppy = 0;

//use loop to populate the puppiesArr
for (let i=0; i<puppiesArr.length; i++) {
	//define images Array
	puppiesArr[i] = new Image();
	
	puppiesArr[i].src = "images/puppy" +i +".gif";
}

//function to animate images
function animatePuppies(){
	//check image position: if at last image, go back to first image; otherwise, advance to next image
	if (curPuppy==5) {
		curPuppy =0;
	}
	else {
		//advance to the next Image
		curPuppy++;
	}
	
	//ref display area
	let display = document.getElementById("myimg")
	//asign src attribute to this Element
	display.src = puppiesArr[curPuppy].src;
}


