var buttonPlus = document.getElementById("plus");
var buttonMinus = document.getElementById("minus");
var buttonMultiply = document.getElementById("multiply");
var buttonDivide = document.getElementById("divide");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function operate(operator){
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    
    if (operator === "+"){
        var result = number1 + number2;
    } else if (operator === "-"){
        var result = number1 - number2;
    }else if (operator === "*"){
        var result = number1 * number2;
    }else if (operator === "/"){
        var result = number1 / number2;
    }
    alert(result);
}

function onOperatorClick(eventObject){
    var clickedEl = eventObject.currentTarget;
    var operation = clickedEl.innerHTML;
    operate(operation);
}

buttonPlus.addEventListener("click", onOperatorClick);
buttonMinus.addEventListener("click", onOperatorClick);
buttonMultiply.addEventListener("click", onOperatorClick);
buttonDivide.addEventListener("click", onOperatorClick);