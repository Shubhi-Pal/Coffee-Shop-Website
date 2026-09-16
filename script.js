const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

const navLinks = document.querySelectorAll(".nav-link");

// Open mobile menu

menuOpenButton.addEventListener("click", () => {
document.body.classList.toggle("show-mobile-menu");
});

// Close mobile menu

menuCloseButton.addEventListener("click", () => {
document.body.classList.remove("show-mobile-menu");
});

// Close menu when a navigation link is clicked

navLinks.forEach((link) => {

```
link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});
```

});

// Contact form

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

```
event.preventDefault();

alert("Thank you! Your message has been submitted.");

contactForm.reset();
```

});
