const burgerMenu = () => {
    const burgerButton = document.querySelector(".nav-menu__burger");
    const menuLinks = document.querySelector(".nav-menu__links");
    const closeButton = document.querySelector(".nav-menu__close");

    burgerButton.addEventListener("click", function () {
        menuLinks.classList.add("nav-menu__links--open");
    });

    closeButton.addEventListener("click", function () {
        menuLinks.classList.remove("nav-menu__links--open");
    });
};

export default burgerMenu;
