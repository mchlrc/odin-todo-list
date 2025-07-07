// todo-item-view.js
class TodoItemView {
  constructor(toDoItem) {
    this.toDoItem = toDoItem;
  }

  getTodoItemView() {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = this.toDoItem.title;

    const cardDate = document.createElement("div");
    cardDate.classList.add("card-date");
    cardDate.classList.add("card-text");
    cardDate.textContent = this.toDoItem.date;

    const cardDateLabel = document.createElement("div");
    cardDateLabel.classList.add("card-date");
    cardDateLabel.classList.add("card-label");
    cardDateLabel.textContent = "Due";

    const cardPriority = document.createElement("div");
    cardPriority.classList.add("card-priority");
    cardPriority.classList.add("card-text");
    cardPriority.textContent = this.toDoItem.priority;

    const cardPriorityLabel = document.createElement("div");
    cardPriorityLabel.classList.add("card-priority");
    cardPriorityLabel.classList.add("card-label");
    cardPriorityLabel.textContent = "Priority";

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    cardDescription.classList.add("card-text");
    cardDescription.textContent = this.toDoItem.description;

    const cardDescriptionLabel = document.createElement("div");
    cardDescriptionLabel.classList.add("card-description");
    cardDescriptionLabel.classList.add("card-label");
    cardDescriptionLabel.textContent = "Description";

    const cardNotes = document.createElement("div");
    cardNotes.classList.add("card-notes");
    cardNotes.classList.add("card-text");
    cardNotes.textContent = this.toDoItem.notes;

    const cardNotesLabel = document.createElement("div");
    cardNotesLabel.classList.add("card-notes");
    cardNotesLabel.classList.add("card-label");
    cardNotesLabel.textContent = "Notes";

    todoCard.appendChild(cardTitle);
    todoCard.appendChild(cardDate);
    todoCard.appendChild(cardDateLabel);
    todoCard.appendChild(cardPriority);
    todoCard.appendChild(cardPriorityLabel);
    todoCard.appendChild(cardDescription);
    todoCard.appendChild(cardDescriptionLabel);
    todoCard.appendChild(cardNotes);
    todoCard.appendChild(cardNotesLabel);

    return todoCard;
  }
}

export { TodoItemView };
