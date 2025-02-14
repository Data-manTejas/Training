interface Expense {
    id: string;
    amount: number;
    category: ExpenseCategory;
    date: string;
    description: string;
  }
  
  enum ExpenseCategory {
    Food = "Food",
    Travel = "Travel",
    Bills = "Bills",
    Shopping = "Shopping",
  }
  
  const expenseForm = document.getElementById("expense-form") as HTMLFormElement;
  const expenseList = document.getElementById("expense-list") as HTMLUListElement;
  const clearAllButton = document.getElementById("clear-all") as HTMLButtonElement;
  
  let expenses: Expense[] = JSON.parse(localStorage.getItem("expenses") || "[]");
  
  
  const renderExpenses = () => {
    expenseList.innerHTML = ""; 
  
    expenses.forEach((expense) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${expense.date} - ${expense.category} - ₹${expense.amount} (${expense.description})`;
  
      
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.style.marginLeft = "10px";
      removeButton.addEventListener("click", () => removeExpense(expense.id));
  
      listItem.appendChild(removeButton);
      expenseList.appendChild(listItem);
    });
  };
  
  
  const removeExpense = (id: string) => {
    expenses = expenses.filter((expense) => expense.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
  };
  
  
  clearAllButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all expenses?")) {
      expenses = [];
      localStorage.setItem("expenses", JSON.stringify(expenses));
      renderExpenses();
    }
  });
  

  expenseForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
  
    const amount = (document.getElementById("amount") as HTMLInputElement).valueAsNumber;
    const category = (document.getElementById("category") as HTMLSelectElement).value as ExpenseCategory;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLInputElement).value;
  
    const newExpense: Expense = {
      id: Date.now().toString(),
      amount,
      category,
      date,
      description,
    };
  
    expenses.push(newExpense);
  
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
    expenseForm.reset();
  });
  

  renderExpenses();
  