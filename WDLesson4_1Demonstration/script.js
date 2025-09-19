function access(){
  let code = document.getElementById("code").value;
  let output = document.getElementById("output1");
  let status = "";
  //Is the code equal to "1AB2"?
  if( code == "1AB2"){
    status = "Access Granted";
  }else{
    status = "Access Denied";
  }
  output.innerHTML = status;

}

function average(){
  let g1 = parseInt(document.getElementById("grade1").value);
  let g2 = parseInt(document.getElementById("grade2").value);
  let g3 = parseInt(document.getElementById("grade3").value);
  let output = document.getElementById("output2");

  let avg = (g1 + g2 + g3) / 3;
  let status = "";
  //Is the average greater than or equal to 65?
  if( avg >= 65 ){
    status = "Passing";
  }else{ // If the condition turns out false
    status = "Failing";
  }
  
  output.innerHTML = `Average of ${g1}, ${g2} and ${g3} is ${avg}. ${status}`;
}



