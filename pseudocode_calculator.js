// Create an entries array empty, var tot set to zero

var entries = [];
var total = 0;
// create var temp that is an empty string
var temp = '';
// when the button is clicked, the input is assign to a variable val

$("button").on('click', function () {
    var val = $(this).text();
    //the value of val is a number or a decimal point, it is added to variable temp and display 
    //to screen (max 10 characters)
    // Got a number, add to temp
    if (!isNaN(val) || val === '.') {
        temp += val;
        $("#answer").val(temp.substring(0, 10));

        // Got some symbol other than equals, add temp to our entries
        // then add our current symbol and clear temp
    } else if (val === 'AC') {
        entries = [];
        temp = '';
        total = 0;
        $("#answer").val('')
    //if user press the AC button all the values stored in the variables are cleared, and the display as well

        // Clear last entry
    } else if (val === 'CE') {
        temp = '';
        $("#answer").val('')
    //if user press the CE button, the last value is cleared
    
    //All the multiplay symbols (x, *) and divide symbols (÷, /) can be used  when a 
    //calculation is performed
    //------ ------ ------ ------ ----- ------- ------
        // Change multiply symbol to work with eval
    } else if (val === 'x') {
        entries.push(temp);
        entries.push('*');
        temp = '';

        // Change divide symbol to work with eval
    } else if (val === '÷') {
        entries.push(temp);
        entries.push('/');
        temp = '';
    //------ ------ ------ ------ ----- ------- ------
     
    // Got the equals sign, perform calculation
    } else if (val === '=') {
        entries.push(temp);

        var nt = Number(entries[0]);
        for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i + 1])
            var symbol = entries[i];

            if (symbol === '+') { nt += nextNum; }
            else if (symbol === '-') { nt -= nextNum; }
            else if (symbol === '*') { nt *= nextNum; }
            else if (symbol === '/') { nt /= nextNum; }

            i++;
        }

        // Swap the '-' symbol so text input handles it correctly
        if (nt < 0) {
            nt = Math.abs(nt) + '-';
        }

        $("#answer").val(nt);
        entries = [];
        temp = '';

        // Push number
    } else {
        entries.push(temp);
        entries.push(val);
        temp = '';
    }
});
// the calculation is performed once the equal button is pressed and the result is displayed on the screen
