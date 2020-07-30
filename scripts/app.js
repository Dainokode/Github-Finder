// Working with the DOM

// Instantiate getUser class
const gitHubClass = new GitHub();

// Instantiate ui class
const UI = new ui();
// console.log(UI);

// select search input
const searchUser = document.querySelector("#search");
// console.log(searchUser);

// listen for keyup on searchUser
searchUser.addEventListener("keyup", (e) => {
  // get searchUser value
  const searchValue = e.target.value;
  // check if searchValue is empty
  if (searchValue !== "") {
    gitHubClass.getUser(searchValue).then((data) => {
      if (data.profile.message === "Not Found") {
        // show error alert
        UI.showAlert("User not found", "alert-error");
      } else {
        // show profile
        UI.showProfile(data.profile);
        UI.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    UI.clearProfile();
  }
});
