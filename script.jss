document.addEventListener("DOMContentLoaded", () => {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    dropdownItems.forEach(dropdown => {
        dropdown.addEventListener('show.bs.dropdown', () => {
            const openMenus = document.querySelectorAll('.dropdown-menu.show');
            openMenus.forEach(menu => {
                if (menu !== dropdown.querySelector('.dropdown-menu')) {
                    const dropdownInstance = bootstrap.Dropdown.getInstance(menu.closest('.dropdown'));
                    dropdownInstance.hide();
                }
            });
        });
    });
});
