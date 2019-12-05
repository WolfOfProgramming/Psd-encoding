const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

const onHamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
    navbar.classList.toggle('navbar--active');
}

hamburger.addEventListener('click', onHamburgerClick);