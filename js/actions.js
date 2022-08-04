const isShowFabButtonIcon = (isDialogOpen) => {
  const fabButtonIcon = document.querySelector("#fab i");

  if (isDialogOpen) {
    fabButtonIcon.className = "fal fa-times opened";
  } else {
    fabButtonIcon.className = "fal fa-plus";
  }
};

const openCreateListDialog = (dialogBox) => {
  dialogBox.classList.remove("closed");

  const darkendBroundground = document.querySelector("#darken-background");
  darkendBroundground.classList.remove("closed");

  isShowFabButtonIcon(true);
};

const closeCreateListDialog = (dialogBox) => {
  dialogBox.classList.add("closed");

  const darkendBroundground = document.querySelector("#darken-background");
  darkendBroundground.classList.add("closed");

  isShowFabButtonIcon(false);
}

const setCreateListDialog = () => {
  const dialogBox = document.querySelector("#dialog-box");

  if(dialogBox.classList.contains("closed")) {
    openCreateListDialog(dialogBox)
    return;
  }

  closeCreateListDialog(dialogBox)
}