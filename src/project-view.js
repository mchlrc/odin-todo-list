import { TodoItem } from "./todo-item.js";
import { TodoItemView } from "./todo-item-view.js";
class ProjectView {
  constructor(project) {
    this.project = project;
  }

  createProjectView() {
    console.log("createProjectPage()");
    const projectPage = document.createElement("div");
    projectPage.classList.add("project-view");

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = this.project.name;
    projectPage.appendChild(projectTitle);

    const todoCardArea = document.createElement("div");
    todoCardArea.classList.add("todo-card-area");
    projectPage.appendChild(todoCardArea);

    const newTodoButton = document.createElement("div");
    newTodoButton.textContent = "New Todo Item";
    newTodoButton.classList.add("new-todo-card-button");
    newTodoButton.addEventListener("click", () => {
      const newTodo = new TodoItem();
      this.project.todoItems.push(newTodo);
      this.displayTodoItems(todoCardArea);
    });
    projectPage.appendChild(newTodoButton);
    this.displayTodoItems(todoCardArea);

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

    for (const todo of this.project.todoItems) {
      const todoItemView = new TodoItemView(todo);
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
