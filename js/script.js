const menuOpen = document.querySelector(".btn-mobile-nav");
menuOpen.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav-open");
});

const allLink = document.querySelectorAll("a");
allLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    // const menuClass = link.getAttribute("class");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  
    if (link.classList.contains("main-nav-link")) {
      document.querySelector(".header").classList.toggle("nav-open");
    }
  });
});
