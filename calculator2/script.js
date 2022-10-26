const operator = inputOperator();
const num1 = inputOperands();
const num2 = inputOperands();
const calc = calculator(operator, num1, num2);


printResult(num1, num2, operator, calc);


function inputOperator() {
    let input = prompt("Enter  +,-,*,/");
    if (input.length > 1) {
        alert("Incorrect operator!");
        throw new Error();
    }
    else {
        return input;
    }
}

function inputOperands() {
    let inputNumber = Number(prompt("enter number"));
    if (isNaN(inputNumber)) {
        alert("Incorrect operand!");
        throw new Error();
    }
    else {
        return inputNumber;
    }
}

function calculator() {
    switch (operator) {
        case '+': return add();
        case '-': return sub();
        case '*': return mul();
        case '/': return div();
    }
}

function add() {
    return num1 + num2;
}

function sub() {
    return num1 - num2;
}

function mul() {
    return num1 * num2;
}

function div() {
    return num1 / num2;
}

function printResult() {
    alert(num1 + operator + num2 + '=' + calc);
}