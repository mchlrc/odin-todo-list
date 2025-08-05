// todo-item-view.js
import { Project } from "./project.js";
import { ToDoItem } from "./todo-item.js";
import { storageHelper } from "./storage-helper.js";

class ToDoItemView {
  constructor(toDoItem, project, isEditMode) {
    this.toDoItem = toDoItem;
    this.project = project;
    this.isEditMode = isEditMode;
  }

  getTodoItemView() {
    const todoCard = document.createElement("div");
    const todoForm = document.createElement("form");
    const editSaveButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const cardTitle = document.createElement("input");
    const cardDate = document.createElement("input");
    const cardDescription = document.createElement("input");
    const cardPriority = document.createElement("input");
    const cardNotes = document.createElement("input");
    const cardDateLabel = document.createElement("label");
    const cardPriorityLabel = document.createElement("label");
    const cardDescriptionLabel = document.createElement("label");
    const cardNotesLabel = document.createElement("label");

    todoCard.classList.add("todo-card");
    todoCard.tabIndex = -1;

    todoForm.classList.add("todo-form");
    todoForm.method = "post";
    todoCard.appendChild(todoForm);

    cardTitle.classList.add("card-title");
    cardTitle.type = "text";
    cardTitle.value = this.toDoItem.title;
    cardTitle.id = "title";
    cardTitle.name = "card-title";
    cardTitle.autocomplete = "off";
    cardTitle.required = true;
    cardTitle.readOnly = true;

    editSaveButton.textContent = "Edit";
    editSaveButton.classList.add("card-edit-save-button");
    editSaveButton.type = "button";
    editSaveButton.id = "edit";
    editSaveButton.name = "card-edit-save-button";
    editSaveButton.addEventListener("click", (e) => {
      this.isEditMode = !this.isEditMode;
      if (this.isEditMode) {
        e.target.textContent = "Save";
        cardTitle.readOnly = false;
        cardDate.readOnly = false;
        cardDescription.readOnly = false;
        cardPriority.readOnly = false;
        cardNotes.readOnly = false;
      } else {
        e.target.textContent = "Edit";
        cardTitle.readOnly = true;
        cardDate.readOnly = true;
        cardDescription.readOnly = true;
        cardPriority.readOnly = true;
        cardNotes.readOnly = true;
        this.toDoItem.title = cardTitle.value;
        this.toDoItem.date = cardDate.value;
        this.toDoItem.description = cardDescription.value;
        this.toDoItem.priority = cardPriority.value;
        this.toDoItem.notes = cardNotes.value;
        storageHelper.updateStorage();
      }
    });

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("card-delete-button");
    deleteButton.type = "button";
    deleteButton.id = "delete";
    deleteButton.name = "card-delete-button";
    deleteButton.addEventListener("click", (e) => {
      console.log(`Deleting ${this.toDoItem.title} from ${this.project.name}`);
      console.log(this.project.toDoItems);
      const index = this.project.toDoItems.findIndex(
        (tdi) => tdi.id === this.toDoItem.id
      );
      console.log(
        `Deleting todo at index ${index} in project ${this.project.name}`
      );
      this.project.toDoItems.splice(index);
      storageHelper.updateStorage();
      e.target.parentNode.parentNode.remove();
    });

    cardDate.classList.add("card-date");
    cardDate.classList.add("card-text");
    cardDate.type = "text";
    cardDate.value = this.toDoItem.date;
    cardDate.id = "date";
    cardDate.name = "card-date";
    cardDate.autocomplete = "off";
    cardDate.required = true;
    cardDate.readOnly = true;

    cardDateLabel.classList.add("card-date");
    cardDateLabel.classList.add("card-label");
    cardDateLabel.htmlFor = "date";
    cardDateLabel.textContent = "Due";

    cardPriority.classList.add("card-priority");
    cardPriority.classList.add("card-text");
    cardPriority.type = "text";
    cardPriority.id = "priority";
    cardPriority.name = "card-priority";
    cardPriority.value = this.toDoItem.priority;
    cardPriority.autocomplete = "off";
    cardPriority.required = true;
    cardPriority.readOnly = true;

    cardPriorityLabel.classList.add("card-priority");
    cardPriorityLabel.classList.add("card-label");
    cardPriorityLabel.htmlFor = "priority";
    cardPriorityLabel.textContent = "Priority";
    cardPriority.defaultValue = "low";

    cardDescription.classList.add("card-description");
    cardDescription.classList.add("card-text");
    cardDescription.type = "text";
    cardDescription.id = "description";
    cardDescription.name = "card-description";
    cardDescription.value = this.toDoItem.description;
    cardDescription.autocomplete = "off";
    cardDescription.readOnly = true;

    cardDescriptionLabel.classList.add("card-description");
    cardDescriptionLabel.classList.add("card-label");
    cardDescriptionLabel.htmlFor = "description";
    cardDescriptionLabel.textContent = "Description";

    cardNotes.classList.add("card-notes");
    cardNotes.classList.add("card-text");
    cardNotes.type = "text";
    cardNotes.id = "notes";
    cardNotes.name = "card-notes";
    cardNotes.value = this.toDoItem.notes;
    cardNotes.autocomplete = "off";
    cardNotes.readOnly = true;

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

  // onEdit(e) {
  //   console.log({ e });
  //   e.parentNode.cardTitle.readOnly = false;
  // }
  // onSave(e) {
  //   console.log({ e });
  // }

  // onCancel(e) {
  //   console.log({ e });
  // }

  // onDelete(e) {
  //   console.log({ e });
  // }
}

export { ToDoItemView };
