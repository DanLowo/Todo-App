const createProject = async (form, e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const subTitle = e.target[1].value;

  const projectDetails = {
    title,
    subTitle,
    stared: false,
    id: generateUniqueKey(),
    status: projectsStatus.pending,
    cardColor: generateRandomColor(),
    createdDate: new Date().toDateString(),
  };

  const projectCardElement = createProjectCardElement(projectDetails);

  projectCardElement.addEventListener(
    "click",
    handleProjectNavigation.bind(this, projectDetails.id)
  );

  projectObj.addToDOM(projectCardElement);

  const allProjects = projectObj.all();
  allProjects.push(projectDetails);

  projectObj.save(allProjects);

  form.reset();
  handleCreateProjectDialog();
};
