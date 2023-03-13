const breakpoint = window.matchMedia('(max-width:767px)');
const mainScreenButton = document.querySelector('.main-screen__link');
const breakpointChecker = () => {
  if (breakpoint.matches) {
    mainScreenButton.textContent = 'бесплатная консультация';
  } else {
    mainScreenButton.textContent = 'Получить бесплатную консультацию';
  }
};
breakpoint.addListener(breakpointChecker);

export {breakpointChecker};
