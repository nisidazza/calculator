// Create a calculator object that contain: 
//entries array empty to store data, 
//var valueDisplay set to zero


const calculator = {
    entries : [],
    valueDisplay: "0",
    onHoldValue
}

// create variable that will hold the number entered first



//Selectors
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const clearLastEntry = document.getElementById("clearLastEntry");
const displayValues = document.getElementById("displayValues");
const btnNumbers = document.getElementsByClassName("numbers");
const btnOperators = document.getElementById("btn-operator");



//when I click a button I want the value displayed on the screen
//eventListener for all the button numbers
for(let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener("click", updateDisplayValue)
}
//eventListener for all the button operators
for(let i = 0; btnOperators.lenght; i++) {
    btnOperators[i].addEventListener("click", performOperation)
}

//create a function to update the value display on the screen when a button is clicked
// when the button is clicked, the input is assign to a variable 
//check inside the function if the display value is 0 or not. If yes, it has to be set to empty string
function updateDisplayValue(e) {
    //Use e.target.innerText to find the content of a button.
    var btnContent = e.target.innerText;
    if(valueDisplay === "0") {
        valueDisplay = "";
    }
    //add the content of btnContent to valueDisplay and display it
    valueDisplay += btnContent;
    displayValues.innerText = valueDisplay;
}

//Function that performs the operations
//check which operator is selected by the user
//update initial value, onHoldvalue and entries array
function performOperation(e) {
    //use e.target.innerText to check which operator is used
    var operator = e.target.innerText;

    if(operator === "+"){
        //update the value on hold to the value displayed on the screen
        onHoldValue = valueDisplay;
        //display value set to 0 
        valueDisplay = "0";
        //display value displayed on the screen
        displayValues.innerText = valueDisplay;
        //the "on hold" value is stored into the entries array along with the operator
        entries.push(onHoldValue);
        entries.push("+");
    }

    
}


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
