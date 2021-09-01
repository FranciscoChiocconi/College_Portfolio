const menuBtn = document.querySelector(".nav");
const burgerbtn = document.querySelector(".menu-btn");
const cover = document.querySelector(".cover");
const sections = document.querySelectorAll("section");
const navEl = document.getElementsByClassName(".main_nav");
const element = document.querySelectorAll(".element");
let menuOpen = false;
let animationOpen = false;

const hide = function (e) {
  if (menuOpen === false) {
    cover.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    burgerbtn.classList.add("open");
    menuOpen = true;
  } else {
    document.body.style.overflow = "";
    document.body.style.height = "";
    cover.classList.add("hidden");
    burgerbtn.classList.remove("open");
    menuOpen = false;
  }
};
/*
burgerbtn.addEventListener("click", () => {
  if (animationOpen == false) {
    burgerbtn.classList.add("open");
    animationOpen = true;
  } else {
    burgerbtn.classList.remove("open");
    animationOpen = false;
  }
});
*/
menuBtn.addEventListener("click", hide);
element.forEach((el) => el.addEventListener("click", hide));

/*
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className.split("_")[0];
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
*/
