let todoList = [];

// Load todo list from localStorage when page loads
document.addEventListener("DOMContentLoaded", () => {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
        todoList = JSON.parse(savedList);
        displayItems();
    }
});

function addTodo() {
    let inputElement = document.querySelector("#todo");
    let dateElement = document.querySelector("#todo-date");
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = "";
    dateElement.value = "";
    saveTodoList(); // Save todo list to localStorage
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector(".todo-container");
    let newHtml = "";
    todoList.forEach((todo, index) => {
        let { item, dueDate } = todo;
        newHtml += `
        <div id="all-data-container">
            <span>${item}</span>
            <span>${dueDate}</span>
            <button onclick="deleteItem(${index});">Delete</button>
        </div>`;
    });
    containerElement.innerHTML = newHtml;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    saveTodoList(); // Save todo list to localStorage
    displayItems();
}

// Save todo list to localStorage
function saveTodoList() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}
