document.addEventListener("DOMContentLoaded", () => {
  const homeButton = document.getElementById("home-btn");
  const storeButton = document.getElementById("store-btn");
  const projectButton = document.getElementById("project-btn");
  const collapseButton = document.getElementById("collapse-btn");

  const sidebar = document.querySelector(".sidenav");
  const pages = document.querySelectorAll(".page");

  const handleButtonClick = (pageId, buttonid) => {
    pages.forEach((page) => {
      page.classList.remove("active");
    });
    document
      .querySelectorAll(".sidenav-btn")
      .forEach((btn) => btn.classList.remove("active"));
    buttonid.classList.add("active");
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

  document.getElementById("homepage").classList.add("active");
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
