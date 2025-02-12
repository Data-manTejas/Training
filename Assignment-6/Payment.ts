class Payment {
    amount: number;
    date: string;
  
    constructor(amount: number, date: string) {
      this.amount = amount;
      this.date = date;
    }
  
    processPayment(): string {
      return "Processing payment..."; 
    }
  }
  
  class CreditCardPayment extends Payment {
    #cardNumber: string; 
  
    constructor(amount: number, date: string, cardNumber: string) {
      super(amount, date);
      this.#cardNumber = cardNumber;
    }
  
    processPayment(): string {
      return `Processing credit card payment of $${this.amount} on ${this.date}`;
    }
  }
  
  class PayPalPayment extends Payment {
    email: string;
  
    constructor(amount: number, date: string, email: string) {
      super(amount, date);
      this.email = email;
    }
  
    processPayment(): string {
      return `Processing PayPal payment of $${this.amount} from ${this.email} on ${this.date}`;
    }
  }
  
  class CryptoPayment extends Payment {
    walletAddress: string;
  
    constructor(amount: number, date: string, walletAddress: string) {
      super(amount, date);
      this.walletAddress = walletAddress;
    }
  
    processPayment(): string {
      return `Processing crypto payment of $${this.amount} to wallet ${this.walletAddress} on ${this.date}`;
    }
  }
  
  // Example Usage
  const creditCardPayment: CreditCardPayment = new CreditCardPayment(100, "2025-02-05", "1234-5678-9876-5432");
  const payPalPayment: PayPalPayment = new PayPalPayment(200, "2025-02-05", "user@example.com");
  const cryptoPayment: CryptoPayment = new CryptoPayment(300, "2025-02-05", "0x123abc456def");
  
  console.log(creditCardPayment.processPayment());
  console.log(payPalPayment.processPayment());
  console.log(cryptoPayment.processPayment());