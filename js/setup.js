'use strict';


var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия',
  'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',
  'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var AYES_COLORS = ['black', 'red', 'blue', 'yellow', 'gree'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').
content.querySelector('.setup-similar-item');


var getRandomInt = function (array) {
  return Math.floor(Math.random() * array.length);
};


var generateWizards = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    var wizard = {
      name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES)],
      coatColor: COAT_COLORS[getRandomInt(COAT_COLORS)],
      eyesColor: AYES_COLORS[getRandomInt(AYES_COLORS)]
    };
    wizards.push(wizard);
  }
  return wizards;
};


var creatureWizard = function (array) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = array.name;
  wizardElement.querySelector('.wizard-coat').style.fill = array.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = array.eyesColor;
  return wizardElement;
};


var creatureFragmentWithWizards = function (numberOfWizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < generateWizards(numberOfWizards).length; i++) {
    fragment.appendChild(creatureWizard(generateWizards(numberOfWizards)[i]));
  }
  return fragment;
};


similarListElement.appendChild(creatureFragmentWithWizards(WIZARDS_NUMBER));

userDialog.querySelector('.setup-similar').classList.remove('hidden');

