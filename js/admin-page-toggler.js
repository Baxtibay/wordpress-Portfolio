const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("mainContent");
const main = document.querySelector('.main-content')

menuToggle.addEventListener("click", () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        sidebar.classList.toggle("sidebar--open");
        // overlay.classList.toggle("overlay--show");
    } else {
        sidebar.classList.toggle("sidebar--closed");
        mainContent.classList.toggle("main-content--expanded");
    }
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--open");
    // overlay.classList.remove("overlay--show");
});
