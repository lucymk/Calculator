
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
  if (buttonType == "small_button decimal" && ) {
   document.getElementById('output').innerHTML = x + '.' ;
  }
  if (buttonType == "small_button operator" &&
  (e.target.innerHTML == '+' || e.target.innerHTML == '-')) {
   document.getElementById('output').innerHTML = x + e.target.innerHTML;
  }
  if (buttonType == "small_button operator" && e.target.innerHTML == 'x' ) {
    document.getElementById('output').innerHTML = x + '*';
  }
  if (buttonType == "small_button operator" && e.target.innerHTML == '÷' ) {
    document.getElementById('output').innerHTML = x + '/';
  }
  if (buttonType == "big_button operator") {
   var y = eval(x);
   document.getElementById('output').innerHTML = Number(Math.round(y+'e2')+'e-2');
  }
}

document.addEventListener("click", calc_function);
