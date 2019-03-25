// degrees
var fahr = function(celsius) {
 	return (celsius * 9 / 5) + 32;
 }

var cels = function(fahrenheit) {
  return parseInt((5 / 9 * (fahrenheit - 32)).toFixed(2));
}

// gallons & liters
var gallons = function(liter) {
  return liters / 3.785;
}

var liters = function(gallon) {
  return gallon * 3.785;
}

// ounce to grams
var ounce = function(grams) {
  return grams / 28.35;
}

var gram = function(ounces) {
  return ounces * 28.35;
}

// the Katlin way
// function convertToGrams(ounces) {
//   return ounces * 28.35;
// }


// pound to kilograms
function convertToKGs(pound) {
  return pound / 2.205;
}

function convertToLBs(kilogram) {
  return kilogram * 2.205;
}

// fluid ounce to milliliter
function convertToMLs(ounces) {
  return ounces * 29.574;
}

function convertToFlOz(milliliter) {
  return milliliter / 29.574;
}





// BMI
// var height = prompt("What is your height (in inches)?");
// var weight = prompt("What is your weight?");
//
// function calcBMI(height, weight) {
// alert((weight / (height * height) * 703).toFixed(2));
// }
//
// calcBMI(height, weight);
