;(function() {
  const form = document.querySelector('.form'),
  formButton = document.querySelector('.form__button'),
  formPhone = document.querySelector('.form__phone-input'),
  formDigits = document.querySelectorAll('.form__digit'),
  modal = document.querySelector('.modal'),
  modalTitle = document.querySelector('.modal__title'),
  modalClose = document.querySelector('.modal__close'),
  formDigitsLength = formDigits.length;

formPhone.addEventListener('keydown', function (e) {
  let isDigit = false,
    isSymbol = false,
    isControl = false;
  if (e.key >= 0 || e.key <= 9) {
    isDigit = true;
  }

  if (e.key == '-' || e.key == '+' || e.key == '(' || e.key == ')') {
    isSymbol = true;
  }

  if (e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Backspace') {
    isControl = true;
  }

  if (!isDigit && !isSymbol && !isControl) {
    e.preventDefault();
  }
});

for (let i = 0; i < formDigitsLength; ++i) {
  formDigits[i].addEventListener('keydown', function (e) {
    let isDigit = false,
      isControl = false;

    if (e.key >= 0 || e.key <= 9) {
      isDigit = true;
    }

    if (e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'Backspace') {
      isControl = true;
    }

    if (!isDigit && !isControl) {
      e.preventDefault();
    }
  });
};

function validateField(field) {
  if (!field.checkValidity()) {
    modal.style.display = 'flex';
    modalTitle.textContent = 'Пожалуйста, заполните выделенные поля!!!';
    return false;
  } else {
    return true;
  }
};

function validateForm(siteForm) {
  let valid = true;

  if (!validateField(siteForm.elements.name)) {
    valid = false;
  }
  if (!validateField(siteForm.elements.phone)) {
    valid = false;
  }
  if (!validateField(siteForm.elements.street)) {
    valid = false;
  }
  if (!validateField(siteForm.elements.home)) {
    valid = false;
  }
  if (!validateField(siteForm.elements.comments)) {
    valid = false;
  }
  return valid;
};

formButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (validateForm(form)) {
    const data = new FormData(form);
    data.append("name", form.elements.name.value);
    data.append("phone", form.elements.phone.value);
    data.append("comment", form.elements.comments.value);
    data.append("to", "test@yandex.ru");

    console.log(data);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(data);
    xhr.addEventListener('load', function (e) {
      document.body.classList.add('body-overflow');
      modal.style.display = 'flex';
      modalTitle.textContent = xhr.response.message;

      if (xhr.response.status == 1) {
        form.reset();
      }
    });
  }
});

modalClose.addEventListener('click', function (e) {
  modal.style.display = 'none';
  document.body.classList.remove('body-overflow');
});
})()