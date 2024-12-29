/*JS file*/





//error message para
paraErr = document.getElementById('err');

//define function to check the names
function CheckForGroupMemberInput()
{
	let lstName = document.getElementById('lastName').value;
	let fstName = document.getElementById('firstName').value;
	//custom erro messages
	//check if the names input are not empty
	if (lstName == '' || fstName == '')
	{
		alert("Please: first enter a group member's name.");
	}	
}

//define function to check the numbers in group
function CheckForGroupSizeInput()
{
	let grpSize = document.getElementById('groupSize');
	//custom erro messages
	//check if the size group input is not empty

	if(isNaN(grpSize.value))
	{
		alert("Invalid input. Please: enter a numeric value for the group size.")
	}
	if(grpSize.value == '')
	{
		alert( "Please: enter the number of people in group. ")
	}
}

//define function to compute the discount per group size 
function CalcGroupDiscount()
{
	//try to compute group discounts
	try
	{
		//call input checkforgroupsize input function
		CheckForGroupSizeInput()
		let grpSize = document.getElementById('groupSize').value;
		let discountRate = document.getElementById('discRate').value;
		let dailyRate = 50;
		discountRate = 0;

		if (grpSize < 5)
		{
			discountRate = dailyRate.value;
		}
		else if (grpSize <= 10)
		{
			discountRate = dailyRate.value*0.10;
		}
		else if (grpSize <= 24)
		{
			discountRate = dailyRate.value*0.20;
		}
		else (grpSize >= 25)
		{
			discountRate = dailyRate.value*0.25;
		}
	
	}
	catch(e)
	{
		//ref para to report Error
		alert(e);
	}
	//finally block
	finally
	{
		alert("Sorry, this is an incorrect value.")
	}
}

function AddGroupMember()
{
	
	try
	{
		CheckForGroupMemberInput()
		let lstName = document.getElementById('lastName').value;
		let fstName = document.getElementById('firstName').value;
		let members = document.getElementById('select#members');
		
		members = [];
		members.push(lstName,fstName)
		let txt = '';
		for(i=0; i<=members.length; i++){
			txt += members[i] +',';
		}
		members.innerHTML = '<option value = "1">'+txt+'</option>'
	}
	catch (e)
	{
		alert(e);
	}
	function RemoveGroupMember()
	{
		members.remove(members.selectedIndex);
	}
}

function reset1(){
	clearTimeout(my_time)
	document.getElementById('i1').style.left = '400px';
	document.getElementById('i1').style.top = '100px';
	document.getElementById('msg').innerHTML = '';
}

//create a function of bees
/*const beeArray = new Array (6);
//current beeArray
let curBee = 0;
//use loop to populate the beeArray
for(let i=0; i<beeArray.length; i++)
{
	//define image Array
	beeArray[i]= new Image ();
	beeArray[i].src = "images/bee" +i+ ".gif";
}
//function to animate images
*/
function flyingBee()
{
	let step = 1;
	let y = document.getElementById('bee').offsetTop;
	let x = document.getElementById('bee').offsetLeft;

	if (y < 200)
	{
		y = y + step;
		document.getElementById('bee').style.top = y + 'px';
	}
	else
	{
		if (x < 900)
		{
			x = x + step;
			document.getElementById('bee').style.left = x + 'px';
		}
		if(x == 899)
		{
			document.getElementById('advice').style.display = 'block';
		}		
	}

}

function timer()
{
	flyingBee()
	{
		my_time = setTimeout('timer()',10);
	}
}






