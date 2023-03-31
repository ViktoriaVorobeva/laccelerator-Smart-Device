import {showErrorMessage, showSuccessMessage} from './sibmit-message';

const submitButtonElement = document.querySelector('button[type="submit"]');

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
      'https://echo.htmlacademy.ru',
      {
        method: 'POST',
        body,
      }
  )
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onFail();
        }
      })
      .catch(() => {
        onFail();
      });
};


const baseSuccessCallback = (event) => {
  event.preventDefault();
  blockSubmitButton();
  sendData(() => {
    unblockSubmitButton();
    showSuccessMessage();
  },
  () => {
    unblockSubmitButton();
    showErrorMessage();
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
