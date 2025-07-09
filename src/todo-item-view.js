// todo-item-view.js
class TodoItemView {
  constructor(toDoItem) {
    this.toDoItem = toDoItem;
    this.isEditMode = true;
    this.isFocused = true;
  }

  getTodoItemView() {
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    todoCard.tabIndex = -1;
    // todoCard.addEventListener("click", () => {
    //   const cards = document.querySelectorAll(".todo-card");
    //   console.log(cards);
    //   cards.forEach((card) => {
    //     card.isFocused = false;
    //   });

    //   this.isFocused = true;
    // });

    const todoForm = document.createElement("form");
    todoForm.classList.add("todo-form");
    todoForm.method = "post";
    todoCard.appendChild(todoForm);

    const cardTitle = document.createElement("input");
    cardTitle.classList.add("card-title");
    cardTitle.type = "text";
    cardTitle.value = this.toDoItem.title;
    cardTitle.id = "title";
    cardTitle.name = "card-title";
    cardTitle.autocomplete = "off";
    cardTitle.required = true;

    const editSaveButton = document.createElement("button");
    editSaveButton.textContent = "Save";
    editSaveButton.classList.add("card-edit-save-button");
    editSaveButton.type = "button";
    editSaveButton.id = "edit";
    editSaveButton.name = "card-edit-save-button";
    editSaveButton.addEventListener("click", (e) => {
      this.isEditMode = !this.isEditMode;
      if (this.isEditMode) {
        e.target.textContent = "Save";
      } else {
        e.target.textContent = "Edit";
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("card-delete-button");
    deleteButton.type = "button";
    deleteButton.id = "delete";
    deleteButton.name = "card-delete-button";

    const cardDate = document.createElement("input");
    cardDate.classList.add("card-date");
    cardDate.classList.add("card-text");
    cardDate.type = "text";
    cardDate.value = this.toDoItem.date;
    cardDate.id = "date";
    cardDate.name = "card-date";
    cardDate.autocomplete = "off";
    cardDate.required = true;

    const cardDateLabel = document.createElement("label");
    cardDateLabel.classList.add("card-date");
    cardDateLabel.classList.add("card-label");
    cardDateLabel.htmlFor = "date";
    cardDateLabel.textContent = "Due";

    const cardPriority = document.createElement("input");
    cardPriority.classList.add("card-priority");
    cardPriority.classList.add("card-text");
    cardPriority.type = "text";
    cardPriority.id = "priority";
    cardPriority.name = "card-priority";
    cardPriority.value = this.toDoItem.priority;
    cardPriority.autocomplete = "off";
    cardPriority.required = true;

    const cardPriorityLabel = document.createElement("label");
    cardPriorityLabel.classList.add("card-priority");
    cardPriorityLabel.classList.add("card-label");
    cardPriorityLabel.htmlFor = "priority";
    cardPriorityLabel.textContent = "Priority";
    cardPriority.defaultValue = "low";

    const cardDescription = document.createElement("input");
    cardDescription.classList.add("card-description");
    cardDescription.classList.add("card-text");
    cardDescription.type = "text";
    cardDescription.id = "description";
    cardDescription.name = "card-description";
    cardDescription.value = this.toDoItem.description;
    cardDescription.autocomplete = "off";

    const cardDescriptionLabel = document.createElement("label");
    cardDescriptionLabel.classList.add("card-description");
    cardDescriptionLabel.classList.add("card-label");
    cardDescriptionLabel.htmlFor = "description";
    cardDescriptionLabel.textContent = "Description";

    const cardNotes = document.createElement("input");
    cardNotes.classList.add("card-notes");
    cardNotes.classList.add("card-text");
    cardNotes.type = "text";
    cardNotes.id = "notes";
    cardNotes.name = "card-notes";
    cardNotes.value = this.toDoItem.notes;
    cardNotes.autocomplete = "off";

    const cardNotesLabel = document.createElement("label");
    cardNotesLabel.classList.add("card-notes");
    cardNotesLabel.classList.add("card-label");
    cardNotesLabel.htmlFor = "notes";
    cardNotesLabel.textContent = "Notes";

    todoForm.appendChild(cardTitle);
    todoForm.appendChild(deleteButton);
    todoForm.appendChild(editSaveButton);
    todoForm.appendChild(cardDate);
    todoForm.appendChild(cardDateLabel);
    todoForm.appendChild(cardPriority);
    todoForm.appendChild(cardPriorityLabel);
    todoForm.appendChild(cardDescription);
    todoForm.appendChild(cardDescriptionLabel);
    todoForm.appendChild(cardNotes);
    todoForm.appendChild(cardNotesLabel);

    return todoCard;
  }

  onSave(e) {
    console.log({ e });
  }

  onCancel(e) {
    console.log({ e });
  }

  onDelete(e) {
    console.log({ e });
  }
}

export { TodoItemView };
