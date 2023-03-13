const accordeonNavButton = document.querySelector('.navigation__button');
const accordeonConButton = document.querySelector('.contacts__button');
const nav = document.querySelector('.navigation');
const contacts = document.querySelector('.contacts');

function addAccordeon() {
  accordeonNavButton.addEventListener('click', getNavOpen);
  accordeonConButton.addEventListener('click', getConOpen);
}

function closeNav() {
  nav.classList.add('navigation--closed');
  nav.classList.remove('navigation--opened');
}

function getNavOpen() {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    closeNav();
  }
  if (nav.classList.contains('navigation--opened')) {
    closeCon();
  }
}

function closeCon() {
  contacts.classList.add('contacts--closed');
  contacts.classList.remove('contacts--opened');
}

function getConOpen() {
  if (contacts.classList.contains('contacts--closed')) {
    contacts.classList.remove('contacts--closed');
    contacts.classList.add('contacts--opened');
  } else {
    closeCon();
  }

  if (contacts.classList.contains('contacts--opened')) {
    closeNav();
  }
}

export {addAccordeon};
