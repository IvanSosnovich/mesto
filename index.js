const mainContainer = document.querySelector('main'); // Находим главный контейнер
const profileContainer = mainContainer.querySelector('.profile'); // Находим секцию профиля

// Находим значения текста в профиле
const profileTitle = profileContainer.querySelector('.profile__title');
const profileSubTitle = profileContainer.querySelector('.profile__subtitle');

// Находим кнопку редактирования профиля
const editProfileInfoButton = profileContainer.querySelector('.profile__edit-button');
editProfileInfoButton.addEventListener('click', showEditForm);

// Находим форму редактирования профиля
const formEditProfile = mainContainer.querySelector('.popup');

// Находим кнопку закрытия формы
const closeEditFormButton = formEditProfile.querySelector('.popup__close-button');
closeEditFormButton.addEventListener('click', closeEditForm); // Добовляем слушателя кнопки закрытия формы

//Находим кнопку сохранения введенных данных
const saveEditFormButton = formEditProfile.querySelector('.popup__save-button');
saveEditFormButton.addEventListener('click', saveEditFormValue);

// Находим текстовые поля формы
const formValue = formEditProfile.querySelectorAll('input');



// Функция открытия формы для редактирования профиля
function showEditForm() {
  formEditProfile.classList.remove('popup_no-active');
  formEditProfile.classList.add('popup');
  formValue[0].value = profileTitle.textContent;
  formValue[1].value = profileSubTitle.textContent;
}

// Функция закрытия формы редактирования профиля
function closeEditForm() {
  formEditProfile.classList.add('popup_no-active');
  formEditProfile.classList.remove('popup');
}

function saveEditFormValue(event) {
  event.preventDefault();
  profileTitle.textContent = formValue[0].value;
  profileSubTitle.textContent = formValue[1].value;
  closeEditForm();
}