// Create a calculator object that contain: 
//entries array empty to store data, 
//var initValue set to zero


const calculator = {
    entries : [],
    initValue: "0",
}

// create variable that will hold the number



//Selectors
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const clearLastEntry = document.getElementById("clearLastEntry");
const displayValues = document.getElementById("displayValues");
const btnNumbers = document.getElementsByClassName("numbers");
const btnOperators = document.getElementById("btn-operator");



//when I click a button I want the value displayed on the screen

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
