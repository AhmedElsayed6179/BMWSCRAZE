// This file is linked to the HTML page and contains the page’s JavaScript code
const rightAboutUs = document.querySelector(".right_about_us");
const elementInView = (el, offset = 200) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};
const displayScrollElement = (element) => {
  element.classList.add("active");
};

const handleScrollAnimation = () => {
  if (elementInView(rightAboutUs, 100)) {
    displayScrollElement(rightAboutUs);
  }

  const img = document.querySelector(".bmw_gif img");
  if (img) {
    const rect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 100) {
      img.classList.add("show");
    }
  }
};

window.addEventListener("scroll", handleScrollAnimation);

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const urlMenu = document.querySelector(".url");

  mobileMenuBtn.addEventListener("click", () => {
    urlMenu.classList.toggle("active");
  });
});

