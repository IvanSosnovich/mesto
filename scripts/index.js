const initialCards = [
    {
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

// Находим форму редактирования профиля
const formEditProfile = mainContainer.querySelector('.popup');

// Находим кнопку закрытия формы
const closeEditFormButton = formEditProfile.querySelector('.popup__close-button');

// Находим текстовые поля формы
const newTitleProfile = formEditProfile.querySelector('.popup__input_value-title');
const newSubtitleProfile = formEditProfile.querySelector('.popup__input_value-subtitle');



// Находим блок где отображаються все карточки
const placesBlock = document.querySelector('.places');

// Функция доавления карточек при загрузки страници
function rendering() {
  initialCards.forEach(item => {
    addCardElement(item);
  })
}

// Функция добовления 1 элемента
function addCardElement({ name, link }) {
  // Находим template card в main блок
  // сразу получаем содержимое и кланируем его
  const cardPlaces = document.querySelector('#card').content.cloneNode(true);
  cardPlaces.querySelector('.card__image').src = link;
  cardPlaces.querySelector('.card__title').textContent = name;
  placesBlock.append(cardPlaces);
}

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

rendering();

// Слушатели
editProfileInfoButton.addEventListener('click', showEditForm); // кнопка редактирования профиля
closeEditFormButton.addEventListener('click', closeEditForm); // кнопка закрытия редактирования формы
formEditProfile.addEventListener('submit',saveEditFormValue);