const modifiers = {
    elMainContent: 'main-content'
}

const elSiteHeader = document.querySelector('.site-header');
const elMainContent = document.querySelector('.main-content');


if (window.innerWidth <= 1024 && elMainContent) {
    elMainContent.style.marginTop = elSiteHeader.offsetHeight + "px";
} else {
    elMainContent.style.marginTop = "0";
}