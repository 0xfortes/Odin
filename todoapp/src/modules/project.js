// src/modules/project.js
import Todo from './todo'; // Import the Todo class

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodoByTitle(title) {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }

  toJSON() {
    return {
      name: this.name,
      todos: this.todos.map(todo => todo.toJSON())
    };
  }

  static fromJSON(json) {
    const project = new Project(json.name);
    project.todos = json.todos.map(todoJson => Todo.fromJSON(todoJson)); // Use the Todo class here
    return project;
  }
}

export default Project;
