const modifiers = {
    elSiteHeaderOpen: 'site-header--open',
    bodyLocked: 'body--locked'
};

const elSiteHeader = document.querySelector('.site-header');
const elSiteHeaderToggler = document.querySelector('.site-header__toggler');
const elTogglerIcon = document.querySelector('.site-header__toggler-icon');
const body = document.body;

// CLICK Toggler
elSiteHeaderToggler.addEventListener('click', () => {
    const isOpen = elSiteHeader.classList.toggle(modifiers.elSiteHeaderOpen);

    body.classList.toggle(modifiers.bodyLocked, isOpen);
    elTogglerIcon.textContent = isOpen ? 'close' : 'menu';
});

// Close when clicked outside the navbar
document.addEventListener('click', (evt) => {

    const clickOutsideNavbar = 
        !elSiteHeader.contains(evt.target) &&
        !elSiteHeaderToggler.contains(evt.target);

    if (clickOutsideNavbar && elSiteHeader.classList.contains(modifiers.elSiteHeaderOpen)) {
        elSiteHeader.classList.remove(modifiers.elSiteHeaderOpen);
        body.classList.remove(modifiers.bodyLocked);
        elTogglerIcon.textContent = 'menu';
    }
});
