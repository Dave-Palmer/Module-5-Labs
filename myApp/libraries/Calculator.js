
const logger = require('./logging')


class Calculator {
    constructor() {
        this.logger = new logger()
        // this.id = Math.floor(Math.random() * 1000) + 1
    }
    add(num1, num2) {
        const value = num1 + num2
        this.logger.log(value)
        return value;
    }
    subtract(num1, num2) {
        const value = num1 - num2
        // log(value)
        return value;
    }
    multiply(num1, num2) {
        const value = num1 * num2
        // log(value)
        return value;
    }
    divide(num1, num2) {
        const value = num1 / num2
        // log(value)
        return value;
    }
}
module.exports = Calculator