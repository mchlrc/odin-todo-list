// project.js
import { ToDoItem } from "./todo-item.js";
class Project {
  constructor(name = null, toDoItems = [], id = crypto.randomUUID()) {
    if (!name) {
      name = `Project ${id.slice(0, 3)}`;
    }
    this.name = name;
    this.toDoItems = toDoItems;
    this.id = id;
  }

  addToDoItem() {
    const newTodo = new ToDoItem("New ToDo");
    this.toDoItems.push(newTodo);
    return;
  }

  printName() {
    console.log(`Project Name: ${this.name}`);
  }
}

export { Project };
