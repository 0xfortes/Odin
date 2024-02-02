// src/index.js
import Todo from './modules/todo';
import Project from './modules/project';

const projects = [];

const renderTodo = (todo, projectIndex) => {
  const todoList = document.getElementById('todo-list');
  const todoItem = document.createElement('li');
  todoItem.innerHTML = `<strong>${todo.title}</strong><br>
                        Description: ${todo.description}<br>
                        Due Date: ${todo.getFormattedDueDate()}<br>
                        Priority: ${todo.priority}<br>
                        Notes: ${todo.notes}<br>
                        Completed: ${todo.completed ? 'Yes' : 'No'}<br>
                        <button class="delete-todo" data-project="${projectIndex}" data-todo="${todo.title}">Delete Todo</button>`;
  todoList.appendChild(todoItem);
};

const renderProjects = () => {
  const projectSelect = document.getElementById('project-select');
  projectSelect.innerHTML = '';

  projects.forEach((project, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = project.name;
    projectSelect.add(option);
  });
};

const saveToLocalStorage = () => {
  localStorage.setItem('projects', JSON.stringify(projects.map(project => project.toJSON())));
};

const loadFromLocalStorage = () => {
  const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];

  projects.length = 0; // Clear existing projects array

  savedProjects.forEach(savedProject => {
    const project = Project.fromJSON(savedProject);
    projects.push(project);
  });

  renderProjects();
};

document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage(); // Load saved data from localStorage when the app is first loaded

  const selectedProjectNameElement = document.getElementById('selected-project-name');

  document.getElementById('todo-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;

    const selectedProjectIndex = document.getElementById('project-select').value;

    const newTodo = new Todo(title, description, dueDate, priority, notes);
    projects[selectedProjectIndex].addTodo(newTodo);

    // Clear the form
    event.target.reset();

    // Render the updated todo list
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    projects[selectedProjectIndex].todos.forEach(todo => renderTodo(todo, selectedProjectIndex));

    // Update the selected project name display
    selectedProjectNameElement.textContent = `Project: ${projects[selectedProjectIndex].name}`;

    saveToLocalStorage(); // Save data to localStorage when a new todo is created
  });

  document.getElementById('create-project-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const projectName = document.getElementById('project-name').value;

    const newProject = new Project(projectName);
    projects.push(newProject);

    renderProjects();

    saveToLocalStorage(); // Save data to localStorage when a new project is created
  });

  document.getElementById('project-select').addEventListener('change', (event) => {
    const selectedProjectIndex = event.target.value;

    // Render the selected project's todos
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    projects[selectedProjectIndex].todos.forEach(todo => renderTodo(todo, selectedProjectIndex));

    // Update the selected project name display
    selectedProjectNameElement.textContent = `Project: ${projects[selectedProjectIndex].name}`;
  });

  document.getElementById('todo-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-todo')) {
      const projectIndex = event.target.dataset.project;
      const todoTitle = event.target.dataset.todo;
      const project = projects[projectIndex];

      project.removeTodoByTitle(todoTitle);

      // Render the updated todo list
      const todoList = document.getElementById('todo-list');
      todoList.innerHTML = '';
      projects[projectIndex].todos.forEach(todo => renderTodo(todo, projectIndex));

      saveToLocalStorage(); // Save data to localStorage when a todo is deleted
    }
  });

  document.getElementById('delete-project').addEventListener('click', () => {
    const selectedProjectIndex = document.getElementById('project-select').value;

    projects.splice(selectedProjectIndex, 1);

    // Re-render projects and reset todo list
    renderProjects();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    // Clear the selected project name display
    selectedProjectNameElement.textContent = '';

    saveToLocalStorage(); // Save data to localStorage when a project is deleted
  });

});
