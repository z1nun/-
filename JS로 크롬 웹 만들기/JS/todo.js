const TodoForm = document.getElementById("todo-form");
const TodoList = document.getElementById("todo-list");
const TodoInput = TodoForm.querySelector("#todo-form input");
let todos = [];
const TODOS_KEY = "todos"


function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = '❌';
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    TodoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = TodoInput.value;
    TodoInput.value = '';
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}; 

const savedTodo = localStorage.getItem(TODOS_KEY)
if (savedTodo) {
    const parseTodos = JSON.parse(savedTodo);
    todos = parseTodos;
    parseTodos.forEach(paintTodo);
} 



TodoForm.addEventListener("submit", handleToDoSubmit);
