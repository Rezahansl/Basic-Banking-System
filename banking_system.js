const BankAccount = require('./bank_account.js');

async function main() {
    const account = new BankAccount();

    try {
        const depositResult = await account.deposit(100);
        console.log(depositResult);

        const withdrawResult = await account.withdraw(50);
        console.log(withdrawResult);

        const invalidWithdrawResult = await account.withdraw(200);
        console.log(invalidWithdrawResult);
    } catch (error) {
        console.error(error);
    }
}

main();
