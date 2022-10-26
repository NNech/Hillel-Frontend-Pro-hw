"use strict";

function Calculator(base) {
    if (isNaN(base)) {
        return;
    }
    this.base = base;

    this.add = function (v) {
        if (isNaN(v)) {
            return;
        }
        this.base += v;
    };

    this.sub = function (v) {
        if (isNaN(v)) {
            return;
        }
        this.base -= v;
    };

    this.set = function (v) {
        if (isNaN(v)) {
            return;
        }
        this.base = v;
    };

    this.get = function () {
        return this.base;
    };
}

const calc = new Calculator(100);

calc.add(10);
calc.add(10);
calc.sub(20);
calc.set(30);
calc.set(20);
calc.add(10);
calc.add("qwe");
calc.get();
