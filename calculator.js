// Create an entries array empty, current value display and pending value
var entriesArr = [];
var currentVal = "0";


//create selectors
var clear = document.getElementById("clear");
var clearLastEntry = document.getElementById("clearLastEntry");
var displayValues = document.getElementById("displayValues");
var decimal = document.getElementById("decimal");
var btnNumbers = document.getElementsByClassName("btn-number");
var btnOperators = document.getElementsByClassName("btn-operator");

// when the button is clicked, the input is assign to a variable 
//Use event target(returns the element that triggered the event) to find the content of a button.
/*function myFunction() {
    var x = document.getElementById("7").getAttribute("value");
    document.getElementById("displayValues").innerHTML = x;
}*/

function updateDisplayValue(e) {
    var btnContent = e.target.innerText;
    //Create if statement inside this function that will check if the display value is currently 0 or not. 
    //If yes, set it to an empty string
    if (currentVal === "0") {
        currentVal = "";
    }
    //add the content of btnContent to currentVal
    currentVal += btnContent;
    displayValues.innerText = currentVal;
}
// create function that performs operations
//
function performOperation(e) {
    var operator = e.target.innerText; //check content of operator
    //check witch operator is typed
    switch (operator) {
        case "+":
            storeCurrentValue();
            entriesArr.push("+");
            break;

        case "-":
            storeCurrentValue();
            entriesArr.push("-");
            break;

        case "*":
            storeCurrentValue();
            entriesArr.push("*");
            break;

        case "÷":
            storeCurrentValue();
            entriesArr.push("/");
            break;

        case "=":
            entriesArr.push(currentVal);
            //with "join the array becomes a string" and  we pass it to the eval()
            var evaluateArgument = eval(entriesArr.join(" "));
            currentVal = evaluateArgument + "";
            console.log(typeof currentVal);
            displayValues.innerText = currentVal;
            entriesArr = []; //clear the array for new input
            break;
        default:
            break;
    }
}

function storeCurrentValue() {
    var onHoldVal = currentVal;
    currentVal = "";
    displayValues.innerText = currentVal;
    entriesArr.push(onHoldVal);
}

// the calculation is performed once the equal button is pressed and the result is displayed on the screen
//create event listener for buttons:
// numbers 
for (var i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener("click", updateDisplayValue);
}
//operators
for (var i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener("click", performOperation);
}

//create function to clear display
clear.onclick = () => {
    currentVal = "0";
    onHoldVal = undefined;
    entriesArr = [];
    displayValues.innerHTML = currentVal;
}

//create a function to insert decimal point
decimal.onclick = () => {
    if(currentVal.includes(".") === false) {
        currentVal += ".";
    }

    displayValues.innerText = currentVal;
}

//create a function that deletes the last entry
clearLastEntry.onclick = () => {
    currentVal = currentVal.slice(0, currentVal.length - 1);
    if (currentVal === "") {
        currentVal = "0";
    }
    displayValues.innerHTML = currentVal;
}






