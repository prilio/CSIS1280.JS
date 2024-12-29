//for...of Loop
const dirtyDozen = ["Strawberies", "Spinach", "Kale, collard and mustard greens", "Nectarines", "Apples", "Grapes", "Bell and hot peppers", "Cherries", "Peaches", "Pears", "Celery", "Tomatoes"]

//declare a Function
function displayDirtyDozen(){
	//refe display Element
	let display = document.getElementById("display")
	
	//for..of loop
	for(item of dirtyDozen){
		//dispaly item
		display.innerHTML += item +"<br>";
	}
}

//call the function
displayDirtyDozen()