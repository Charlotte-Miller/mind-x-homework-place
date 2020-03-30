// Exercise 1
const factorialInput = document.getElementById("factorial");
const factorialResult = document.getElementById("cal-factorial");

factorialInput.addEventListener("input", function() {
  let input = factorialInput.value;
  let factorial = 1;
  if (input <= 0) {
    factorialResult.textContent = "Invalid value";
  } else {
    for (let index = 1; index <= input; index++) {
      factorial *= index;
    }
    factorialResult.textContent = `Your factorial: ${factorial}`;
  }
});

// Exercise 2
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const login = document.getElementById("login");
const logout = document.getElementById("logout");
let name = "";
let age = -1;
nameInput.addEventListener("input", function() {
  name = nameInput.value;
});
ageInput.addEventListener("input", function() {
  age = ageInput.value;
});

login.addEventListener("click", function() {
  if (age === -1 || name.length < 1) {
    alert("Fill our form");
  } else if (age < 18) {
    alert(`${name} is too young to enter our website`);
  } else {
    alert(`${name} has logged in`);
    logout.disabled = false;
  }
});

logout.addEventListener("click", function() {
  alert(`${name} has logged out`);
  logout.disabled = true;
});

// Exercise 3
const account = document.getElementById("account");
const password = document.getElementById("password");
const loginGame = document.getElementById("loginGame");
let user = "codeforfun";
let pass = "github2020";
loginGame.addEventListener("click", function() {
  if (user === account.value && pass === password.value) {
    alert(`Welcome back ${user}`);
  } else if (user !== account.value) {
    alert(`Your account has not registered`);
  } else if (pass !== password.value) {
    alert(`You have entered wrong password`);
  }
});

// Exercise 4
const date = document.getElementById("date");
const birthMessage = document.getElementById("birth");
date.addEventListener("change", function() {
  const birthday = new Date(date.value);
  const month = birthday.getMonth();
  switch (month) {
    case 0:
    case 1:
    case 2:
      birthMessage.textContent = "You was born in spring.";
      break;
    case 3:
    case 4:
    case 5:
      birthMessage.textContent = "You was born in summer.";
      break;
    case 6:
    case 7:
    case 8:
      birthMessage.textContent = "You was born in fall.";
      break;
    default:
      birthMessage.textContent = "You was born in winter.";
      break;
  }
});

// Exercise 5
const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const cInput = document.getElementById('c');
const calButton = document.getElementById('calculate');
const solutionText = document.getElementById('solution');
const x1Text = document.getElementById('x1')
const x2Text = document.getElementById('x2')
let a = 0;
let b = 0;
let c = 0;
let solution;
aInput.addEventListener('input', function(){
    a = Number(aInput.value);
});
bInput.addEventListener('input', function(){
    b = Number(bInput.value);
});
cInput.addEventListener('input', function(){
    c = Number(cInput.value);
});

calButton.addEventListener('click', function(){
    if(typeof a !== 'number') {
        alert(`Input number a`)
    } else {
let dis=b**2-4*a*c;
if(dis<0){
   solutionText.textContent=`No real roots exist since Discriminant < 0.
   D = ${dis}`;
  x1Text.textContent= `Not found`;
  x2Text.textContent= `Not found`;
   } else {
   let dis_sqrt=Math.sqrt(dis);
   let x1=(-b+dis_sqrt)/(a*2);
   let x2=(-b-dis_sqrt)/(a*2);

  solutionText.textContent= `D = ${dis}`
   x1Text.textContent=' Alpha (x1) = ' + x1;
   x2Text.textContent=' Beta (x2) = ' + x2;

    }
}})

// Exercise 6
const textInput = document.getElementById('text');
const reverse = document.getElementById('reverse');
const string = document.getElementById('string');
let text = '';
textInput.addEventListener('input', function(){
    text = textInput.value;
});
reverse.addEventListener('click', function(){
    text = text.split('').reverse().join('');
    string.textContent= text;
})
