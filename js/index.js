let projectObj = new projectClass();

loadTemplate()
  .then(() => {
    // Display all tasks only after the template has loaded
    // new projectClass().addMultipleToDOM(project.all())
    // projectObj = new projectClass()
    projectObj.addMultipleToDOM(projectObj.all())
  })
  .catch((err) => console.log(err));