// 1. Find mean
function findMean(from, to, step) {
  const arr = [];
  for (let number = from; number <= to; number += step) {
    arr.push(number);
  }
  let mean =
    arr.reduce((a, b) => {
      return a + b;
    }, 0) / arr.length;
  console.log(`${arr}\nMean = ${mean}`);
}

// 2. Manipulate a string of number
function maniNum() {
  const inputArray = prompt("Enter a list of number, seperate by comma:")
    .split(",")
    .map((item) => Number(item))
    .sort((a, b) => a - b);
  let sumOfEven = inputArray
    .filter((num) => num % 2 === 0)
    .reduce((a, b) => {
      return a + b;
    }, 0);
  let sumOfOdd = inputArray
    .filter((num) => num % 2 === 1)
    .reduce((a, b) => {
      return a + b;
    }, 0);
  console.log(
    `Array: ${inputArray} \nMin: ${inputArray[0]} \nMax: ${
      inputArray[inputArray.length - 1]
    } \nSum of even: ${sumOfEven} \nSum of odd: ${sumOfOdd}`
  );
}

// 3. Flatten array
function flattenArray(arr, value) {
  const inputArr = arr.reduce((prev, current) => {
    return prev.concat(current);
  }, []);
  let sum = inputArr.reduce((a, b) => {
    return a + b;
  }, 0);
  let newArr = inputArr.map((number) => number + value);
  console.log(
    `Flattened array: ${inputArr}
   sum = ${sum}
   New array: ${newArr}
  `
  );
}

// 4. Filter repeated item, parameter: a string of number separated comma
function repeatedFilter(string) {
  let inputArr = string
    .split(",")
    .map((item) => Number(item))
    .sort((a, b) => a - b);
  const newArr = [];
  for (let number of inputArr) {
    if (!newArr.includes(number)) {
      newArr.push(number);
    }
  }
  console.log(newArr);
}

// 5. Format sentence, Format String
function formatStr(string) {
  return (newStr = string[0].toUpperCase() + string.slice(1).toLowerCase());
}

function formatSentence(sentence) {
  let newSentence = sentence
    .split(" ")
    .map((str) => formatStr(str))
    .join(" ");
  console.log(newSentence);
}

// 6. Generate a new array, parameter: a string of number, separate by comma.
function generateArr(string, n) {
  let arr = string
    .split(",")
    .map((item) => Number(item))
    .slice(0, n);
  return arr;
}

//7. Nesting array, parameter: a string of number, separate by comma.
function nestArr(string, n) {
  let arr = string.split(",").map((item) => Number(item));
  console.log(arr);
  let newArr = [];
  for (let index = 0; index < arr.length; index += n) {
    newArr.push(arr.slice(index, index + n));
  }
  return newArr;
}

// 8. Find number difference, parameter: a string of number, separate by comma.
function findDifference(string) {
  let arr = string
    .split(",")
    .map((item) => Number(item))
    .sort((a, b) => a - b);
  let difference = arr[arr.length - 1] - arr[0];
  return difference;
}

// 9. Find mode, parameter: a string of number, separate by comma.
function findMode(string) {
  let arr = string.split(",").map((item) => Number(item));
  let freq = 0;
  let freqList = [];
  arr.forEach((num) => {
    const number = freqList.find((obj) => {
      return obj.num === num;
    });
    if (number) {
      number.count++;
      if (number.count > freq) {
        freq = number.count;
        freqNum = number.num;
      }
    } else {
      freqList.push({ num: num, count: 1 });
    }
  });
  return freqList.filter((obj) => obj.count === freq);
}

// 10. Test palindrome string
function testPalindrome(string) {
  for (let index = 0; index <= Math.floor((string.length - 1) / 2); index++) {
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }
  return true;
}
