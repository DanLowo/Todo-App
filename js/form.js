const createList = async (form, e) => {
  e.preventDefault();
  try {
    const title = e.target[0].value;
    const subTitle = e.target[1].value;

    const listDetails = {
      title,
      subTitle,
      stared: false,
      status: tasksStatus.pending,
      cardColor: generateRandomColor(),
      createdDate: new Date().toDateString(),
    };

    const components = await getHTMLFromURL(COMPONENTS_URL);
    const taskCardElement = components.querySelector(".task-card");

    const newList = await createTaskElement(taskCardElement, listDetails);
    addNewListToDom(newList);

    const allLists = [...getAllTasks()]
    allLists.push(listDetails)
    saveTasks(allLists)

    form.reset()
    setCreateListDialog()
  } catch (err) {
    console.log(err);
  }
};
