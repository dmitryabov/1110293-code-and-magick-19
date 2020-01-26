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


var getRandomInt = function (arr) {
  return Math.floor(Math.random() * arr.length);
};


var getWizards = function (numberOfWizards) {
  var wizards = [];
  for (var i = 0; i < numberOfWizards; i++) {
    var object = {
      name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES)],
      coatColor: COAT_COLORS[getRandomInt(COAT_COLORS)],
      eyesColor: AYES_COLORS[getRandomInt(AYES_COLORS)]
    };
    wizards.push(object);
  }
  return wizards;
};


var renderWizards = function (arr) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = arr.name;
  wizardElement.querySelector('.wizard-coat').style.fill = arr.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
  return wizardElement;
};


var addWizardsToFragment = function (int) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < getWizards(int).length; i++) {
    fragment.appendChild(renderWizards(getWizards(int)[i]));
  }
  return fragment;
};


similarListElement.appendChild(addWizardsToFragment(WIZARDS_NUMBER));

userDialog.querySelector('.setup-similar').classList.remove('hidden');

