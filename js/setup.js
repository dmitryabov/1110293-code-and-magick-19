'use strict';


var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия',
  'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',
  'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').
content.querySelector('.setup-similar-item');


var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};


var generateWizards = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    var wizard = {
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    };
    wizards.push(wizard);
  }
  return wizards;
};


var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


var wizards = generateWizards(WIZARDS_NUMBER);

var creatureFragmentWithWizards = function (arrayOfWizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arrayOfWizards.length; i++) {
    fragment.appendChild(createWizard(arrayOfWizards[i]));
  }
  return fragment;
};


similarListElement.appendChild(creatureFragmentWithWizards(wizards));

userDialog.querySelector('.setup-similar').classList.remove('hidden');


// Раздел взаимодействия пользователя с сайтом


var setupPlayer = document.querySelector('.setup-player');
var setupOpen = document.querySelector('.setup-open');
var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
var setupClose = userDialog.querySelector('.setup-close');
var setupWizard = setupWizardAppearance.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var inputUserName = document.querySelector('.setup-user-name');


var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && inputUserName !== document.activeElement) {
    closePopup();
  }
};


var onEnterPress = function (evt, action) {
  if (evt.key === ENTER_KEY) {
    action();
  }
};


var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};


var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


setupOpen.addEventListener('click', function () {
  openPopup();
});


setupOpen.addEventListener('keydown', function (evt) {
  onEnterPress(evt, openPopup);
});


setupClose.addEventListener('click', function () {
  closePopup();
});


setupClose.addEventListener('keydown', function (evt) {
  onEnterPress(evt, closePopup);
});


var onWizardCoatClick = function () {
  var colorCoat = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = colorCoat;
  setupPlayer.querySelector('input[name="coat-color"]').value = colorCoat;
};


var onWizardEyesClick = function () {
  var colorWizardEyes = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = colorWizardEyes;
  setupPlayer.querySelector('input[name="eyes-color"]').value = colorWizardEyes;
};


var onFireballClick = function () {
  var colorFireball = getRandomElement(FIREBALL_COLORS);
  wizardFireball.style.background = colorFireball;
  setupPlayer.querySelector('input[name="fireball-color"]').value = colorFireball;
};


wizardCoat.addEventListener('click', onWizardCoatClick);

wizardEyes.addEventListener('click', onWizardEyesClick);

wizardFireball.addEventListener('click', onFireballClick);


wizardCoat.addEventListener('keydown', function (evt) {
  onEnterPress(evt, onWizardCoatClick);
});

wizardEyes.addEventListener('keydown', function (evt) {
  onEnterPress(evt, onWizardEyesClick);
});

wizardFireball.addEventListener('keydown', function (evt) {
  onEnterPress(evt, onFireballClick);
});
