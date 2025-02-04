class Payment {
    constructor(amount, date) {
      this.amount = amount;
      this.date = date;
    }
  
    processPayment() {
      return "Processing payment..."; // Base behavior
    }
  }
  
  class CreditCardPayment extends Payment {
    #cardNumber; // Private field
  
    constructor(amount, date, cardNumber) {
      super(amount, date);
      this.#cardNumber = cardNumber;
    }
  
    processPayment() {
      return `Processing credit card payment of $${this.amount} on ${this.date}`;
    }
  }
  
  class PayPalPayment extends Payment {
    constructor(amount, date, email) {
      super(amount, date);
      this.email = email;
    }
  
    processPayment() {
      return `Processing PayPal payment of $${this.amount} from ${this.email} on ${this.date}`;
    }
  }
  
  class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
      super(amount, date);
      this.walletAddress = walletAddress;
    }
  
    processPayment() {
      return `Processing crypto payment of $${this.amount} to wallet ${this.walletAddress} on ${this.date}`;
    }
  }
  
  // Example Usage
  const creditCardPayment = new CreditCardPayment(100, "2025-02-05", "1234-5678-9876-5432");
  const payPalPayment = new PayPalPayment(200, "2025-02-05", "user@example.com");
  const cryptoPayment = new CryptoPayment(300, "2025-02-05", "0x123abc456def");
  
  console.log(creditCardPayment.processPayment());
  console.log(payPalPayment.processPayment());
  console.log(cryptoPayment.processPayment());
  