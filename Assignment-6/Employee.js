var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Employee.prototype.calculateBonus = function () {
        return 0; // Base class has no specific bonus
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.calculateBonus = function () {
        return this.salary * 0.2; // 20% of salary as bonus
    };
    return Manager;
}(Employee));
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Engineer.prototype.calculateBonus = function () {
        return this.salary * 0.15; // 15% of salary as bonus
    };
    return Engineer;
}(Employee));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Intern.prototype.calculateBonus = function () {
        return 500; // Fixed bonus for interns
    };
    return Intern;
}(Employee));
// Example Usage
var manager = new Manager("Alice", 101, 80000);
var engineer = new Engineer("Bob", 102, 60000);
var intern = new Intern("Charlie", 103, 20000);
console.log("".concat(manager.name, "'s Bonus: ").concat(manager.calculateBonus()));
console.log("".concat(engineer.name, "'s Bonus: ").concat(engineer.calculateBonus()));
console.log("".concat(intern.name, "'s Bonus: ").concat(intern.calculateBonus()));
