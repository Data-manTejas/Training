document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const ulTodo = document.getElementById("ul-todo");
    const buttonDeleteAll = document.getElementById("button-delete-all");
  
    buttonTodo.addEventListener("click", () => {
      const text = inputTodo.value;
      if (text.trim()) {
        createTodo(text);
        inputTodo.value = "";
        saveAllTodo();
      }
    });
  
    buttonDeleteAll.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete all tasks?")) {
        ulTodo.innerHTML = "";
        saveAllTodo();
      }
    });
  
    const createTodo = (task) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-start";
      li.innerHTML = `<span class="text-todo">${task}</span>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger">Edit</button>
        <button type="button" class="btn btn-warning">Delete</button>
      </div>`;
      ulTodo.appendChild(li);
    };
  
    ulTodo.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-warning")) {
        if (confirm("Are you sure you want to delete this task?")) {
          e.target.closest(".list-group-item").remove();
          saveAllTodo();
        }
      }
  
      if (e.target.classList.contains("btn-danger")) {
        const li = e.target.closest(".list-group-item");
        const taskText = li.querySelector(".text-todo");
  
        if (!li.querySelector("input")) {
          const inputField = document.createElement("input");
          inputField.type = "text";
          inputField.value = taskText.textContent;
          inputField.className = "form-control mb-2";
  
          const saveButton = document.createElement("button");
          saveButton.className = "btn btn-success btn-sm";
          saveButton.textContent = "Save";
  
          saveButton.addEventListener("click", () => {
            taskText.textContent = inputField.value;
            taskText.style.display = "block";
            inputField.remove();
            saveButton.remove();
            saveAllTodo();
          });
  
          li.insertBefore(inputField, taskText);
          li.insertBefore(saveButton, taskText);
          taskText.style.display = "none";
        }
      }
    });
  
    const saveAllTodo = () => {
      const allTodos = [...document.querySelectorAll(".text-todo")].map(
        (task) => task.textContent
      );
      localStorage.setItem("allTodos", JSON.stringify(allTodos));
    };
  
    const loadAllTodo = () => {
      const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
      allTodos.forEach((task) => createTodo(task));
    };
  
    loadAllTodo();
  });
  