// project.js
import { TodoItem } from "./todo-item.js";
class Project {
  constructor(name = null, todoItems = []) {
    const tempId = crypto.randomUUID();
    if (!name) {
      name = `New Project ${tempId.slice(0, 3)}`;
    }
    this.name = name;
    this.todoItems = todoItems;
    this.id = tempId;
  }

  addToDoItem() {
    const newTodo = new TodoItem("New ToDo");
    this.todoItems.push(newTodo);
  }

  printName() {
    console.log(`Project Name: ${this.name}`);
  }
}

export { Project };
