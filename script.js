let result = document.getElementById("inputtext");

let calculate = (number) => {
  result.value += number;
};

function sin1(n) {
  result.value += n;
  if (result.value.includes("sin ")) {
    alert("hi");
  }
}

let Result = () => {
  // log
  if (result.value.includes("log")) {
    let n = result.value.substring(3);
    result.value = Math.log(n);
  }

  //ln => (log10) Natural log to base 10
  else if (result.value.includes("ln")) {
    let n = result.value.substring(2);
    result.value = Math.log10(n);
  }

  // power of a function
  else if (result.value.includes("^")) {
    let temp = result.value;
    let param1 = temp.split("^")[0]; //returns string before "^" to get first parameter
    let param2 = temp.substring(temp.indexOf("^") + 1); //returns string after "^" to get second parameter
    result.value = Math.pow(param1, param2);
  }

  // absolute value
  else if (result.value.includes("|")) {
    let temp = result.value;
    let param = temp.replaceAll("|", "");
    result.value = Math.abs(param);
  }

  // fahrenheit to celsius
  else if (result.value.includes("F")) {
    let temp = result.value;
    let fahrenheit = temp.replaceAll("F", "");
    result.value = ((fahrenheit - 32) * 5) / 9;
  }

  // degree to radian
  else if (result.value.includes("deg")) {
    let temp = result.value;
    let deg = temp.replaceAll("deg", "");
    result.value = (deg * Math.PI) / 180.0;
  }

  // asinh function
  else if (result.value.includes("asinh")) {
    let temp = result.value;
    let n = temp.replaceAll("asinh", "");
    result.value = Math.asinh(n);
  }
  // asin function
  else if (result.value.includes("asin")) {
    let temp = result.value;
    let n = temp.replaceAll("asin", "");
    result.value = Math.asin(n);
  }
  // sin function
  else if (result.value.includes("sin")) {
    let temp = result.value;
    let n = temp.replaceAll("sin", "");
    result.value = Math.sin(n);
  }

  // acosh function
  else if (result.value.includes("acosh")) {
    let temp = result.value;
    let n = temp.replaceAll("acosh", "");
    result.value = Math.acosh(n);
  }

  // acos function
  else if (result.value.includes("acos")) {
    let temp = result.value;
    let n = temp.replaceAll("acos", "");
    result.value = Math.acos(n);
  }
  // cos function
  else if (result.value.includes("cos")) {
    let temp = result.value;
    let n = temp.replaceAll("cos", "");
    result.value = Math.cos(n);
  }
  // atanh function
  else if (result.value.includes("atanh")) {
    let temp = result.value;
    let n = temp.replaceAll("atanh", "");
    result.value = Math.atanh(n);
  }
  // atan function
  else if (result.value.includes("atan")) {
    let temp = result.value;
    let n = temp.replaceAll("atan", "");
    result.value = Math.atan(n);
  }

  // tan function
  else if (result.value.includes("tan")) {
    let temp = result.value;
    let n = temp.replaceAll("tan", "");
    result.value = Math.tan(n);
  }

  // floor function
  else if (result.value.includes("floor")) {
    let temp = result.value;
    let n = temp.replaceAll("floor", "");
    result.value = Math.floor(n);
  }
  // ceil function
  else if (result.value.includes("ceil")) {
    let temp = result.value;
    let n = temp.replaceAll("ceil", "");
    result.value = Math.ceil(n);
  }
  // round function
  else if (result.value.includes("round")) {
    let temp = result.value;
    let n = temp.replaceAll("round", "");
    result.value = Math.round(n);
  }
  // sign function
  else if (result.value.includes("sign")) {
    let temp = result.value;
    let n = temp.replaceAll("sign", "");
    result.value = Math.sign(n);
  }

  // trunc function
  else if (result.value.includes("trunc")) {
    let temp = result.value;
    let n = temp.replaceAll("trunc", "");
    result.value = Math.trunc(n);
  }
  // square root function
  else if (result.value.includes("√")) {
    let n = result.value.substring(1);
    console.log(n);
    result.value = Math.sqrt(n);
  }

  // factorial
  else if (result.value.includes("!")) {
    size = result.value.length;
    n = Number(result.value.substring(0, size - 1));
    let f = 1;

    for (i = 2; i <= n; i++) f = f * i;
    result.value = f;
  }

  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid Input");
  }
};

//reciprocal
function reciprocal() {
  let answer = 1 / result.value;
  result.value = answer.toFixed(3);
}

//Clear Value
function clr() {
  result.value = "";
}

//delete single value
function del() {
  result.value = result.value.slice(0, -1);
}

//Memory Functions
const ms = [];
var index = 0;
function memory(x) {
  // M+ => memory plus
  if (x == "mplus") {
    ms.push(parseInt(result.value));
    result.value = "";
    console.log(ms);
  }

  // M- => Memory subtract
  else if (x == "msub") {
    let temp = "-" + result.value;
    ms.push(parseInt(temp));
    result.value = "";
    console.log(ms);
  }

  // MC => Memory Clear
  else if (x == "mclear") {
    ms.splice(0, ms.length);
    result.value = "";
    console.log(ms);
  }

  //MR => Memory Recall
  else if (x == "mrecall") {
    if (ms.length == 0) {
      alert("othing is stored in memory");
    } else {
      var sum = ms.reduce(function (a, b) {
        return a + b;
      }, 0);
      console.log("total" + sum);
      result.value = sum;
    }
  }

  // MS => Memory Store
  else if (x == "mstore") {
    if (ms.length == 0) {
      alert("Nothing is stored in memory");
    } else {
      index %= ms.length;
      result.value = ms[index];
      index++;
    }
  }
}
