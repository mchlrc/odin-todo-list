// index.js
import "./styles.css";
import { ProjectView } from "./project-view.js";
import { storageHelper } from "./storage-helper.js";

const projectViewArea = document.querySelector(".project-view-area");
const projectsListView = document.querySelector(".project-list");
if (storageHelper.projects.length > 0) {
  storageHelper.projects.forEach((proj) => {
    const listItem = createListItem(proj);
    projectsListView.appendChild(listItem);
  });
}

const newProjectButton = document.querySelector("#new-project-button");
newProjectButton.addEventListener("click", () => {
  const project = storageHelper.addProject();
  const projectView = new ProjectView(project);
  const listItem = projectView.createProjectListItem();
  listItem.addEventListener("click", () => {
    console.log("clicked");
    const projectViews = document.querySelectorAll(".project-view");
    if (projectViews.length > 0) {
      projectViews.forEach((pv) => {
        pv.remove();
      });
    }
    const newProjView = projectView.createProjectView();
    projectViewArea.appendChild(newProjView);
  });
  projectsListView.appendChild(listItem);
});

const editProjectsButton = document.querySelector("#edit-projects-button");
editProjectsButton.addEventListener("click", () => {
  console.log("Clicked Edit Projects Button!");
});

function createListItem(project) {
  const projectView = new ProjectView(project);
  const listItem = projectView.createProjectListItem();
  listItem.addEventListener("click", () => {
    const projectViews = document.querySelectorAll(".project-view");
    if (projectViews.length > 0) {
      projectViews.forEach((pv) => {
        pv.remove();
      });
    }
    const newProjView = projectView.createProjectView();
    projectViewArea.appendChild(newProjView);
  });
  return listItem;
}
