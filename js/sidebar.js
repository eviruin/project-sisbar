// document.addEventListener("DOMContentLoaded", function () {
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".side-bar");

// Toggle sidebar saat tombol menu diklik
menuBtn.addEventListener("click", () => {
  sideBar.classList.add("active");
});

// Tutup sidebar saat tombol close diklik
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
});