export {};
let result = <HTMLInputElement>document.getElementById("inputtext");

const calculate = (operator: string) => {
  result.value += operator;
};

//Convert string input into number
const stringtonum = () => {
  return parseInt(result.value);
};

//log function
const log = () => {
  result.value = String(Math.log(stringtonum()));
};

//farenhite to celcius
const fahtocel = () => {
  const farenhite: number = stringtonum();
  const celcius: number = ((farenhite - 32) * 5) / 9;
  result.value = celcius.toFixed(3);
};

//degree to radian
const degtorad = () => {
  const deg: number = stringtonum();
  const radian: number = (deg * 3.14) / 180.0;
  result.value = radian.toFixed(3);
};

//sin function
const sin = () => {
  result.value = String(Math.sin(stringtonum()));
};

//asin function
const asin = () => {
  result.value = String(Math.asin(stringtonum()));
};

//cos function
const cos = () => {
  result.value = String(Math.cos(stringtonum()));
};

//acos function
const acos = () => {
  result.value = String(Math.acos(stringtonum()));
};

//tan function
const tan = () => {
  result.value = String(Math.tan(stringtonum()));
};

//atan function
const atan = () => {
  result.value = String(Math.atan(stringtonum()));
};

//floor function
const floor = () => {
  result.value = String(Math.floor(stringtonum()));
};

//ceiling function
const ceil = () => {
  result.value = String(Math.ceil(stringtonum()));
};

//round function
const round = () => {
  result.value = String(Math.round(stringtonum()));
};

//square root function
const sqrt = () => {
  result.value = String(Math.sqrt(stringtonum()));
};

//gives absolute value
const absolute = () => {
  result.value = String(Math.abs(stringtonum()));
};

//factorial
const factorial = () => {
  let n: number = stringtonum();
  let answer: number = 1;
  if (n == 0 || n == 1) {
    result.value = String(n);
  } else {
    for (let itr = n; itr >= 1; itr--) {
      answer = answer * itr;
    }
    result.value = String(answer);
  }
};

//find exponent of a number
const exponential = () => {
  result.value = String(Math.pow(2.718281828, stringtonum()));
};

//add minus sign to the value
const prefixminus = () => {
  result.value = "-" + result.value;
};

//final answer
const Result = () => {
  // power of a function
  if (result.value.indexOf("^") !== -1) {
    let temp = result.value;
    let param1 = parseInt(temp.split("^")[0]); //returns string before "^" to get first parameter
    let param2 = parseInt(temp.substring(temp.indexOf("^") + 1)); //returns string after "^" to get second parameter
    result.value = String(Math.pow(param1, param2));
  }

  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid Input");
  }
};

//reciprocal
const reciprocal = () => {
  let answer = 1 / stringtonum();
  result.value = answer.toFixed(3);
};

//Clear Value
const clr = () => {
  result.value = "";
};

//delete single value
const del = () => {
  result.value = result.value.slice(0, -1);
};

//Memory Functions
const ms: Array<number> = [];
let index: number = 0;
const memory = (operation: String) => {
  // M+ => memory plus
  if (operation == "mplus") {
    ms.push(stringtonum());
    result.value = "";
    console.log(ms);
  }

  // M- => Memory subtract
  else if (operation == "msub") {
    let temp = "-" + result.value;
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
    } else {
      let sum: number = ms.reduce(function (num1: number, num2: number) {
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
    } else {
      index %= ms.length;
      result.value = String(ms[index]);
      index++;
    }
  }
};
