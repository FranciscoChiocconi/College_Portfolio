const menuBtn = document.querySelector(".burger");
const cover = document.querySelector(".cover");
const sections = document.querySelectorAll("section");
const navEl = document.getElementsByClassName(".main_nav");

let menuOpen = false;

menuBtn.addEventListener("click", function (e) {
  if (menuOpen === false) {
    cover.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    menuOpen = true;
  } else {
    document.body.style.overflow = "";
    document.body.style.height = "";
    cover.classList.add("hidden");
    menuOpen = false;
  }
});

const options = {
  threshold: 0.8,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    console.log(navEl);
    const className = entry.target.className.split("_")[0];
    console.log(className);
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
