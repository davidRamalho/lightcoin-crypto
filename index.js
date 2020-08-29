class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }
  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.addTransaction(this) ;
    this.time = new Date();
  }
}
class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account ('snow-patrol')


t1 = new Withdrawal(50.25, myAccount);
t1.commit();

t2 = new Withdrawal(9.99, myAccount);
t2.commit();

t3 = new Deposit(120.00, myAccount);
t3.commit();

console.log(myAccount)
console.log(myAccount.balance)
