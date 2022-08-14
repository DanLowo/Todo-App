const createProjectCardElement = ({ title, subTitle, createdDate, cardColor }) => {
  const card = document.createElement("div");
  const cardHeader = document.createElement("header");
  const cardTitle = document.createElement("h3");
  const cardSubTitle = document.createElement("p");
  const cardCreatedDate = document.createElement("p");

  card.className = "project-card";
  cardTitle.className = "project-title";
  cardSubTitle.className = "project-subtitle";
  cardCreatedDate.className = "project-created-date";

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

const createProjectNavBar = () => {
  const navItems = `
  <i class="far fa-arrow-left"></i>
  <div>
    <i class="far fa-star"></i>
    <i class="far fa-trash"></i>
  </div>`;

  const projectNavBar = document.createElement("nav");

  projectNavBar.id = "default-nav";
  projectNavBar.className = "project-nav";
  projectNavBar.insertAdjacentHTML("afterbegin", navItems);

  return projectNavBar;
};

const createProjectPage = ({ title, subTitle, createdDate, cardColor }) => {
  const pageDiv = document.createElement("div");
  const pageTitle = document.createElement("h1");
  const pageSubtitle = document.createElement("h5");
  const pageCreatedDate = document.createElement("p");

  pageDiv.id = "project-page";
  pageTitle.id = "project-title";
  pageSubtitle.id = "project-subtitle";
  pageCreatedDate.id = "project-date";

  pageTitle.textContent = title;
  pageSubtitle.textContent = subTitle;
  pageCreatedDate.textContent = createdDate;

  pageDiv.insertAdjacentElement("beforeend", pageTitle);
  pageDiv.insertAdjacentElement("beforeend", pageSubtitle);
  pageDiv.insertAdjacentElement("beforeend", pageCreatedDate);

  pageDiv.style.backgroundColor = cardColor;

  return pageDiv;
};
