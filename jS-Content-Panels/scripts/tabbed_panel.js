//JS file for tabbed Panel

/*define function to remove and add currect class to click tab heading and its associated content when a click event occurs
*/

function addRemoveClass(evt) {
	//prevent the default behaviour of anchor/Link
	evt.preventDefault();
	
	//ref active tabs
	let active_tabs = document.querySelectorAll(".current")
	
	//remove "current" class from tabs containing it
	//use a loop because it is a collection
	//use for ...of
	for(tab of active_tabs){
		//remove class "current"
		//use the replace() method
		tab.className = tab.className.replace('current', '')
	}
	
	//for each tab heading and content that you want to be active, append class "current"
	//need to reference the tab headings and their associated content
	let anchor = evt.target
	console.log(anchor.href) //this should show url
	console.log(anchor.tagName) //this should show A
	
	//let lstItem = evt.target.parentElement
	let lstItem =anchor.parentElement
	console.log(lstItem.tagName) //this should show LI
	
	//add class "current" to li element (parent of anchor)
	lstItem.className += " current"
	
	
	//also add class "current" to the associated content
	//use slice() method to extract the last 5 characters of the link
	//extract the id for content div
	let id = anchor.href.substring(anchor.href.length-5)
	console.log(id)
	document.getElementById(id).className += " current"
}

//call the Function
//ref ul Element
let ul_tabs = document.getElementById("ul_tab_nav")
ul_tabs.addEventListener("click",addRemoveClass,false)
