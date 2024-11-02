const ul = document.querySelector(".navbar-main-ul");
const burger_menu = document.querySelector(".burger-menu");

burger_menu.addEventListener("click", (event) => {
  ul.classList.toggle("hide-burger-menu");
  event.stopPropagation();
});

window.addEventListener("click", () => {
  ul.classList.add("hide-burger-menu");
});

// sticky navbar
// Select the header and nav elements
const header = document.querySelector("header");
const nav = document.querySelector("nav");

// Function to toggle the sticky class
function toggleStickyNav() {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = toggleStickyNav;

/* scroling function*/
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll("#projectandinterest");

  projects.forEach((project) => {
    project.addEventListener("click", function () {
      // Adjust the offset value based on your layout
      const offset = 100;
      const target = this.getAttribute("href");
      const targetElement = document.querySelector(target);

      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("e-mail").value;
  const message = document.getElementById("message").value;

  // Construct the email body
  const body = `
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Message: ${message}
    `;

  // Log the body to the console (for demonstration purposes)
  console.log(body);

  // Optionally, create a mailto link if you want to open the email client
  const subject = "Contact Form Submission";
  const mailtoLink = `mailto:srinivasmahi2007@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the default email client
  window.location.href = mailtoLink;
});
