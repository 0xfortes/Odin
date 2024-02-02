// src/modules/todo.js
import { format } from 'date-fns';

class Todo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = false;
  }

  getFormattedDueDate() {
    return format(new Date(this.dueDate), 'MM/dd/yyyy');
  }

  toJSON() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      notes: this.notes,
      completed: this.completed
    };
  }

  static fromJSON(json) {
    const todo = new Todo(
      json.title,
      json.description,
      json.dueDate,
      json.priority,
      json.notes,
    );
    todo.completed = json.completed;
    return todo;
  }
}

export default Todo;
