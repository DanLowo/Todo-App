const displayTasksInDOM = async (allTasks) => {
  const tasksListDiv = document.querySelector("#tasks-list");
  tasksListDiv.innerHTML = "";

  // Add tasks that are not stared to the element first
  for (task of filterNonStaredTasks(allTasks)) {
    const newTaskElement = createTaskCardEl(task);
    newTaskElement.addEventListener("click", handleListNavigation.bind(this, task.id))

    tasksListDiv.insertAdjacentElement("afterbegin", newTaskElement);
  }

  // Add stared tasks to the element, so that it will be at the top of the list
  for (task of filterStaredTasks(allTasks)) {
    const newTaskElement = createTaskCardEl(task);
    newTaskElement.addEventListener("click", handleListNavigation.bind(this, task.id))

    const header = newTaskElement.querySelector("header");
    header.insertAdjacentHTML("beforeend", `<i class="fas fa-star"></i>`);

    tasksListDiv.insertAdjacentElement("afterbegin", newTaskElement);
  }
};

const addNewListToDOM = (listElement) => {
  const numberOfStaredTasks = filterStaredTasks(getAllTasks()).length

  if(numberOfStaredTasks === 0) {
    const tasksListDiv = document.querySelector("#tasks-list");
    tasksListDiv.insertAdjacentElement("afterbegin", listElement);
    return;
  }

  const lastStaredElement = document.querySelectorAll(".task-card")[numberOfStaredTasks - 1];
  lastStaredElement.insertAdjacentElement("afterend", listElement)
};
