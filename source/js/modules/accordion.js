const accordionButtons = document.querySelectorAll('.accordion__button');

const addAccordion = () => {
  accordionButtons.forEach((button) => button.addEventListener('click', getAccordionShow));
};

function getAccordionShow(evt) {
  let accordionShowElement = document.querySelector('.accordion--show');
  evt.target.parentElement.classList.toggle('accordion--show');

  if (accordionShowElement && evt.target.parentElement !== accordionShowElement) {
    accordionShowElement.classList.remove('accordion--show');
    evt.target.parentElement.classList.add('accordion--show');
  }
}

export {addAccordion};
