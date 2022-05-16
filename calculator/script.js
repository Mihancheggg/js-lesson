var buttonPlus = document.getElementById("plus");
var buttonMinus = document.getElementById("minus");
var buttonMultiply = document.getElementById("multiply");
var buttonDivide = document.getElementById("divide");



function onPlusClick(){
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = input1.value;
    var number2 = input2.value;
    var sum = +number1 + +number2;
    alert(sum);
};

function onMinusClick(){
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = input1.value;
    var number2 = input2.value;
    var minus = +number1 - +number2;
    alert(minus);
};

function onMultiplyClick(){
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = input1.value;
    var number2 = input2.value;
    var product = +number1 * +number2;
    alert(product);
};

function onDivideClick(){
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = input1.value;
    var number2 = input2.value;
    var quotient = +number1 / +number2;
    alert(quotient);
};

buttonPlus.addEventListener("click", onPlusClick);
buttonMinus.addEventListener("click", onMinusClick);
buttonMultiply.addEventListener("click", onMultiplyClick);
buttonDivide.addEventListener("click", onDivideClick);