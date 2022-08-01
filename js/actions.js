const changeFabButtonIcon = (isDialogOpen) => {
  const fabButtonIcon = document.querySelector("#fab i");

  if(isDialogOpen) {
    fabButtonIcon.className = "fal fa-plus"
  } else {
    fabButtonIcon.className = "fal fa-times opened"
  }
};

const openCreateListDialog = () => {
  const dialogBox = document.querySelector("#dialog-box");

  changeFabButtonIcon(!dialogBox.classList.contains("closed"))
  dialogBox.classList.toggle("closed");
};
