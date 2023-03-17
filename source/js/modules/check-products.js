const breakpoint = window.matchMedia('(max-width:767px)');
const catalogText = document.querySelector('.catalog__text');
const breakpointCatalogChecker = () => {
  if (breakpoint.matches) {
    catalogText.textContent = 'Товары и услуги Smart Device';
  } else {
    catalogText.textContent = 'Smart Device предлагает следующие товары и услуги';
  }
};
breakpoint.addListener(breakpointCatalogChecker);

export {breakpointCatalogChecker};
