loadTemplate()
  .then(() => {
    // Display all tasks only after the template has loaded
    displayTasksInDOM(getAllTasks())
      .then()
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
