const allTasks = [
  {
    title: "Web Project",
    subTitle: "Tasks for my small project",
    status: "COMPLETED",
    stared: true,
    createdDate: "march 11, 2022",
  },
  {
    title: "Groceries",
    subTitle: "Get all things food :)",
    status: "PENDING",
    stared: false,
    createdDate: "June 25, 2022",
  },
  {
    title: "Self Development",
    subTitle: "Become competent",
    status: "PENDING",
    stared: true,
    createdDate: "June 29, 2022",
  },
  {
    title: "Books To Read",
    subTitle: "No excuses, Phy Money",
    status: "COMPLETED",
    stared: true,
    createdDate: "July 5, 2022",
  },
];

// function takes in { title, subTitle, createdDate }
const createTaskElement = async (task) => {
  try {
    const components = await getHTMLFromURL(COMPONENTS_URL);
    const taskCardElement = components.querySelector(".task-card");

    const newTaskCardElement = taskCardElement.cloneNode(true);
    newTaskCardElement.querySelector("h3").textContent = task.title;

    const lastChild = newTaskCardElement.lastElementChild;
    lastChild.textContent = task.createdDate;
    lastChild.previousElementSibling.textContent = task.subTitle;

    return newTaskCardElement;
  } catch (err) {
    console.log(err);
  }
};

const displayAllTasksInDOM = async () => {
  try {
    const tasksListDiv = document.querySelector("#tasks-list");

    for (task of allTasks) {
      const newTaskElement = await createTaskElement(task)

      if (!task.stared) {
        const starElement = newTaskElement.querySelector("i");
        newTaskElement.firstElementChild.removeChild(starElement);
      }

      tasksListDiv.insertAdjacentElement("afterbegin", newTaskElement);
    }
  } catch (err) {
    console.log(err);
  }
};
