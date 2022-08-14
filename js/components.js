const createTaskCardEl = ({ title, subTitle, createdDate, cardColor }) => {
  const card = document.createElement("div");
  const cardHeader = document.createElement("header");
  const cardTitle = document.createElement("h3");
  const cardSubTitle = document.createElement("p");
  const cardCreatedDate = document.createElement("p");

  card.className = "task-card";
  cardTitle.className = "task-title";
  cardSubTitle.className = "task-subtitle";
  cardCreatedDate.className = "task-created-date";

  cardTitle.textContent = title;
  cardSubTitle.textContent = subTitle;
  cardCreatedDate.textContent = createdDate;

  cardHeader.insertAdjacentElement("afterbegin", cardTitle);
  card.insertAdjacentElement("beforeend", cardHeader);
  card.insertAdjacentElement("beforeend", cardSubTitle);
  card.insertAdjacentElement("beforeend", cardCreatedDate);

  card.style.backgroundColor = cardColor;

  return card;
};

const createTaskNavigationBar = () => {
  const navItems = `
  <i class="far fa-arrow-left"></i>
  <div>
    <i class="far fa-star"></i>
    <i class="far fa-trash"></i>
  </div>`;

  const taskNavigationBar = document.createElement("nav");

  taskNavigationBar.id = "default-nav";
  taskNavigationBar.className = "task-nav";
  taskNavigationBar.insertAdjacentHTML("afterbegin", navItems);

  return taskNavigationBar;
};

const createTaskPage = ({ title, subTitle, createdDate, cardColor }) => {
  const pageDiv = document.createElement("div");
  const pageTitle = document.createElement("h1");
  const pageSubtitle = document.createElement("h5");
  const pageCreatedDate = document.createElement("p");

  pageDiv.id = "task-page";
  pageTitle.id = "task-title";
  pageSubtitle.id = "task-subtitle";
  pageCreatedDate.id = "task-date";

  pageTitle.textContent = title;
  pageSubtitle.textContent = subTitle;
  pageCreatedDate.textContent = createdDate;

  pageDiv.insertAdjacentElement("beforeend", pageTitle);
  pageDiv.insertAdjacentElement("beforeend", pageSubtitle);
  pageDiv.insertAdjacentElement("beforeend", pageCreatedDate);

  pageDiv.style.backgroundColor = cardColor;

  return pageDiv;
};
