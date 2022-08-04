// function takes in { title, subTitle, createdDate }
const createTaskElement = async (taskCardElement, task) => {
  try {
    const newTaskCardElement = taskCardElement.cloneNode(true);
    newTaskCardElement.querySelector("h3").textContent = task.title;

    newTaskCardElement.style.backgroundColor = task.cardColor;

    const lastChild = newTaskCardElement.lastElementChild;
    lastChild.textContent = task.createdDate;
    lastChild.previousElementSibling.textContent = task.subTitle;

    return newTaskCardElement;
  } catch (err) {
    console.log(err);
  }
};

const displayTasksInDOM = async (allTasks) => {
  try {
    const tasksListDiv = document.querySelector("#tasks-list");
    tasksListDiv.innerHTML = ""; // clear allItems
    const components = await getHTMLFromURL(COMPONENTS_URL);
    const taskCardElement = components.querySelector(".task-card");

    // Add tasks that are not stared to the element first
    for (task of filterNonStaredTasks(allTasks)) {
      const newTaskElement = await createTaskElement(taskCardElement, task);
      tasksListDiv.insertAdjacentElement("afterbegin", newTaskElement);
    }

    // Add stared tasks to the element, so that it will be at the top of the list
    for (task of filterStaredTasks(allTasks)) {
      const newTaskElement = await createTaskElement(taskCardElement, task);

      const header = newTaskElement.querySelector("header");
      header.insertAdjacentHTML("beforeend", `<i class="fas fa-star"></i>`);

      tasksListDiv.insertAdjacentElement("afterbegin", newTaskElement);
    }
  } catch (err) {
    console.log(err);
  }
};

const addNewListToDom = (listElement) => {
  const numberOfStaredTasks = filterStaredTasks(getAllTasks()).length - 1

  const lastStaredElement = document.querySelectorAll(".task-card")[numberOfStaredTasks];
  lastStaredElement.insertAdjacentElement("afterend", listElement)
};
