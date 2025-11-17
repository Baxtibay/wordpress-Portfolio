const selected = document.getElementById("selectedLang");
const dropdown = document.getElementById("langDropdown");

selected.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".language-switcher__item").forEach(item => {
    item.addEventListener("click", () => {

        const lang = item.getAttribute("data-lang");
        const flag = item.querySelector(".language-switcher__flag").src;
        const text = item.querySelector(".language-switcher__label").innerText;

        // Update
        selected.setAttribute("data-lang", lang);
        selected.querySelector(".language-switcher__flag").src = flag;
        selected.querySelector(".language-switcher__label").innerText = text;

        dropdown.style.display = "none";

        console.log("Til tanlandi:", lang);
    });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-switcher")) {
        dropdown.style.display = "none";
    }
});
