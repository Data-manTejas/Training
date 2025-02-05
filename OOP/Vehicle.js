class Vehicle {
    constructor(brand, model, rentPricePerDay) {
      this.brand = brand;
      this.model = model;
      this.rentPricePerDay = rentPricePerDay;
    }
  
    calculateRentalCost(days) {
      return this.rentPricePerDay * days;
    }
  }
  
  class Car extends Vehicle {
    calculateRentalCost(days) {
      return super.calculateRentalCost(days) + 50; // Additional car charge
    }
  }
  
  class Bike extends Vehicle {
    calculateRentalCost(days) {
      return super.calculateRentalCost(days) - 10; // Discount for bikes
    }
  }
  
  class Truck extends Vehicle {
    calculateRentalCost(days) {
      return super.calculateRentalCost(days) + 100; // Additional truck charge
    }
  }
  
  // Example Usage
  const car = new Car("Toyota", "Camry", 100);
  const bike = new Bike("Yamaha", "MT-15", 50);
  const truck = new Truck("Volvo", "FH16", 300);
  
  console.log(`Car Rental Cost (5 days): $${car.calculateRentalCost(5)}`);
  console.log(`Bike Rental Cost (5 days): $${bike.calculateRentalCost(5)}`);
  console.log(`Truck Rental Cost (5 days): $${truck.calculateRentalCost(5)}`);
  