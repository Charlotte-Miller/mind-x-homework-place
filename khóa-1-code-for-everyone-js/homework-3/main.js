// Swap variable
function swapVar(a, b) {
  [a, b] = [b, a];
  console.log(a, b);
}

// Split string to Arr
function strToArr(str, step) {
  console.log(str.split(step));
}

// Print out spread array
function printArr(arr) {
  console.log(...arr);
}

// Clothing Shop App

const shopCart = [];

document.addEventListener("keydown", (e) => {
  if (e.key === "s") {
    document.addEventListener("keydown", shopApp);
    console.log("You have entered our shop");
  }
});

function shopApp(event) {
  if (event.key === "c") {
    const item = prompt("Enter the item:");
    shopCart.push(item);
    console.log("Done");
  } else if (event.key === "r") {
    const currentCart = ["The current items are:"];
    for (let count = 0; count < shopCart.length; count++) {
      currentCart.push(`${count + 1}. ${shopCart[count]}`);
    }
    console.log(currentCart.join("\n"));
  } else if (event.key === "u") {
    const index = Number(prompt("Enter the position you wanna update:"));
    if (!isNaN(index)) {
      const newItem = prompt("Enter the new item:");
      shopCart.splice(index, 1, newItem);
      console.log("Done");
    } else {
      console.log("Invalid value");
    }
  } else if (event.key === "d") {
    const index = Number(prompt("Enter the position you wanna delete"));
    if (!isNaN(index)) {
      shopCart.splice(index, 1);
      console.log("Done");
    } else {
      console.log("Invalid value");
    }
  } else if (event.key === "e") {
    document.removeEventListener("keydown", shopApp);
    console.log("Exit app");
  } else {
    console.log("Invalid command");
  }
}

// Calculate sum, min of a number string
function sumAndMin() {
  const numberArr = prompt("Enter a list of number, seperate by comma:")
    .split(",")
    .map((str) => Number(str));
  let sum = numberArr.reduce((a, b) => {
    return a + b;
  }, 0);
  let min = Math.min(...numberArr);
  console.log(`sum = ${sum}\nmin = ${min}`);
}

// Find number in arr
function findNumber(arr, number) {
  if (arr.indexOf(number) >= 0) {
    console.log(
      `${number} is found at index ${arr.indexOf(number)} in the array`
    );
  } else {
    console.log(`${number} is not found`);
  }
}

// Sheep app, afterShave, growByMonth, printArr(above), findMax
function findMax(arr) {
  return Math.max(...arr);
}

function afterShave(arr, max, value) {
  arr.splice(arr.indexOf(max), 1, value);
  return arr;
}

function growByMonth(arr, value) {
  return arr.map((size) => size + value);
}

function sheepApp(sizeArr, month) {
  let size = sizeArr;
  let max = 0;
  for (let count = 0; count <= month; count++) {
    console.log(`Month ${count}`);
    if (count === 0) {
      printArr(size);
      max = findMax(size);
      console.log(`Max: ${max}`);
      size = afterShave(size, max, 8);
      console.log(`Size after shave: ${size}`);
    } else if (count < month) {
      size = growByMonth(size, 50);
      printArr(size);
      max = findMax(size);
      console.log(`Max: ${max}`);
      size = afterShave(size, max, 8);
      console.log(`Size after shave: ${size}`);
    } else if (count === month) {
      size = growByMonth(size, 50);
      printArr(size);
      let totalSize = size.reduce((a, b) => {
        return a + b;
      }, 0);
      console.log(
        `Total size: ${totalSize}\nTotal value: ${totalSize} * 2$ = ${
          totalSize * 2
        }`
      );
    }
  }
}

// Produce name tag
function nameTag() {
  let nameArr = prompt("Enter a list of name, seperate by comma:").split(",");
  console.log(
    nameArr.map((item) => {
      return `<${item}>`;
    })
  );
}

// Filter the odd
function oddFilter() {
  let inputArr = prompt("Enter a list of number, seperate by comma:").split(
    ","
  );
  let numberArr = inputArr.map((item) => Number(item));
  return numberArr.filter((number) => number % 2 === 1);
}
