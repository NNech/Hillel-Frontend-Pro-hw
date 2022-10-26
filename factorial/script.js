alert(`Factorial = ${factorial(6)}`);

function factorial(n) {
    if (n <= 0) {
        alert('Incorrect input parameter! Parameter should be > 0 ');

        return -1;
    }

    if (n == 1) return 1;

    return n * factorial(n - 1);
}
