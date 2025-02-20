document.addEventListener("DOMContentLoaded", () => {
  const homeButton = document.getElementById("home-btn");
  const storeButton = document.getElementById("store-btn");
  const projectButton = document.getElementById("project-btn");
  const collapseButton = document.getElementById("collapse-btn");

  const sidebar = document.querySelector(".sidenav");
  const pages = document.querySelectorAll(".page");

  const handleButtonClick = (pageId, buttonid) => {
    pages.forEach((page) => {
      page.innerHTML = "";
      page.classList.remove("active");
    });
    document
      .querySelectorAll(".sidenav-btn")
      .forEach((btn) => btn.classList.remove("active"));
    buttonid.classList.add("active");
    document.getElementById(pageId).classList.add("active");
    debugger;
    const newContent = document.createElement('div');
    newContent.classList.add('content-page'); 
    newContent.id = pageId;
    switch (pageId) {
      case "homepage":
        newContent.innerHTML = `
          <form id="user-form">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required /><br />

            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required /><br />

            <label for="birth-date">Birth Date</label>
            <input type="date" id="birth-date" name="birth-date" required /><br />

            <label for="profession">Profession</label>
            <select id="profession" name="profession" required>
              <option value="">Select Profession</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select><br />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required /><br />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required /><br />

            <label for="remember-me">
              Remember Me
              <input type="checkbox" id="remember-me" name="remember-me" />
            </label><br />

            <button type="submit">Submit</button>
          </form>
        `;
        break;
      case "storepage":
        newContent.innerHTML =
          "<p>Here is the store page content.</p>";
        break;
      case "projectpage":
        newContent.innerHTML = `
          <h2>Project List</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project 1</td>
                <td>Detailed description of project 1.</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>Project 2</td>
                <td>Detailed description of project 2.</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Project 3</td>
                <td>Detailed description of project 3.</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        `;
        break;
      default:
        newContent.innerHTML = "Page Not Found</h1>";
    }
    document.getElementById(pageId).appendChild(newContent);
    document.getElementById(pageId).classList.add("active"); 
  };

  homeButton.addEventListener("click", () => {
    handleButtonClick("homepage", homeButton);
  });

  storeButton.addEventListener("click", () => {
    handleButtonClick("storepage", storeButton);
  });

  projectButton.addEventListener("click", () => {
    handleButtonClick("projectpage", projectButton);
  });

  collapseButton.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  //document.getElementById("homepage").classList.add("active");
  const form = document.getElementById("user-form");
  const birthDateInput = document.getElementById("birth-date");
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  birthDateInput.value = formattedDate;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      birthDate: document.getElementById("birth-date").value,
      profession: document.getElementById("profession").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      rememberMe: document.getElementById("remember-me").checked,
    };

    console.log(formData);
    form.reset();
    birthDateInput.value = formattedDate;
  });
});
