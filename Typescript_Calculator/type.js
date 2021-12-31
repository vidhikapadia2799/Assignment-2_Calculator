"use strict";
exports.__esModule = true;
var result = document.getElementById("inputtext");
var calculate = function (operator) {
    result.value += operator;
};
//Convert string input into number
var stringtonum = function () {
    return parseInt(result.value);
};
//log function
var log = function () {
    result.value = String(Math.log(stringtonum()));
};
//farenhite to celcius
var fahtocel = function () {
    var farenhite = stringtonum();
    var celcius = ((farenhite - 32) * 5) / 9;
    result.value = celcius.toFixed(3);
};
//degree to radian
var degtorad = function () {
    var deg = stringtonum();
    var radian = (deg * 3.14) / 180.0;
    result.value = radian.toFixed(3);
};
//sin function
var sin = function () {
    result.value = String(Math.sin(stringtonum()));
};
//asin function
var asin = function () {
    result.value = String(Math.asin(stringtonum()));
};
//cos function
var cos = function () {
    result.value = String(Math.cos(stringtonum()));
};
//acos function
var acos = function () {
    result.value = String(Math.acos(stringtonum()));
};
//tan function
var tan = function () {
    result.value = String(Math.tan(stringtonum()));
};
//atan function
var atan = function () {
    result.value = String(Math.atan(stringtonum()));
};
//floor function
var floor = function () {
    result.value = String(Math.floor(stringtonum()));
};
//ceiling function
var ceil = function () {
    result.value = String(Math.ceil(stringtonum()));
};
//round function
var round = function () {
    result.value = String(Math.round(stringtonum()));
};
//square root function
var sqrt = function () {
    result.value = String(Math.sqrt(stringtonum()));
};
//gives absolute value
var absolute = function () {
    result.value = String(Math.abs(stringtonum()));
};
//factorial
var factorial = function () {
    var n = stringtonum();
    var answer = 1;
    if (n == 0 || n == 1) {
        result.value = String(n);
    }
    else {
        for (var itr = n; itr >= 1; itr--) {
            answer = answer * itr;
        }
        result.value = String(answer);
    }
};
//find exponent of a number
var exponential = function () {
    result.value = String(Math.pow(2.718281828, stringtonum()));
};
//add minus sign to the value
var prefixminus = function () {
    result.value = "-" + result.value;
};
//final answer
var Result = function () {
    // power of a function
    if (result.value.indexOf("^") !== -1) {
        var temp = result.value;
        var param1 = parseInt(temp.split("^")[0]); //returns string before "^" to get first parameter
        var param2 = parseInt(temp.substring(temp.indexOf("^") + 1)); //returns string after "^" to get second parameter
        result.value = String(Math.pow(param1, param2));
    }
    try {
        result.value = eval(result.value);
    }
    catch (err) {
        alert("Enter the valid Input");
    }
};
//reciprocal
var reciprocal = function () {
    var answer = 1 / stringtonum();
    result.value = answer.toFixed(3);
};
//Clear Value
var clr = function () {
    result.value = "";
};
//delete single value
var del = function () {
    result.value = result.value.slice(0, -1);
};
//Memory Functions
var ms = [];
var index = 0;
var memory = function (operation) {
    // M+ => memory plus
    if (operation == "mplus") {
        ms.push(stringtonum());
        result.value = "";
        console.log(ms);
    }
    // M- => Memory subtract
    else if (operation == "msub") {
        var temp = "-" + result.value;
        ms.push(parseInt(temp));
        result.value = "";
        console.log(ms);
    }
    // MC => Memory Clear
    else if (operation == "mclear") {
        ms.splice(0, ms.length);
        result.value = "";
        console.log(ms);
    }
    //MR => Memory Recall
    else if (operation == "mrecall") {
        if (ms.length == 0) {
            alert("Nothing is stored in memory");
        }
        else {
            var sum = ms.reduce(function (num1, num2) {
                return num1 + num2;
            }, 0);
            console.log("total" + sum);
            result.value = String(sum);
        }
    }
    // MS => Memory Store
    else if (operation == "mstore") {
        if (ms.length == 0) {
            alert("Nothing is stored in memory");
        }
        else {
            index %= ms.length;
            result.value = String(ms[index]);
            index++;
        }
    }
};
