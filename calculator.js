class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }

    exponentiate(base, exp) {
        return Math.pow(base, exp);
    }

    logarithm(base, value) {
        if (base <= 0 || base === 1 || value <= 0) {
            return "Error: Invalid base or value for logarithm";
        }
        return Math.log(value) / Math.log(base);
    }

    squareRoot(x) {
        if (x < 0) {
            return "Error: Cannot calculate square root of a negative number";
        }
        return Math.sqrt(x);
    }

    modulus(a, b) {
        return a % b;
    }

    calculate(expression) {
        try {
            return Function('"use strict"; return (' + expression + ')')();
        } catch (error) {
            return "Error: Invalid expression";
        }
    }
}

const calc = new Calculator();

console.log("Addition: ", calc.add(10, 5));
console.log("Subtraction: ", calc.subtract(10, 5));
console.log("Multiplication: ", calc.multiply(10, 5));
console.log("Division: ", calc.divide(10, 2));
console.log("Exponentiation: ", calc.exponentiate(2, 3));
console.log("Logarithm: ", calc.logarithm(10, 100));
console.log("Square Root: ", calc.squareRoot(16));
console.log("Modulus: ", calc.modulus(10, 3));
console.log("Calculation: ", calc.calculate("10 + 5 * 2"));
