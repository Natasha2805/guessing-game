class GuessingGame {
    constructor() {
        this.left = 0;
        this.right = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        return Math.ceil((this.left + this.right)/2);
    }

    lower() {
        this.right = this.guess();
        this.guess()
    }

    greater() {
        this.left = this.guess();
        this.guess();
    }
}

module.exports = GuessingGame;
