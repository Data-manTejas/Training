class Employee {
    constructor(name, id, salary) {
      this.name = name;
      this.id = id;
      this.salary = salary;
    }
  
    calculateBonus() {
      return 0; // Base class has no specific bonus
    }
  }
  
  class Manager extends Employee {
    calculateBonus() {
      return this.salary * 0.2; // 20% of salary as bonus
    }
  }
  
  class Engineer extends Employee {
    calculateBonus() {
      return this.salary * 0.15; // 15% of salary as bonus
    }
  }
  
  class Intern extends Employee {
    calculateBonus() {
      return 500; // Fixed bonus for interns
    }
  }
  
  // Example Usage
  const manager = new Manager("Alice", 101, 80000);
  const engineer = new Engineer("Bob", 102, 60000);
  const intern = new Intern("Charlie", 103, 20000);
  
  console.log(`${manager.name}'s Bonus: ${manager.calculateBonus()}`);
  console.log(`${engineer.name}'s Bonus: ${engineer.calculateBonus()}`);
  console.log(`${intern.name}'s Bonus: ${intern.calculateBonus()}`);
  