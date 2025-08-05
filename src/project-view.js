// project-view.js
import { Project } from "./project.js";
import { TodoItem } from "./todo-item.js";
import { ToDoItemView } from "./todo-item-view.js";
import { storageHelper } from "./storage-helper.js";

class ProjectView {
  constructor(project) {
    this.project = project;
  }

  createProjectView() {
    const projectPage = document.createElement("div");
    projectPage.classList.add("project-view");

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = this.project.name;
    projectPage.appendChild(projectTitle);

    const todoCardArea = document.createElement("div");
    todoCardArea.classList.add("todo-card-area");
    projectPage.appendChild(todoCardArea);

    const newTodoButton = document.createElement("button");
    newTodoButton.textContent = "New Todo Item";
    newTodoButton.type = "button";
    newTodoButton.classList.add("new-todo-card-button");
    newTodoButton.addEventListener("click", () => {
      this.project.addToDoItem();
      this.displayTodoItems(todoCardArea);
      storageHelper.updateStorage();
    });
    projectPage.appendChild(newTodoButton);
    this.displayTodoItems(todoCardArea);

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.textContent = "delete";
    deleteProjectButton.type = "button";
    deleteProjectButton.classList.add("new-todo-card-button");
    deleteProjectButton.addEventListener("click", (e) => {
      // TBD Add project deletion functionality
      console.log("Add project deletion functionality");
      storageHelper.updateStorage();
    });
    projectPage.appendChild(deleteProjectButton);

    // add code here at create cards
    return projectPage;
  }

  displayTodoItems(todoCardArea) {
    const oldTodoViews = document.querySelectorAll(".todo-card");
    if (oldTodoViews.length > 0) {
      oldTodoViews.forEach((tdv) => {
        tdv.remove();
      });
    }

    for (const todo of this.project.toDoItems) {
      const todoItemView = new ToDoItemView(
        todo,
        this.project,
        false,
        this.updateStorage
      );
      const toDoView = todoItemView.getTodoItemView();
      todoCardArea.appendChild(toDoView);
    }
  }

  createProjectListItem() {
    const element = document.createElement("li");
    element.textContent = this.project.name;
    element.classList.add("project-name");
    return element;
  }
}

export { ProjectView };
