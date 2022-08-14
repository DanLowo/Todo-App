const watcher = [];
let previousPage = {};

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

const backToHomeForDesktop = () => {
  const { footer, main } = previousPage;

  const currentMain = document.querySelector("main");
  const section = document.querySelector("section");

  currentMain.removeChild(currentMain.firstElementChild);
  currentMain.insertAdjacentElement("afterbegin", main.firstElementChild);

  section.insertAdjacentElement("beforeend", footer);
};

const backToHomeForMobile = () => {
  const section = document.querySelector("section");
  const main = document.querySelector("main");
  const nav = document.querySelector("nav");

  nav.remove();
  main.removeChild(main.firstElementChild);

  section.insertAdjacentElement("afterbegin", previousPage?.nav);
  section.insertAdjacentElement("beforeend", previousPage?.footer);
  main.insertAdjacentElement("beforeend", previousPage?.main.firstElementChild);

  projectObj.addMultipleToDOM(projectObj.all());
};

const clearDOMForTaskPage = ({ nav, main, footer }) => {
  const DOMElements = {
    nav: nav.cloneNode(true),
    main: main.cloneNode(true),
    footer: footer.cloneNode(true),
  };
  previousPage = { ...DOMElements };

  if (isDeviceTypeMobile()) {
    nav.remove();
    footer.remove();
    main.removeChild(main.firstElementChild);
  } else {
    footer.remove();
    main.removeChild(main.firstElementChild);
  }
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

  const statusProject = projectObj.filterByStatus(navTitle);

  if (document.querySelector("#group-main")) {
    changeSectionTitle(navTitle);
    projectObj.addMultipleToDOM(statusProject);
  } else {
    backToHomeForDesktop();
    changeSectionTitle(navTitle);
    projectObj.addMultipleToDOM(statusProject);
  }
};

const handleProjectNavigation = async (projectId) => {
  const allProjects = projectObj.all();
  const project = allProjects.find((item) => item.id === projectId);

  const section = document.querySelector("section");
  const nav = document.querySelector("nav");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  clearDOMForTaskPage({ nav, main, footer });

  // only add new navigation bar for only mobile screen
  if (isDeviceTypeMobile()) {
    const taskNavigationBar = createProjectNavBar();
    taskNavigationBar.firstElementChild.addEventListener(
      "click",
      backToHomeForMobile
    );
    section.insertAdjacentElement("afterbegin", taskNavigationBar);
  }

  const projectPage = createProjectPage(project);

  main.insertAdjacentElement("afterbegin", projectPage);
};
