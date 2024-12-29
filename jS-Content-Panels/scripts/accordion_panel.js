//JS Accordion Script

//define function to turn on "+" and "-" icons
function toggleFaIcons(el, className1, className2){
	el.classList.toggle(className1);
	el.classList.toggle(className2);
}




//ref container element
//let container = document.querySelectorAll(".container");
let container = document.getElementsByClassName("container");

//for loop to work through the collection
for (let i=0; i<container.length; i++){
	
	//add active class to a clicked container
	//add eventListener() method to "listen to" click event
	container[i].addEventListener("click", function(){
		//use the "this" reference ("this" is used to refer to an active/current object)
		//console.log(this.classList)
		this.classList.toggle('active');
		
		let el= this.children[0].children[0];
		let plus_icon = "fa-plus-circle";
		let minus_icon = "fa-minus-circle";
		
		//toggle "+" and "-" incons
		toggleFaIcons(el, plus_icon, minus_icon)
	})
	
}