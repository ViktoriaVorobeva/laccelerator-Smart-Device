const scrollSection = document.querySelector('#form');
const scrollButton = document.querySelector('.main-screen__link');


const getScrollForm = () => {
  if (scrollSection && scrollButton) {
    scrollButton.addEventListener('click', scrollElement);
  }
};

function scrollElement() {
  scrollSection.scrollIntoView({behavior: 'smooth'});
}

export {getScrollForm};
