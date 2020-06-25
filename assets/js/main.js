window.onload = function () {
    const menus = document.querySelector('#menus');
    const toggler = document.querySelector('#toggler');
    const close = document.querySelector('#close');
    const down = document.querySelector('#down');

    toggler.addEventListener("click", () => {
        menus.classList.toggle("open");
    });

    close.addEventListener("click", () => {
        menus.classList.remove("open");
    });

    down.addEventListener("click", () => {
        document.querySelector('.one').scrollIntoView({
            behavior: 'smooth'
        });
    });

}