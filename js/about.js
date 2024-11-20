document.getElementById("about-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const aboutSection = document.getElementById("about-section");
    aboutSection.classList.toggle("hidden");
  });