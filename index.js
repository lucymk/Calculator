
function calc_function(e) {
  var x = document.getElementById('output').innerHTML;
  var buttonType = e.target.className;
  if (buttonType == "small_button number" && x == '0') {
   document.getElementById('output').innerHTML = e.target.innerHTML;
  }
  if (buttonType == "small_button number" && x !== '0') {
   document.getElementById('output').innerHTML = x + e.target.innerHTML;
  }
  if (buttonType == "big_button clear") {
   document.getElementById('output').innerHTML = '0';
  }
  if (buttonType == "small_button minus") {
   document.getElementById('output').innerHTML = -x;
  }
  if (buttonType == "small_button decimal") {
   document.getElementById('output').innerHTML = x + '.' ;
  }
  if (buttonType == "small_button operator") {
   document.getElementById('output').innerHTML = x + e.target.innerHTML;
  }
  if (buttonType == "big_button operator") {
   document.getElementById('output').innerHTML = eval(x);
  }
}

document.addEventListener("click", calc_function);
