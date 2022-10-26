const MARKS = ['+', '-', '*', '/'];

const OPERATOR = inputOperator();
const OPERAND_AMOUNT = inputOperandsAmount();
const OPERANDS = inputOperands();
const RESULT = calculator();

printResult();

printResultTest(OPERANDS, OPERATOR, RESULT);
printResultTest([1, 2, 3, 4, 5], "*", 124);



function inputOperator() {
    let input;
    do {
        input = prompt("Enter +, -, *, /");
    } while (!MARKS.includes(input));

    return input;
}

function inputOperandsAmount() {
    let amount = Number(prompt("Enter operands more 1 and less 5!"));

    while (isNaN(amount) || amount === null || amount == "" || amount <= 1 || amount >= 5) {
        amount = Number(prompt(`You have entered incorrect value - ${amount}!
                                Please try again!
                                Enter amount again`));
    }

    return amount;
}

function inputOperands() {
    let numbers = [];
    let number;

    for (let i = 1; i <= OPERAND_AMOUNT; i++) {
        number = Number(prompt(`Enter operand #${i}`))

        while (isNaN(number) || number === null) {
            number = Number(prompt(`You have entered incorrect value - ${number}!
                                    Please try again!
                                    Enter operand #${i}`));
        }

        numbers.push(number);
    }

    return numbers;
}

function calculator() {
    let calculationResult = OPERANDS[0];

    for (let i = 0; i < OPERANDS.length - 1; i++) {
        calculationResult = calcOperations(calculationResult, OPERANDS[i + 1]);
    }

    return calculationResult;
}

function calcOperations(a, b) {
    switch (OPERATOR) {
        case '+': return add(a, b);
        case '-': return sub(a, b);
        case '*': return mul(a, b);
        case '/': return div(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function printResult() {
    let print = OPERANDS[0];

    for (let i = 1; i < OPERANDS.length; i++) {
        print += OPERATOR + OPERANDS[i];
    }

    alert(print + '=' + RESULT);
}

/*function printResultTest(operands, operator, result) {
    let print = operands[0];

    for (let i = 1; i < operands.length; i++) {
        print += operator + operands[i];
    }

    alert(print + '=' + result);
}*/


