const submitButtonElement = document.querySelector('button[type="submit"]');

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Задать вопрос';
};

const sendData = (onSuccess, body) => {
  fetch(
    'https://echo.htmlacademy.ru',
    {
      method: 'POST',
      body,
    },
)
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        alert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      alert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};


const baseSuccessCallback = (event) => {
  event.preventDefault();
  blockSubmitButton();
  sendData(() => {
    alert('Форма отправлена');
    unblockSubmitButton();
  },
  new FormData(event.target));
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
