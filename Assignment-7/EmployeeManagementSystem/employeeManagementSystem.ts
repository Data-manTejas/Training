interface Employee{
    id : number;
    name : string;
    position : string;
    salary : number;
}

interface Manager extends Employee{
    teamSize : number;
}

class Department{
    private employees : Employee[] = [];
    addEmployee(employee : Employee): void {
        this.employees.push(employee);
    }

    removeEmployee(id : number): void {
        this.employees = this.employees.filter(employee => employee.id !== id);
    }

    getTotalSalary(): number {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }

    listEmployee(): void {
        console.log(this.employees);
    }
}

class GenericStorage<T>{
    items : T[] = [];

    add(item : T): void{
        this.items.push(item);
    }

    remove(item : T): void{
        this.items = this.items.filter(storedItem => storedItem !== item);
    }
    
    getAll(): T[]{
        return this.items;
    }
}

function updateSalary<T extends Employee>(employee : T, newSalary : number): T{
    return {...employee, salary : newSalary};
}

const department = new Department();
department.addEmployee({ id: 1, name: "Marnus", position: "Developer", salary: 50000 });
department.addEmployee({ id: 2, name: "Steve", position: "Manager", salary: 70000 });


console.log("Total Salary:", department.getTotalSalary()); // Output: 120000
department.listEmployee();

const storage = new GenericStorage<Employee>();
storage.add({ id: 3, name: "Pattrick", position: "Tester", salary: 40000 });
console.log("Stored Employees:", storage.getAll());

const employee: Employee = { id: 4, name: "Bob", position: "Designer", salary: 45000 };
const updatedEmployee = updateSalary(employee, 50000);
console.log("Updated Employee:", updatedEmployee);


// Total Salary: 120000
// [
//   { id: 1, name: 'Marnus', position: 'Developer', salary: 50000 },
//   { id: 2, name: 'Steve', position: 'Manager', salary: 70000 }
// ]
// Stored Employees: [ { id: 3, name: 'Pattrick', position: 'Tester', salary: 40000 } ]
// Updated Employee: { id: 4, name: 'Bob', position: 'Designer', salary: 50000 }