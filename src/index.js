// index.js
import "./styles.css";
import { Project } from "./project.js";
import { ProjectView } from "./project-view.js";

const projects = [];
let selectedProject = null;

const newProjectButton = document.querySelector("#new-project-button");
newProjectButton.addEventListener("click", () => {
  console.log("Clicked New Project Button!");
  const project = new Project();
  project.printName();
  projects.push(project);

  const projectView = new ProjectView(project);
  const listItem = projectView.createProjectListItem();
  listItem.addEventListener("click", () => {
    const projectViewArea = document.querySelector(".project-view-area");
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
  console.log(listItem);

  if (selectedProject === null) {
    const projectViewArea = document.querySelector(".project-view-area");
    const newProjView = projectView.createProjectView();
    projectViewArea.appendChild(newProjView);
    selectedProject = project;
  }

  const projectsListView = document.querySelector(".project-list");
  projectsListView.appendChild(listItem);
});

const editProjectsButton = document.querySelector("#edit-projects-button");
editProjectsButton.addEventListener("click", () => {
  console.log("Clicked Edit Projects Button!");
});

const printProjectsButton = document.querySelector("#print-projects-button");
printProjectsButton.addEventListener("click", () => {
  console.group("printProjectsButton");
  console.log("Clicked Print Projects Button!");
  for (const project of projects) {
    project.printName();
  }
  console.groupEnd();
});
