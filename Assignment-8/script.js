var ExpenseCategory;
(function (ExpenseCategory) {
    ExpenseCategory["Food"] = "Food";
    ExpenseCategory["Travel"] = "Travel";
    ExpenseCategory["Bills"] = "Bills";
    ExpenseCategory["Shopping"] = "Shopping";
})(ExpenseCategory || (ExpenseCategory = {}));
var expenseForm = document.getElementById("expense-form");
var expenseList = document.getElementById("expense-list");
var clearAllButton = document.getElementById("clear-all");
var expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
var renderExpenses = function () {
    expenseList.innerHTML = "";
    expenses.forEach(function (expense) {
        var listItem = document.createElement("li");
        listItem.textContent = "".concat(expense.date, " - ").concat(expense.category, " - \u20B9").concat(expense.amount, " (").concat(expense.description, ")");
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        removeButton.addEventListener("click", function () { return removeExpense(expense.id); });
        listItem.appendChild(removeButton);
        expenseList.appendChild(listItem);
    });
};
var removeExpense = function (id) {
    expenses = expenses.filter(function (expense) { return expense.id !== id; });
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
};
clearAllButton.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all expenses?")) {
        expenses = [];
        localStorage.setItem("expenses", JSON.stringify(expenses));
        renderExpenses();
    }
});
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var amount = document.getElementById("amount").valueAsNumber;
    var category = document.getElementById("category").value;
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;
    var newExpense = {
        id: Date.now().toString(),
        amount: amount,
        category: category,
        date: date,
        description: description,
    };
    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
    expenseForm.reset();
});
renderExpenses();
