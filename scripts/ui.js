// create a new class to display github user profile

class ui {
  constructor() {
    this.profile = document.querySelector(".profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
     <div class="profile-card">
      <div class="image-content">
       <img src="${user.avatar_url}" />
       <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
      </div>
      <div class="text-content">
       <span>Public Repos: ${user.public_repos}</span>
       <span>Public Gists: ${user.public_gists}</span>
       <span>Followers: ${user.followers}</span>
       <span>Following: ${user.following}</span>
       <ul>
        <li>Company: ${user.company}</li>
        <li>Website/Blog: ${user.blog}</li>
        <li>Location: ${user.location}</li>
        <li>Member Since: ${user.created_at}</li>
       </ul>
       <h3>Latest Repos</h3>
       <div id="repos"></div>
      </div>
     </div>
   `;
  }

  // showRepo method
  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
        <div class="repos-div">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          <span>Stars: ${repo.stargazers_count}</span>
          <span>Watchers: ${repo.watchers_count}</span>
          <span>Forks: ${repo.forms_count}</span>
        </div>
      `;
    });

    // output repos
    document.querySelector("#repos").innerHTML = output;
  }

  // showAlert method
  showAlert(message, className) {
    // remove alerts
    this.clearAlerts();
    // create div
    const div = document.createElement("div");
    // add class dinamically
    div.classList = className;
    // create text node dinamically
    div.appendChild(document.createTextNode(message));
    // select search input
    const search = document.querySelector("#search");
    // insert before
    search.parentElement.insertBefore(div, search);
    // remove alert after 3 seconds
    setTimeout(() => {
      div.remove();
    }, 3000);
  }

  // clearAlerts method
  clearAlerts() {
    const currentAlert = document.querySelector(".alert-error");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clearProfile method
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
