document.addEventListener('DOMContentLoaded', init);

// Create an entries array empty, current value display and pending value
var entriesArr = [];
var currentVal = "0";
const maxLength = 10;

//create selectors
var clear = document.getElementById("clear");
var clearLastEntry = document.getElementById("clearLastEntry");
var displayValues = document.getElementById("displayValues");
var decimal = document.getElementById("decimal");
var equals = document.getElementById("equals");
var btnNumbers = document.getElementsByClassName("btn-number");
var btnOperators = document.getElementsByClassName("btn-operator");

// when the button is clicked, the input is assign to a variable 
//Use event target(returns the element that triggered the event) to find the content of a button.

function init() {
    //create event listener for buttons:
    // numbers 
    for (var i = 0; i < btnNumbers.length; i++) {
        btnNumbers[i].addEventListener("click", handleNumberClick);
    }
    //operators
    for (var i = 0; i < btnOperators.length; i++) {
        btnOperators[i].addEventListener("click", handleOperatorClick);
    }

    equals.onclick = performCalculation;
    clear.onclick = clearDisplay;
    decimal.onclick = insertDecimalPoint;
    clearLastEntry.onclick = deleteLastEntry;
    document.addEventListener('keydown', handleKeyDown);
}

function handleKeyDown(e) {
    switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            updateDisplayValue(e.key);
            break;

        case ".":
            insertDecimalPoint();
            break;

        case "+":
        case "-":
        case "*":
        case "/":
            storeCurrentExpression(e.key)
            break;

        case "Enter":
            e.preventDefault();
        case "=":
            performCalculation();
            break;

        case "Delete":
            clearDisplay();
            break;

        case "Backspace":
            deleteLastEntry();
            break;

        default:
            break;
    }
}

//create function to clear display
function clearDisplay() {
    currentVal = "0";
    onHoldVal = undefined;
    entriesArr = [];
    displayValues.innerHTML = currentVal;
}

//create a function to insert decimal point
function insertDecimalPoint() {
    if (currentVal.length >= maxLength) return;
    if (currentVal.includes(".") === false) {
        currentVal += ".";
    }
    displayValues.innerText = currentVal;
}

//create a function that deletes the last entry
function deleteLastEntry() {
    currentVal = currentVal.slice(0, currentVal.length - 1);
    if (currentVal === "") {
        currentVal = "0";
    }
    displayValues.innerHTML = currentVal;
}

function handleNumberClick(e) {
    updateDisplayValue(e.target.innerText);
}

function updateDisplayValue(numberAsString) {
    if (currentVal.length >= maxLength) return;
    //Create if statement inside this function that will check if the display value is currently 0 or not. 
    //If yes, set it to an empty string
    if (currentVal === "0") {
        currentVal = "";
    }
    //add the content of btnContent to currentVal
    currentVal += numberAsString;
    displayValues.innerText = currentVal;
}

function performCalculation() {
    entriesArr.push(currentVal);
    //with "join" the array becomes a string and  we pass it to the eval()
    var evaluateArgument = eval(entriesArr.join(" "));
    currentVal = evaluateArgument + "";
    if (currentVal.length > maxLength) {
        currentVal = evaluateArgument.toExponential(maxLength - 6);
    }
    console.log(typeof currentVal);
    displayValues.innerText = currentVal;
    entriesArr = []; //clear the array for new input
}

function handleOperatorClick(e){
    storeCurrentExpression(e.target.value);
}

function storeCurrentExpression(operator) {
    //check content of operator
    if (operator === "") {
        return;
    }
    var onHoldVal = currentVal;
    currentVal = "";
    displayValues.innerText = currentVal;
    entriesArr.push(onHoldVal);
    entriesArr.push(operator);
}