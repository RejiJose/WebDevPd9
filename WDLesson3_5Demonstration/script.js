function add(){
  //add() is the event handler for the onclick event on the button
  let n1 = parseFloat(document.getElementById("number1").value);
  let n2 = parseFloat(document.getElementById("number2").value);
  let output = document.getElementById("output");

  let result = n1 + n2;

  output.innerHTML = result;
} 
