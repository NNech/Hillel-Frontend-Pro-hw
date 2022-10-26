const operand = prompt("Enter  +,-,*,/");
const num1 = Number(prompt("Enter a"));
const num2 = Number(prompt("Enter b"));

function calculator() {

    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;
    }
}

alert(num1 + operator + num2 + '=' + calculator());