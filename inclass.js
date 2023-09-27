class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
  
    depositMoney() {
      let addAmount = parseFloat(prompt("Enter deposit amount: "));
      if (!isNaN(addAmount)) {
        this.balance += addAmount;
        console.log(`Deposited ${addAmount} successfully.`);
      } else {
        console.log("Invalid input. Please enter a valid number.");
      }
    }
  
    withdrawMoney() {
      let withdrawAmount = parseFloat(prompt("Enter withdrawal amount: "));
      if (!isNaN(withdrawAmount)) {
        if (withdrawAmount <= this.balance) {
          this.balance -= withdrawAmount;
          console.log(`Withdrawn ${withdrawAmount} successfully.\n`);
        } else {
          console.log("Insufficient balance.");
        }
      } else {
        console.log("Invalid input. Please enter a valid number.");
      }
    }
  
    checkBalance() {
      return this.balance;
    }
  }
  
  const prompt = require("prompt-sync")(); //add prompt 
  var bankAccount = prompt("Enter your bank account number: ");
  var accountName = prompt("Enter bank account name: ");
  var balance = parseFloat(prompt("Enter initial balance: "));
  const newAccount = new BankAccount(bankAccount, accountName, balance);
  
  while (true) {
    console.log("Choose an option:");
    console.log("0. Exit");
    console.log("1. Deposit Money");
    console.log("2. Withdraw money");
    console.log("3. Check balance");
  
    let option = prompt("Enter your choice: ");
    if (option == '1') {
        newAccount.depositMoney();
      } else if (option == '2') {
        newAccount.withdrawMoney();
      } else if (option == '3') {
        console.log(`Account balance: ${newAccount.checkBalance()}`);
      } else if (option == '0') {
        break;
      } else {
        console.log("Input error, please try again ");
      }
  }
  