function greeting(){
  let name = document.getElementById("name");
  let output = document.getElementById("output")

  output.innerHTML = "Hello " + name.value;
}