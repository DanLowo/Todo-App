const watcher = [];
let previousPage = {}

const changeSectionTitle = (title) => {
  const sectionTitleElement = document.querySelector("#section-title");
  sectionTitleElement.textContent = title;
};

/* This function fixes the issue of "active" class sill being on the first list-item when another
   item is clicked, it does not remove "active" because the watcher array is initially empty when the page loads
*/
const removeActiveFromFirstElement = (siblingElement) => {
  const firstElement = siblingElement.parentElement.firstElementChild;
  firstElement.classList.remove("active");
};

const handleNavigationClick = (element) => {
  removeActiveFromFirstElement(element);
  const navTitle = element.lastChild.textContent.trim();

  /* if an item is already selected (i.e watcher.length > 0): remove "active" class from the previously
     slected element, then add it to the clicked element. Esle add it to the clicked element.
  */
  if (watcher.length === 0) {
    element.classList.add("active");
    watcher.push(element);
  } else {
    const previousActiveElement = watcher[0];
    previousActiveElement.classList.remove("active");
    watcher.pop();

    element.classList.add("active");
    watcher.push(element);
  }

  changeSectionTitle(navTitle);
  const statusTasks = filterTaskByStatus(getAllTasks(), navTitle);
  displayTasksInDOM(statusTasks);
};

const clearDOMForTaskPage = ({ nav, main, footer }) => {
  const DOMElements = {
    nav: nav.cloneNode(true),
    main: main.cloneNode(true),
    footer: footer.cloneNode(true)
  }
  previousPage = {...DOMElements}

  nav.remove()
  footer.remove()
  main.removeChild(main.firstElementChild)
}

const handleListNavigation = async (listId) => {
  const allTasks = [...getAllTasks()]
  const list = allTasks.find(item => item.id === listId)

  const section = document.querySelector("section")
  const nav = document.querySelector("nav")
  const main = document.querySelector("main")
  const footer = document.querySelector("footer")

  clearDOMForTaskPage({ nav, main, footer })

  const taskNavigationBar = createTaskNavigationBar()
  taskNavigationBar.firstElementChild.addEventListener("click", backToHome)
  section.insertAdjacentElement("afterbegin", taskNavigationBar)
  
  const taskPage = createTaskPage(list)

  main.insertAdjacentElement("afterbegin", taskPage)
}

const backToHome = () => {
  const section = document.querySelector("section")
  const main = document.querySelector("main")
  const nav = document.querySelector("nav")

  nav.remove()
  main.removeChild(main.firstElementChild)

  section.insertAdjacentElement("afterbegin", previousPage?.nav)
  section.insertAdjacentElement("beforeend", previousPage?.footer)
  main.insertAdjacentElement("beforeend", previousPage?.main.firstElementChild)

  displayTasksInDOM(getAllTasks())
}