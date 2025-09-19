function roots(){
  //Gather the information
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let output = document.getElementById("output");

  //Complete the process
  let d = Math.pow(b,2) - 4 * a * c;
  let root1 = (-b + Math.sqrt(d))/(2*a);
  let root2 = (-b - Math.sqrt(d))/(2*a);

  //Display the results
  output.innerHTML = `The roots of the quadratic, ${a}x<sup>2</sup> + ${b}x + ${c} are ${root1} and ${root2}`;



}