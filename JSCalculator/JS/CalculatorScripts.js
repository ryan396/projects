$(document).ready(function() {
});

var calculation = "";
// save for later if want to store results in history
// var calculationResult;

function clearDiv() {
    calculation = "";
    console.log("empty");
    $(result).html("");
};

function grabValue(a) { 
    calculation += a;
    $(result).append(a);
    console.log(calculation);
};

function calculate(a) {
    $(result).append(a);
    $(result).append(eval(calculation));
    calculation = "";
}
