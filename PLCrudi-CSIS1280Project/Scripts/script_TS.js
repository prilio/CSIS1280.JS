//JS file

//create function and reference form elements
function processPreviewOrder(){
   let output = document.getElementById("output");
   let allinone = document.getElementById('allinone');
   let blackberry = document.getElementById('blackberry');
   let chocolate = document.getElementById('chocolate');
   let coconut = document.getElementById('coconut');
   let deflates = document.getElementById('deflates');
   let green = document.getElementById('green');
   let peanutbutter = document.getElementById('peanutbutter');
   let strawberry = document.getElementById('strawberry');
   let tropical = document.getElementById('tropical');

   //cost accumulator (shoudl be initialized)
   let prevOrder = 0;
   //Note: make sure to convert retrieved form input (considered as text) to numeric for comuptations
   //use parseInt() for integer values or parseFloat() for floating values
   //evaluate user choices
   if(allinone.checked)
  {
      //add the cost of allinone to lunch order cost
      prevOrder += parseFloat(allinone.value);
   }
   if (blackberry.checked) 
   {
      //add the cost of blackberry to lunch order cost
      prevOrder += parseFloat(blackberry.value);
   }
   if (chocolate.checked) 
   {
      //add the cost of chocolate to lunch order cost
      //prevOrder = prevOrder +chocolate cost
      prevOrder += parseFloat(chocolate.value);
   }
   if (coconut.checked) 
   {
      //add the cost of coconut to lunch order cost
      prevOrder += parseFloat(coconut.value);
   }
   if (deflates.checked) 
   {
      //add the cost of deflates to lunch order cost
      prevOrder += parseFloat(deflates.value);
   }
   if (green.checked) 
   {
      //add the cost of green to lunch order cost
      prevOrder += parseFloat(green.value);
   }
   if (peanutbutter.checked) 
   {
      //add the cost of peanutbutter to lunch order cost
      prevOrder += parseFloat(peanutbutter.value);
   }
   if (strawberry.checked) 
   {
      //add the cost of strawberry to lunch order cost
      prevOrder += parseFloat(strawberry.value);
   }
   if (tropical.checked) 
   {
      //add the cost of tropical to lunch order cost
      prevOrder += parseFloat(tropical.value);
   }

  //display total lunch cost
  output.innerHTML = "<p><strong>The preview cost of your order is $</strong><p>" +prevOrder.toFixed(2);
}

//call the function
document.getElementById("btnSubmit").onclick = function() {processPreviewOrder();}
//clear output
document.getElementById("btnReset").onclick = function() {output.innerHTML = "";}

