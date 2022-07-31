// Default Values
const tasksStatus = {
  all: "ALL",
  pending: "PENDING",
  deleted: "DELETED",
  completed: "COMPLETED",
};

const HOST_URL = "http://127.0.0.1:5500";
const DESKTOP_TEMPLATE_URL = HOST_URL.concat(
  "/html/template/desktop-template.html"
);
const MOBILE_TEMPLATE_URL = HOST_URL.concat(
  "/html/template/mobile-template.html"
);
const COMPONENTS_URL = HOST_URL.concat("/html/components.html");

// Send a get request to an html file, then parse the contents to become an HTML DOM Element / Node
const getHTMLFromURL = async (url) => {
  try {
    const data = await fetch(url);
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(await data.text(), "text/html");

    return parsedHTML;
  } catch (err) {
    console.log(err);
  }
};

const isDeviceTypeMobile = () => {
  const size = window.innerWidth;
  if (size <= 600) {
    return true;
  }
  return false;
};

const getAllTasks = () => {
  return JSON.parse(localStorage.getItem("allTasks"));
};

const generateRandomColor = () => {
  const COLORS = [
    "rgb(169 177 207)",
    "rgba(207, 125, 108, 0.856)",
    "rgb(91 9 96 / 38%)",
    "rgb(143, 37, 12, 0.514)",
    "rgb(16, 0, 7, 0.414)",
    "rgb(204, 51, 99, 0.514)",
    "rgb(33, 104, 105, 0.514)",
    "rgb(141, 106, 159, 0.514)",
    "rgba(28, 49, 68, 0.466)",
  ];
  
  const random = Math.round(Math.random() * 10);

  return COLORS[random];
};

const filterTaskByStatus = (allTasks, type) => {
  if (type === tasksStatus.all) {
    return allTasks;
  }

  if(type === tasksStatus.deleted) {
    return []
  }

  return (filterdTasks = allTasks.filter((task) => task?.status === type));
};

const filterStaredTasks = (allTasks) => {
  return (staredItems = allTasks.filter((task) => task?.stared));
};

const filterNonStaredTasks = (allTasks) => {
  return (staredItems = allTasks.filter((task) => !task?.stared));
};
