$(document).ready(function() {
});

var calculation = "";
//state is to track if a calculation has been completed. If so at the beginning of a new calculation the state 
//will switch to clear the display for a new result
var state = "0";
// save for later if want to store results in history
// var calculationResult;

function clearDiv() {
    calculation = "";
    $(result).html("");
};

function grabValue(a) {
    console.log(state);
    if (state === "1") {
        clearDiv();
        state = 0;
    } 
    calculation += a;
    $(result).append(a);
};

function calculate(a) {
    try {
        if (state === "1") {
            clearDiv();
        } else {
            $(result).append(a);
            $(result).append(eval(calculation));
            calculation = "";
            state = "1";
        }
    } catch(err) {
        console.log(err);
        clearDiv();
        $(result).append('INV');
        state = "1";     
    }
}


