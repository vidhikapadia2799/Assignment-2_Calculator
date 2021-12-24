// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("I am inside");
  }, 5000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("I am outside");
}

// calling the async function
asyncFunc();
