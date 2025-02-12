class Vehicle {
    brand: string;
    model: string;
    rentPricePerDay: number;
  
    constructor(brand: string, model: string, rentPricePerDay: number) {
      this.brand = brand;
      this.model = model;
      this.rentPricePerDay = rentPricePerDay;
    }
  
    calculateRentalCost(days: number): number {
      return this.rentPricePerDay * days;
    }
  }
  
  class Car extends Vehicle {
    calculateRentalCost(days: number): number {
      return super.calculateRentalCost(days) + 50; 
    }
  }
  
  class Bike extends Vehicle {
    calculateRentalCost(days: number): number {
      return super.calculateRentalCost(days) - 10; 
    }
  }
  
  class Truck extends Vehicle {
    calculateRentalCost(days: number): number {
      return super.calculateRentalCost(days) + 100; 
    }
  }
  
  // Example Usage
  const car: Car = new Car("Toyota", "Camry", 100);
  const bike: Bike = new Bike("Yamaha", "MT-15", 50);
  const truck: Truck = new Truck("Volvo", "FH16", 300);