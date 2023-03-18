const scrollSection = document.querySelector('#form');
const scrollButton = document.querySelector('.main-screen__link');

const getScrollForm = () => scrollButton.addEventListener('click', scrollElement);

function scrollElement() {
  scrollSection.scrollIntoView({behavior: 'smooth'});
}

export {getScrollForm};
