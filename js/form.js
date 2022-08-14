const createProject = async (form, e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const subTitle = e.target[1].value;

  const listDetails = {
    title,
    subTitle,
    stared: false,
    id: generateUniqueKey(),
    status: tasksStatus.pending,
    cardColor: generateRandomColor(),
    createdDate: new Date().toDateString(),
  };

  const newList = createTaskCardEl(listDetails);
  newList.addEventListener(
    "click",
    handleListNavigation.bind(this, listDetails.id)
  );
  addNewListToDOM(newList);

  const allLists = [...getAllTasks()];
  allLists.push(listDetails);
  saveTasks(allLists);

  form.reset();
  setCreateListDialog();
};
