const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

const arrowLeft = document.querySelector('.carousel__arrow--left');
const arrowRight = document.querySelector('.carousel__arrow--right');
const carouselSlides = document.querySelectorAll('.carousel__slide')

let carouselSlideWidth;
let currentCarouselElement = 0;

const moveCarousel = (currentCarouselElement, carouselSlideWidth) => {
    console.log(carouselSlides)
    carouselSlides.forEach(slide => slide.style.transform = `translateX(-${currentCarouselElement*carouselSlideWidth}px)`);
    document.querySelector('.carousel__slide--active').classList.remove('carousel__slide--active');
    console.log(currentCarouselElement)
    carouselSlides[currentCarouselElement].classList.add('carousel__slide--active');
}

const onHamburgerClick = () => {
    hamburger.classList.toggle('hamburger--active');
    navbar.classList.toggle('navbar--active');
}

hamburger.addEventListener('click', onHamburgerClick);
navbar.addEventListener('click', onHamburgerClick);

arrowLeft.addEventListener('click', () => {
    carouselSlideWidth = document.querySelector('.carousel__slide').offsetWidth;
    currentCarouselElement === 0 ? currentCarouselElement = 4 :  currentCarouselElement--;
    moveCarousel(currentCarouselElement, carouselSlideWidth);
});

arrowRight.addEventListener('click', () => {
    carouselSlideWidth = document.querySelector('.carousel__slide').offsetWidth;
    currentCarouselElement === 4 ? currentCarouselElement = 0 :  currentCarouselElement++;
    moveCarousel(currentCarouselElement, carouselSlideWidth);
});

