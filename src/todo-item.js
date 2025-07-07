// todo-item.js
class TodoItem {
  constructor(
    title = "",
    date = "",
    priority = "",
    description = "",
    notes = ""
  ) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.notes = notes;
  }
}

export { TodoItem };
