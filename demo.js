// a promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am inside");
  }, 5000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  try {
    let result = await promise;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  console.log("I am outside");
}

asyncFunc();
