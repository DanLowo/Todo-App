const changeFabButtonIcon = (isDialogOpen) => {
  const fabButtonIcon = document.querySelector("#fab i");

  if (isDialogOpen) {
    fabButtonIcon.className = "fal fa-plus";
  } else {
    fabButtonIcon.className = "fal fa-times opened";
  }
};

const openCreateListDialog = () => {
  const dialogBox = document.querySelector("#dialog-box");
  dialogBox.classList.toggle("closed");

  const darkendBroundground = document.querySelector("#darken-background");
  darkendBroundground.classList.toggle("closed");

  changeFabButtonIcon(!dialogBox.classList.contains("closed"));
};
