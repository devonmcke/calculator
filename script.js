


// first step is create the html to hold the buttons
//then create an eventlistener that will listen for when those buttons are selected
document.addEventListener('keyup', function () {
  // this eventlistener will fire anytime a key is pressed, any key on the keyboard
  // use if/else - check to see if a number has been pressed. if so, then run displayButton function
  //and pass in the enumber that was pressed
  // https://javascript.info/keyboard-events
});



var display = document.getElementById('display'); // display - cant be input field

// have a function that is used to display, rather than using display.innerHTML
//when displaying 0, then pressing equal, it should not display 'undefined'
//add keyup, where it listens to keys typed o the keyboard
// after hitting equal, I shouldnt be able to add additonal . if a . is already in place
//make it so you cant add a decimal, until after you set an operator -- set it true when you set an operator

var buttonContainer = document.getElementById('button-container');
var currNumber = '';
var currOperator = '';
var calcParts = [];
var canDecimal = true;

buttonContainer.addEventListener('click', function (event) {

  var isNum = event.target.matches('.num');
  var isOperator = event.target.matches('.operator');
  var isDecimal = event.target.matches('.decimal');
  var isEquate = event.target.matches('.equate');
  var isClear = event.target.matches('.clear');
  var isPosNeg = event.target.matches('.posneg');

  if (isNum) {
    if (display.innerText === '0') {
      display.innerText = ''
    }
    var num = event.target.innerText;
    canDecimal = true;
    handleNumber(num);
  } else if (isOperator) {
    var operator = event.target.innerText;
    canDecimal = true;
    handleOperator(operator);
  } else if (isDecimal) {
    handleDecimal();
  } else if (isEquate) {
    handleEquate();
    currNumber = '';
    currOperator = '';
    canDecimal = false;
  } else if (isClear) {
    calcParts = [];
    currNumber = '';
    currOperator = '';
    display.innerHTML = '';
    canDecimal = true;
  } else if (isPosNeg) {
    currNumber *= (-1);
    calcParts.pop();
    calcParts.push(currNumber);
    display.innerHTML = calcParts.join('');
  }
});

function handleEquate() {
  calcParts.push(currNumber);
  for (var i = 0; i < calcParts.length; i++) {
    if (calcParts[i] === '.') {
      calcParts[i] = '0';
    }
  }
  var equation = calcParts.join('');
  var finalEquation = eval(equation);
  display.innerText = finalEquation;
}
function handleDecimal() {
  if (canDecimal) {
    if (currOperator !== '') {
      calcParts.push(currOperator);
    }
    currOperator = '';
    currNumber += '.';
    display.innerText += '.';
    canDecimal = false;
  }
}
function handleNumber(num) {
  if (currOperator !== '') {
    calcParts.push(currOperator);
  }
  currOperator = '';
  currNumber += num;
  display.innerText += num;
}
function handleOperator(operator) {
  if (currOperator === '') {
    currOperator = operator;
    calcParts.push(currNumber);
    currNumber = '';
    display.innerText += operator;
  } else {
    currOperator = operator;
    var opIndex = display.innerText.length - 1;
    var displayParts = display.innerText.split('');
    displayParts[opIndex] = operator;
    display.innerText = displayParts.join('');
  }
}
document.addEventListener('keyup', function (event) {
  if (event.keyCode < 58 && event.keyCode > 47) {
  }
});
var buttonEquals = document.getElementById('button-equals')
