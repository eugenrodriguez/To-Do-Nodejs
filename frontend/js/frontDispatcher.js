// frontend/js/frontDispatcher.js

const apiBaseUrl = 'http://localhost:3000/todos';

// Obtener todas las tareas
async function fetchTodos() {
    const response = await fetch(apiBaseUrl);
    const todos = await response.json();
    displayTodos(todos);
}

// Mostrar tareas en la lista
function displayTodos(todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'w3-padding-16';
        li.innerHTML = `
            <strong>${todo.title}</strong>: ${todo.description}
            <button onclick="deleteTodo('${todo.id}')" class="w3-button w3-red w3-small w3-right">Delete</button>
            <button onclick="editTodoPrompt('${todo.id}', '${todo.title}', '${todo.description}')" class="w3-button w3-blue w3-small w3-right w3-margin-right">Edit</button>
        `;
        todoList.appendChild(li);
    });
}

// Agregar una nueva tarea
async function addTodo() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const newTodo = { title, description };
    await fetch(apiBaseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    });

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    fetchTodos();
}

// Editar tarea
async function editTodoPrompt(id, title, description) {
    const newTitle = prompt('Edit title:', title);
    const newDescription = prompt('Edit description:', description);
    if (newTitle !== null && newDescription !== null) {
        editTodo(id, { title: newTitle, description: newDescription });
    }
}

async function editTodo(id, updatedTodo) {
    await fetch(`${apiBaseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTodo)
    });
    fetchTodos();
}

// Eliminar una tarea
async function deleteTodo(id) {
    await fetch(`${apiBaseUrl}/${id}`, {
        method: 'DELETE'
    });
    fetchTodos();
}

// Cargar todas las tareas al iniciar
document.addEventListener('DOMContentLoaded', fetchTodos);
