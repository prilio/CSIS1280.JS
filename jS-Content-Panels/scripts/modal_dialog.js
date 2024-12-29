//Modal Dialog JS File

//reference the elements
let btn = document.getElementById("myBtn")
let modal = document.getElementById("myModal")
let span = document.querySelector(".close")

//process button click Event
btn.onclick = function(){
	//show modal
	modal.style.display = "inline";
}

//close modal when span is clicked
span.onclick = function(){
	modal.style.display = "none";
}