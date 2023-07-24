const scsWebsite = {};

scsWebsite.init = function () {
    scsWebsite.showDropdown();
};

scsWebsite.showDropdown = () => {
    document.addEventListener('click', e => {
        const isDropdownButton = e.target.matches('[data-dropdown-button]');
        const dropdownButton = e.target;

        if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

        let currentDropdown
        if (isDropdownButton) {
            currentDropdown = e.target.closest('[data-dropdown]');
            currentDropdown.toggleAttribute("data-visible");

            currentDropdown.hasAttribute('data-visible')
                ? dropdownButton.setAttribute("aria-expanded", true)
                : dropdownButton.setAttribute("aria-expanded", false);
        }

        document.querySelectorAll("[data-dropdown][data-visible]").forEach(dropdown => {
            if (dropdown === currentDropdown) return
            dropdown.querySelector("[aria-expanded='true']").setAttribute("aria-expanded", false);
            dropdown.removeAttribute("data-visible");
        });
    })
}

scsWebsite.init();