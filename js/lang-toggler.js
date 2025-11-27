const selected = document.getElementById("selectedLang");
const dropdown = document.getElementById("langDropdown");

selected.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".language-switcher__item").forEach(item => {
    item.addEventListener("click", () => {

        const lang = item.getAttribute("data-lang");
        const flagClass = item.querySelector(".language-switcher__flag").classList.value;
        const text = item.querySelector(".language-switcher__label").innerText;

        // Change flag icons
        const selectedFlag = selected.querySelector(".language-switcher__flag");
        selectedFlag.className = flagClass;

        // Change label
        selected.querySelector(".language-switcher__label").innerText = text;

        // Update lang attribute
        selected.setAttribute("data-lang", lang);

        dropdown.style.display = "none";
    });
});

// Close when clicked outside of dropdown
document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-switcher")) {
        dropdown.style.display = "none";
    }
});
