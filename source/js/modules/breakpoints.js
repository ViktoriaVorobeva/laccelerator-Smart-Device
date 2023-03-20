const breakpoint = window.matchMedia('(max-width:767px)');
const mainScreenButton = document.querySelector('.main-screen__link');
const catalogText = document.querySelector('.catalog__text');

const breakpointChecker = () => {
  if (mainScreenButton && breakpoint.matches) {
    mainScreenButton.textContent = 'бесплатная консультация';
  } else {
    mainScreenButton.textContent = 'Получить бесплатную консультацию';
  }
  if (catalogText && breakpoint.matches) {
    catalogText.textContent = 'Товары и услуги Smart Device';
  } else {
    catalogText.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};
breakpoint.addListener(breakpointChecker);

export {breakpointChecker};
