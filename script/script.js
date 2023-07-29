const scsWebsite = {};

scsWebsite.navToggle = document.querySelector('.mobile-nav-toggle');
scsWebsite.primaryNav = document.querySelector('.primary-navigation');
scsWebsite.primaryHeader = document.querySelector('.primary-header');

scsWebsite.navLinks = document.querySelectorAll('.nav-item');
scsWebsite.navLogo = document.querySelector('.nav-logo');
scsWebsite.footerLogo = document.querySelector('.footer-logo');

scsWebsite.init = function () {
    scsWebsite.showMobileNav();
    scsWebsite.showDropdown();
    scsWebsite.currentPage();
};

scsWebsite.showMobileNav = () => {
    scsWebsite.navToggle.addEventListener("click", () => {
        scsWebsite.primaryNav.toggleAttribute("data-visible");
        scsWebsite.primaryNav.hasAttribute('data-visible')
            ? scsWebsite.navToggle.setAttribute("aria-expanded", true)
            : scsWebsite.navToggle.setAttribute("aria-expanded", false);
        scsWebsite.primaryHeader.classList.toggle("active");
    })
}

scsWebsite.showDropdown = () => {
    document.addEventListener('click', e => {
        const isDropdownButton = e.target.matches('[data-dropdown-button]');
        const isDropdownArrow = e.target.matches('#dropdown-arrow');
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

scsWebsite.currentPage = () => {
    scsWebsite.navLinks.forEach((link)=> {
        if(link.href === window.location.href) {
            link.setAttribute('aria-current', 'page');
            link.setAttribute('href', '#');
        }
    })

    if (scsWebsite.navLogo.href === window.location.href) {
        scsWebsite.navLogo.setAttribute('aria-current', 'page');
        scsWebsite.navLogo.setAttribute('href', '#');
    }
    if (scsWebsite.footerLogo.href === window.location.href) {
        scsWebsite.footerLogo.setAttribute('aria-current', 'page');
        scsWebsite.footerLogo.setAttribute('href', '#nav-logo');
    }
}

scsWebsite.init();