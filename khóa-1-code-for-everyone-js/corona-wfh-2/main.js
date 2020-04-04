// define reference
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");

// defince functional func
function fib(num) {
    if(num === 1 || num ===2) {
        return 1;
    } else {
        return (fib(num - 1) + fib(num -2));
    }
}

// define click func

const calSumOddAndEven = function () {
  let number = Number(prompt("Fill a positive integer (number > 1):"));
  let sumOdd = 0;
  let sumEven = 0;
  if (number <= 1) {
    console.log("Invalid number");
  } else {
    for (let index = 1; index <= number; index++) {
      if (index % 2 === 0) {
        sumEven += index;
      } else {
        sumOdd += index;
      }
    }
    console.log(`Sum of odd: ${sumOdd}
Sum of even: ${sumEven}`);
  }
};

const primeCheck = function () {
  let prime = Number(prompt("Fill a prime number (number > 1):"));
  let result;
  if (prime <= 1) {
    result = false;
  } else if (prime === 2) {
    result = true;
  } else if (prime >= 3){
    for (let count = 2; count < prime; count++) {
      if (prime % count === 0) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
  }
  console.log(result);
};

const primePrint = function () {
  let number = Number(prompt("Fill a number (number > 2):"));
  let primeArray = [];
  if (number < 2) {
    console.log("There is no prime");
  } else if (number === 2) {
    primeArray.push(2);
    console.log(primeArray);
  } else if (number >= 3) {
    primeArray.push(2);
    for (let prime = 3; prime <= number; prime++) {
      let primeTest = false;
      for (let count = 2; count < prime; count++) {
        if (prime % count === 0) {
          primeTest = false;
          break;
        } else {
          primeTest = true;
        }
      }
      if (primeTest === true) {
        primeArray.push(prime);
      }
    }
    console.log(primeArray);
  }
};

const findFibonacci = function() {
    let number = Number(prompt('Fill in a number (number > 0):'));
    if (number <= 0) {
        console.log('Can not find Fibonacci');
    } else if(number > 0) {
       console.log(`fibonacci: ${fib(number)}`);
    }
}

const calSumPositive = function() {
    let numberArray = [0]
    while (numberArray[numberArray.length - 1] >= 0){
        const number = Number(prompt('Fill a number:'));
        numberArray.push(number);
    }
    console.log(numberArray.reduce((a, b) => a + b) - numberArray[numberArray.length - 1]);
}

const symmetricCheck = function() {
    const string = prompt('fill in a string:');
    let result = false;
        for(let count = 0; count < Math.floor(string.length/2); count++){
            if(string[count] !== string[string.length - 1 - count]) {
                result = false;
                break;
            } else {
                result = true;
            }
        };
    console.log(result);
}

const drawRecArea = function() {
    let height = Number(prompt('Fill height of rectangle:'));
    let width = Number(prompt('Fill width of rectangle:'));
    let string = '';
    for(let column = 1; column <= height; column++){
        string += '  *';
    }
    for(let line = 1; line <= width; line++){
        console.log(string);
        console.log('');
    }
}

const calDogAndChicken = function() {
    let a1 = 1;
    let b1 = 1;
    let c1 = 36;
    let a2 = 2;
    let b2 = 4;
    let c2 = 100;
    
    const dog = (c2 - (c1*a2)/a1)/(b2-(b1*a2)/a1);
    const chicken = c1/a1 - (b1*dog)/a1;
    console.log(`chicken: ${chicken}
dog: ${dog}`)
}

const findSolution = function() {
    let a1 = Number(prompt('a1:'));
    let b1 = Number(prompt('b1:'));
    let c1 = Number(prompt('c1:'));
    let a2 = Number(prompt('a2:'));
    let b2 = Number(prompt('b2:'));
    let c2 = Number(prompt('c2:'));

    const y = (c2 - (c1*a2)/a1)/(b2-(b1*a2)/a1);
    const x = c1/a1 - (b1*y)/a1;

        console.log(`x: ${x}
y: ${y}`)


}
// define click ac2ion

button1.addEventListener("click", calSumOddAndEven);
button2.addEventListener("click", primeCheck);
button3.addEventListener("click", primePrint);
button4.addEventListener("click", findFibonacci);
button5.addEventListener("click", calSumPositive);
button6.addEventListener("click", symmetricCheck);
button7.addEventListener("click", drawRecArea);
button8.addEventListener("click", calDogAndChicken);
button9.addEventListener("click", findSolution);
