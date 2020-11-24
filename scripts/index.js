const mainContainer = document.querySelector('main'); // Находим главный контейнер
const profileContainer = mainContainer.querySelector('.profile'); // Находим секцию профиля

// Находим значения текста в профиле
const profileTitle = profileContainer.querySelector('.profile__title');
const profileSubTitle = profileContainer.querySelector('.profile__subtitle');

// Находим кнопку редактирования профиля
const editProfileInfoButton = profileContainer.querySelector('.profile__edit-button');

// Находим форму редактирования профиля
const formEditProfile = mainContainer.querySelector('.popup');

// Находим кнопку закрытия формы
const closeEditFormButton = formEditProfile.querySelector('.popup__close-button');

//Находим кнопку сохранения введенных данных
const saveEditFormButton = formEditProfile.querySelector('.popup__save-button');

// Находим текстовые поля формы
const newTitleProfile = formEditProfile.querySelector('.popup__input_value-title');
const newSubtitleProfile = formEditProfile.querySelector('.popup__input_value-subtitle');

// Функция открытия формы для редактирования профиля
function showEditForm() {
  formEditProfile.classList.add('popup_active');
  newTitleProfile.value = profileTitle.textContent;
  newSubtitleProfile.value = profileSubTitle.textContent;
}

// Функция закрытия формы редактирования профиля
function closeEditForm() {
  formEditProfile.classList.remove('popup_active');
}

function saveEditFormValue(event) {
  event.preventDefault();
  profileTitle.textContent = newTitleProfile.value;
  profileSubTitle.textContent = newSubtitleProfile.value;
  closeEditForm();
}

// Слушатели
editProfileInfoButton.addEventListener('click', showEditForm); // кнопка редактирования профиля
closeEditFormButton.addEventListener('click', closeEditForm); // кнопка закрытия редактирования формы
saveEditFormButton.addEventListener('click', saveEditFormValue); // кнопка сохранения новых данных
formEditProfile.addEventListener('submit',saveEditFormValue);