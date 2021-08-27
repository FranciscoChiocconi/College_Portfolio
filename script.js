const menuBtn = document.querySelector(".burger");
const cover = document.querySelector(".cover");
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
