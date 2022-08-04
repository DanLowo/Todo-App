const changeFabButtonIcon = (isDialogOpen) => {
  const fabButtonIcon = document.querySelector("#fab i");

  if (isDialogOpen) {
    fabButtonIcon.className = "fal fa-times opened";
  } else {
    fabButtonIcon.className = "fal fa-plus";
  }
};

const openCreateListDialog = () => {
  const dialogBox = document.querySelector("#dialog-box");
  dialogBox.classList.toggle("closed");

  const darkendBroundground = document.querySelector("#darken-background");
  darkendBroundground.classList.toggle("closed");

  // use nagation because if it doesn't contain closed then it is opened 
  changeFabButtonIcon(!dialogBox.classList.contains("closed"));
};
