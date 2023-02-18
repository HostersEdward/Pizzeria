var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function () {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.querySelector(".header__top").classList.add(className);
    } else {
        document.querySelector(".header__top").classList.remove(className);
    }
};
const menu = document.querySelector('.burger');
if (menu) {
    const menuBody = document.querySelector('.header__menu');
    menu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
