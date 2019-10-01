// Create an entries array empty, current value display and pending value
var entriesArr = [];
var currentVal = 0;
var onHoldVal;

//create selectors
var clear = document.getElementById("clear");
var displayValues = document.getElementById("displayValues");
var decimal = document.getElementById("decimal");
var btnNumbers = document.getElementsByClassName("btn-numbers");
var btnOperators = document.getElementsByClassName("btn-operator");





// create var temp that is an empty string
// when the button is clicked, the input is assign to a variable val
//the value of val is a number or a decimal point, it is added to variable temp and display 
//to screen (max 10 characters)
// Got a number, add to temp
// Got some symbol other than equals, add temp to our entries
// then add our current symbol and clear temp
//if user press the AC button all the values stored in the variables are cleared, and the display as well
// Clear last entry
//if user press the CE button, the last value is cleared
//All the multiplay symbols (x, *) and divide symbols (÷, /) can be used  when a 
//------ ------ ------ ------ ----- ------- ------
    // Change multiply symbol to work with eval
    // Change divide symbol to work with eval
//------ ------ ------ ------ ----- ------- ------
// Got the equals sign, perform calculation
// Swap the '-' symbol so text input handles it correctly
// Push number
// the calculation is performed once the equal button is pressed and the result is displayed on the screen
