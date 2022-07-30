const watcher = [];

const changeSectionTitle = (title) => {
  const sectionTitleElement = document.querySelector("#section-title");
  sectionTitleElement.textContent = title;
};

/* This function fixes the issue of "active" class sill being on the first list-item when another
   item is clicked, it does not remove "active" because the watcher array is initially empty when the page loads
*/
const removeActiveFromFirstElement = (siblingElement) => {
  const firstElement = siblingElement.parentElement.firstElementChild
  firstElement.classList.remove("active")
}

const handleNavigationClick = (element) => {
  removeActiveFromFirstElement(element)
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
};
