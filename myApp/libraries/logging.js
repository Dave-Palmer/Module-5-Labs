class Logger {
    constructor() {
        this.id = Math.floor(Math.random() * 1000) + 1
    }

    log = (value) => {
        console.log(`[Logger:${this.id}]:${value}`)
    }
}


module.exports = Logger