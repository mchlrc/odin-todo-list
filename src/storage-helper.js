// storage-helper.js
import { Project } from "./project.js";
import { ToDoItem } from "./todo-item.js";
class StorageHelper {
  projects;
  constructor(storageKey) {
    if (StorageHelper.instance) {
      return StorageHelper.instance;
    }
    StorageHelper.instance = this;
    this.storageKey = storageKey;

    if (!localStorage.getItem(storageKey)) {
      console.log(`created local storage for ${storageKey}`);
      this.projects = [];
      localStorage.setItem(storageKey, JSON.stringify(this.projects));
    } else {
      console.log(`${storageKey} already exists`);
      this.projects = [];
      const tempProjects = JSON.parse(localStorage.getItem(storageKey));
      tempProjects.forEach((p) => {
        const tempToDoItems = [];
        p.toDoItems.forEach((tdi) => {
          const tempToDo = new ToDoItem(
            tdi.title,
            tdi.date,
            tdi.priority,
            tdi.date,
            tdi.notes,
            tdi.id
          );
          tempToDoItems.push(tempToDo);
        });
        const tempProject = new Project(p.name, tempToDoItems, p.id);
        this.projects.push(tempProject);
      });
    }
  }

  updateStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.projects));
  }

  addProject() {
    const project = new Project();
    project.printName();
    this.projects.push(project);
    this.updateStorage();
    return project;
  }

  deleteProject(project) {
    const index = this.projects.findIndex((proj) => proj.id === project.id);
    this.projects.splice(index);
  }
}

// Export the *instance* of the class
export const storageHelper = new StorageHelper("odin-todo-projects");
