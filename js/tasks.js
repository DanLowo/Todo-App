// function takes in { title, subTitle, createdDate }
const createTaskElement = async (taskCardElement, task) => {
  try {
    const newTaskCardElement = taskCardElement.cloneNode(true);
    newTaskCardElement.querySelector("h3").textContent = task.title;

    const cardColor = generateRandomColor()
    newTaskCardElement.style.backgroundColor = cardColor
    
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

      if (!task.stared) {
        const starIconElement = newTaskElement.querySelector("i");
        newTaskElement.firstElementChild.removeChild(starIconElement);
      }

      tasksListDiv.insertAdjacentElement("afterbegin", newTaskElement);
    }

    // Add stared tasks to the element, so that it will be at the top of the list
    for (task of filterStaredTasks(allTasks)) {
      const newTaskElement = await createTaskElement(taskCardElement, task);

      if (!task.stared) {
        const starIconElement = newTaskElement.querySelector("i");
        newTaskElement.firstElementChild.removeChild(starIconElement);
      }

      tasksListDiv.insertAdjacentElement("afterbegin", newTaskElement);
    }
  } catch (err) {
    console.log(err);
  }
};
