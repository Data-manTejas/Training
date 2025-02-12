class Employee {
    name: string;
    id: number;
    salary: number;
  
    constructor(name: string, id: number, salary: number) {
      this.name = name;
      this.id = id;
      this.salary = salary;
    }
  
    calculateBonus(): number {
      return 0; // Base class has no specific bonus
    }
  }
  
  class Manager extends Employee {
    calculateBonus(): number {
      return this.salary * 0.2; 
    }
  }
  
  class Engineer extends Employee {
    calculateBonus(): number {
      return this.salary * 0.15; 
    }
  }
  
  class Intern extends Employee {
    calculateBonus(): number {
      return 500; 
    }
  }
  
  // Example Usage
  const manager: Manager = new Manager("Alice", 101, 80000);
  const engineer: Engineer = new Engineer("Bob", 102, 60000);
  const intern: Intern = new Intern("Charlie", 103, 20000);
  
  console.log(`${manager.name}'s Bonus: ${manager.calculateBonus()}`);
  console.log(`${engineer.name}'s Bonus: ${engineer.calculateBonus()}`);
  console.log(`${intern.name}'s Bonus: ${intern.calculateBonus()}`);