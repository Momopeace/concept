const menuMobile = document.querySelector(".menu-mobile");
const btnClose = document.querySelector(".close");
const btnOpen = document.querySelector(".open");

btnOpen.addEventListener("click", () => {
  btnOpen.classList.add("hidden");
  btnClose.classList.remove("hidden");
  menuMobile.style.left = "0px";
});

btnClose.addEventListener("click", () => {
  btnClose.classList.add("hidden");
  btnOpen.classList.remove("hidden");
  menuMobile.style.left = "-150px";
});

// formulaire de conctat
const message = "Merci pour votre message";

document.getElementById("contact form");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});