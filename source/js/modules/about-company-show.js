const showMoreButton = document.querySelector('.about-company__button');
const showMoreText = document.querySelector('.about-company__more');
const showMoreTextAdd = document.querySelector('.about-company span');
const stylesShowMoreText = window.getComputedStyle(showMoreText);
const breakpoint = window.matchMedia('(max-width:767px)');

const showMoreAbout = () => {
  showMoreButton.addEventListener('click', showMore);
};

function showMore() {
  if (stylesShowMoreText.display === 'none') {
    showMoreButton.textContent = 'Скрыть';
    showMoreText.style.display = 'inline';
    if (breakpoint.matches) {
      showMoreTextAdd.style.display = 'inline';
    }
  } else {
    showMoreButton.textContent = 'Подробнее';
    showMoreText.style.display = 'none';
    if (breakpoint.matches) {
      showMoreTextAdd.style.display = 'none';
    }
  }
}

const breakpointShowChecker = () => {
  if (breakpoint.matches) {
    showMoreTextAdd.style.display = 'none';
  } else {
    showMoreTextAdd.style.display = 'inline';
  }
};
breakpoint.addListener(breakpointShowChecker);

export {showMoreAbout, breakpointShowChecker};
