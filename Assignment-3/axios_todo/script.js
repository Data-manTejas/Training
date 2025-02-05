document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const ulTodo = document.getElementById("ul-todo");
  const deleteAll = document.querySelector(".btn-warning");
  const buttonFetchTodo = document.getElementById("button-fetch-todo");
  const buttonPost = document.getElementById("button-post");
  const buttonPopulateAll = document.getElementById("button-populate-all");

  buttonPopulateAll.addEventListener("click", () => {
    const tasks = [
      "Complete Homework",
      "Go for a Walk",
      "Read a Book",
      "Buy Groceries",
      "Clean the House"
    ];
    tasks.forEach(task => {
      createTodo(task);
    });
  });

  buttonFetchTodo.addEventListener("click", () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const randomTodo =
          response.data[Math.floor(Math.random() * response.data.length)];
        createTodo(randomTodo.title);
      })
      .catch((error) => console.error("Error fetching task:", error));
  });

  buttonPost.addEventListener("click", () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: inputTodo.value,
        completed: false,
      })
      .then((res) => {
        alert(
          `The POST request responded with status: ${
            res.status
          } with data: ${JSON.stringify(res.data, null, 2)}`
        );
        inputTodo.value = "";
      })
      .catch((error) => alert(error));
  });

  deleteAll.addEventListener("click", () => {
    let userChoice = confirm("Are you sure you want to delete the entire list?");
    if (userChoice) {
      ulTodo.innerHTML = "";
    }
  });

  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    if (text) {
      createTodo(text);
      inputTodo.value = "";
    }
  });

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    li.innerHTML = `<span class="text-todo">${task}</span>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger">Put/Patch</button>
            <button type="button" class="btn btn-warning">Delete</button>
        </div>`;
    ulTodo.appendChild(li);
  };

  // Event listener for handling delete, drag, and patch actions
  ulTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-warning")) {
      e.target.closest(".list-group-item").remove();
    }

    if (e.target.classList.contains("btn-danger")) {
      const li = e.target.closest(".list-group-item");
      const span = li.querySelector(".text-todo");
      const taskText = span.textContent;

      const inputEdit = document.createElement("input");
      inputEdit.className = "edit-text";
      inputEdit.type = "text";
      inputEdit.value = taskText;

      li.replaceChild(inputEdit, span);
      inputEdit.focus();

      inputEdit.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const newTextVal = inputEdit.value.trim();
          if (newTextVal !== "") {
            span.textContent = newTextVal;
            li.replaceChild(span, inputEdit);
          } else {
            li.replaceChild(span, inputEdit);
          }
        }
        if (e.key === "Escape") {
          li.replaceChild(span, inputEdit);
        }
      });
    }
  });
});
