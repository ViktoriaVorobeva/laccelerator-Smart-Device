const breakpoint = window.matchMedia('(max-width:767px)');
const mainScreenButton = document.querySelector('.main-screen__link');
const catalogText = document.querySelector('.catalog__text');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    mainScreenButton.textContent = 'бесплатная консультация';
    catalogText.textContent = 'Товары и услуги Smart Device';
  } else {
    mainScreenButton.textContent = 'Получить бесплатную консультацию';
    catalogText.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};
breakpoint.addListener(breakpointChecker);

export {breakpointChecker};
