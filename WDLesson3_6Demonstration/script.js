function c_to_f(){
  let temp = parseFloat(document.getElementById("temp").value);
  let output = document.getElementById("output");

  let f = (temp * 9 / 5) + 32;

  output.innerHTML = `${temp}&deg;C is ${f}&deg;F`

} 