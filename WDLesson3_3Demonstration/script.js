/* Create a function bridge that,
1) Changes the background color of the element with an id of "box" to blue
2) Change the HTML inside of the element with an id of "title" to Brooklyn Bridge
3) Change the source of the element with an id of "landmark" to bridge.jpg
*/
function bridge(){
  document.getElementById("box").style.backgroundColor = "magenta";
  document.getElementById("title").innerHTML = "Brooklyn Bridge";
  document.getElementById("landmark").src = "bridge.jpg";
}

function park(){
  document.getElementById("box").style.backgroundColor = "cyan";
  document.getElementById("title").innerHTML = "Central Park";
  document.getElementById("landmark").src = "park.jpg";
}

function square(){
  document.getElementById("box").style.backgroundColor = "yellow";
  document.getElementById("title").innerHTML = "Times Square";
  document.getElementById("landmark").src = "square.jpg";
}

