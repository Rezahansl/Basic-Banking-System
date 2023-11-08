class BankAccount {
    constructor() {
        this.balance = 0;
    }

    async deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0) {
                    this.balance += amount;
                    const result = `Deposited $${amount}. New balance: $${this.balance}`;
                    resolve(result);
                } else {
                    const error = 'Invalid deposit amount.';
                    reject(error);
                }
            }, 2000);
        });
    }

    async withdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0 && amount <= this.balance) {
                    this.balance -= amount;
                    const result = `Withdrawn $${amount}. New balance: $${this.balance}`;
                    resolve(result);
                } else {
                    const error = 'Invalid withdrawal amount or insufficient balance.';
                    reject(error);
                }
            }, 2000);
        });
    }
}

module.exports = BankAccount;
