// todo-item.js
class ToDoItem {
  constructor(
    title = "",
    date = "",
    priority = "",
    description = "",
    notes = "",
    id = crypto.randomUUID()
  ) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.notes = notes;
    this.id = id;
  }
}

export { ToDoItem };
