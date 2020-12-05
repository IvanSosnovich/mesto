const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const mainContainer = document.querySelector('main'); // Находим главный контейнер
const profileContainer = mainContainer.querySelector('.profile'); // Находим секцию профиля

// Находим значения текста в профиле
const profileTitle = profileContainer.querySelector('.profile__title');
const profileSubTitle = profileContainer.querySelector('.profile__subtitle');

// Находим кнопку редактирования профиля
const editProfileInfoButton = profileContainer.querySelector('.profile__edit-button');

// Находим кнопку добовления карточки
const addCardButton = profileContainer.querySelector('.profile__add-button');

// Находим форму редактирования профиля
const formEditProfile = mainContainer.querySelector('.popup_edit-profile');

// Находим форму добовления карточки
const formAddCard = mainContainer.querySelector('.popup_add-new-card');

// Находим кнопку закрытия формы редоктирования профиля
const closeEditFormButton = formEditProfile.querySelector('.popup__close-button');

// Находим кнопку закрытия формы добовления карточки
const cloaseAddCardFormButton = formAddCard.querySelector('.popup__close-button');

// Находим текстовые поля формы
const newTitleProfile = formEditProfile.querySelector('.popup__input_value-title');
const newSubtitleProfile = formEditProfile.querySelector('.popup__input_value-subtitle');

// Находим значения импутов поля добовления карточки
const nameCard = formAddCard.querySelector('.popup__input_name');
const urlImage = formAddCard.querySelector('.popup__input_url-image');

// Находим блок где отображаються все карточки
const placesBlock = document.querySelector('.places');

// Функция добавления карточек при загрузки страници
function rendering() {
  initialCards.forEach(item => {
    const cardPlaces = document.querySelector('#card').content.cloneNode(true);
    cardPlaces.querySelector('.card__image').src = item.link;
    cardPlaces.querySelector('.card__image').alt = item.name;
    cardPlaces.querySelector('.card__title').textContent = item.name;
    placesBlock.append(cardPlaces);
  })
}

// Функция добовления 1 элемента
function addCardElement({
  name,
  link
}) {
  // Находим template card в main блок
  // сразу получаем содержимое и кланируем его
  const cardPlaces = document.querySelector('#card').content.cloneNode(true);
  cardPlaces.querySelector('.card__image').src = link;
  cardPlaces.querySelector('.card__image').alt = name;
  cardPlaces.querySelector('.card__title').textContent = name;
  debugger
  placesBlock.prepend(cardPlaces);
}

// Функция открытия формы для редактирования профиля
function showEditForm() {
  formEditProfile.classList.add('popup_active');
  newTitleProfile.value = profileTitle.textContent;
  newSubtitleProfile.value = profileSubTitle.textContent;
}

// Функция открытия формы добовления карточки
function showAddCardForm() {
  formAddCard.classList.add('popup_active');
}

// Функция закрытия формы редактирования профиля
function closeEditForm() {
  formEditProfile.classList.remove('popup_active');
}

// Функция закрытия формы доовления карточки
function closeAddCardForm() {
  formAddCard.classList.remove('popup_active');
}

// Функция сохранения формы профиля
function saveEditFormValue(event) {
  event.preventDefault();
  profileTitle.textContent = newTitleProfile.value;
  profileSubTitle.textContent = newSubtitleProfile.value;
  closeEditForm();
}

// Функция сохранения новой карточки
function saveNewCard(event) {
  event.preventDefault();
  const newCard = {
    name: nameCard.value,
    link: urlImage.value
  }
  debugger
  addCardElement(newCard);
  nameCard.value = '';
  urlImage.value = '';
  debugger
  closeAddCardForm();
}


rendering();

// Слушатели
editProfileInfoButton.addEventListener('click', showEditForm); // кнопка редактирования профиля
closeEditFormButton.addEventListener('click', closeEditForm); // кнопка закрытия редактирования формы
formEditProfile.addEventListener('submit', saveEditFormValue);

addCardButton.addEventListener('click', showAddCardForm);
cloaseAddCardFormButton.addEventListener('click', closeAddCardForm);
formAddCard.addEventListener('submit', saveNewCard);