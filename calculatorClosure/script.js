

function createCalculator(base) {
    if (isNaN(base)) {
        return;
    }
    let num = base;
    const firstBase = base;

    return {
        add: (v) => {
            if (isNaN(v)) {
                return;
            }
            num += v;
        },

        sub: (v) => {
            if (isNaN(v)) {
                return;
            }
            num -= v;
        },

        set: (v) => {
            if (isNaN(v)) {
                return;
            }
            num = v;
        },

        get: () => { return num; },
        reset: () => num = firstBase
    }
}

const calculator = createCalculator(100);

calculator.add(10);
calculator.add(10);
calculator.sub(20);
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe');

console.log(calculator.get());
calculator.reset();
console.log(calculator.get());

//без валидации
/*add: (v) => num += v,
        sub: (v) => num -= v,
        set: (v) => num = v,
        get: () => { return num; },
        reset: () => num = firstBase*/

