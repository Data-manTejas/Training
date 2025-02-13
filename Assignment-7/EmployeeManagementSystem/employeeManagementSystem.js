"use strict";
class Department {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    removeEmployee(id) {
        this.employees = this.employees.filter(employee => employee.id !== id);
    }
    getTotalSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
    listEmployee() {
        console.log(this.employees);
    }
}
class GenericStorage {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        this.items = this.items.filter(storedItem => storedItem !== item);
    }
    getAll() {
        return this.items;
    }
}
function updateSalary(employee, newSalary) {
    return Object.assign(Object.assign({}, employee), { salary: newSalary });
}
const department = new Department();
department.addEmployee({ id: 1, name: "Marnus", position: "Developer", salary: 50000 });
department.addEmployee({ id: 2, name: "Steve", position: "Manager", salary: 70000 });
console.log("Total Salary:", department.getTotalSalary()); // Output: 120000
department.listEmployee();
const storage = new GenericStorage();
storage.add({ id: 3, name: "Pattrick", position: "Tester", salary: 40000 });
console.log("Stored Employees:", storage.getAll());
const employee = { id: 4, name: "Bob", position: "Designer", salary: 45000 };
const updatedEmployee = updateSalary(employee, 50000);
console.log("Updated Employee:", updatedEmployee);
