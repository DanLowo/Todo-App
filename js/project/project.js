function projectClass() {
  this.save = saveProjectss;
  this.all = getAllProjectss;
  this.addToDOM = addProjectToDOMs;
  this.stared = filterStaredProjectss;
  this.notStared = filterNonStaredProjectss;
  this.filterByStatus = filterProjectByStatuss;
  this.addMultipleToDOM = displayProjectsInDOMs;
}

const getAllProjectss = () => {
  return JSON.parse(localStorage.getItem("allProjects")) || [];
};

const saveProjectss = (allProjects) => {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
};

const filterProjectByStatuss = (type) => {
  const allProjects = getAllProjectss();
  if (type === projectsStatus.all) {
    return allProjects;
  }

  if (type === projectsStatus.deleted) {
    return [];
  }

  return allProjects.filter((project) => project?.status === type);
};

const filterStaredProjectss = (allProjects) => {
  return allProjects.filter((project) => project?.stared);
};

const filterNonStaredProjectss = (allProjects) => {
  return allProjects.filter((project) => !project?.stared);
};

const displayProjectsInDOMs = async (projects) => {
  const projectListDiv = document.querySelector("#projects-list");
  projectListDiv.innerHTML = "";

  // Add projects that are not stared to the element first
  for (project of filterNonStaredProjectss(projects)) {
    const projectCardElement = createProjectCardElement(project);
    projectCardElement.addEventListener(
      "click",
      handleProjectNavigation.bind(this, project.id)
    );

    projectListDiv.insertAdjacentElement("afterbegin", projectCardElement);
  }

  // Add stared projects to the element, so that it will be at the top of the list
  for (project of filterStaredProjectss(projects)) {
    const projectCardElement = createProjectCardElement(project);
    projectCardElement.addEventListener(
      "click",
      handleProjectNavigation.bind(this, project.id)
    );

    const header = projectCardElement.querySelector("header");
    header.insertAdjacentHTML("beforeend", `<i class="fas fa-star"></i>`);

    projectListDiv.insertAdjacentElement("afterbegin", projectCardElement);
  }
};

const addProjectToDOMs = (projectCardElement) => {
  const numberOfStaredprojects = filterStaredProjectss(
    getAllProjectss()
  ).length;

  if (numberOfStaredprojects === 0) {
    const projectListDiv = document.querySelector("#projects-list");
    projectListDiv.insertAdjacentElement("afterbegin", projectCardElement);
    return;
  }

  const lastStaredElement =
    document.querySelectorAll(".project-card")[numberOfStaredprojects - 1];
  lastStaredElement.insertAdjacentElement("afterend", projectCardElement);
};
